import { createSlice } from "@reduxjs/toolkit";
import {
  getMe,
  logOut,
  preAuthState,
  requestOtp,
  verifyOtp,
} from "../action/auth";
import { IUser } from "@/constants/types";

interface authState {
  loading: boolean;
  error: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isVerified: boolean;
  user?: IUser | null;
  isAuthenticated?: boolean;
}

const initialState: authState = {
  loading: false,
  error: null,
  accessToken: "",
  refreshToken: "",
  isVerified: false,
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // request token
    builder
      .addCase(requestOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(requestOtp.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(requestOtp.rejected, (state, action) => {
        state.loading = false;
      });

    // verify token
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        const { access, refresh } = action.payload;
        state.accessToken = access;
        state.refreshToken = refresh;
        state.loading = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
      });

    // auth state
    builder.addCase(preAuthState.fulfilled, (state, action) => {
      // state.user = action.payload?.user.data;
      if (
        action.payload &&
        "accessToken" in action.payload &&
        "refreshToken" in action.payload
      ) {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      }
      state.isAuthenticated = true;
    });

    // log out
    builder
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
        state.accessToken = "";
        state.refreshToken = "";
        state.isAuthenticated = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
      });
    // get me

    builder
      .addCase(getMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        console.log("action", action.payload);
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
