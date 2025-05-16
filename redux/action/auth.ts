import {
  DELETE_USER,
  FETCH_ME,
  SEND_OTP,
  VERIFY_OTP,
} from "@/constants/endpoints";
import myAxios from "@/utils/axios";
import { getFirstErrorMessage } from "@/utils/functions";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  saveTokens,
} from "@/utils/tokenStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { router } from "expo-router";

export const requestOtp = createAsyncThunk(
  "auth/requestOtp",
  async (phoneNumber: string, { rejectWithValue }) => {
    try {
      const res = await axios.post(SEND_OTP, {
        phone_number: phoneNumber,
      });

      return res.data;
    } catch (error: any) {
      const errorDetail =
        getFirstErrorMessage(error.response?.data) ||
        "Otp request failed, please try again.";
      return rejectWithValue(errorDetail);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (
    credentials: { phone_number: string; otp_code: string },
    { rejectWithValue }: { rejectWithValue: (value: string) => void }
  ) => {
    try {
      const res = await axios.post(VERIFY_OTP, {
        phone_number: credentials.phone_number,
        otp_code: credentials.otp_code,
      });

      const { access, refresh } = res.data.data;
      await saveTokens(access, refresh);

      return res.data;
    } catch (error: any) {
      const errorDetail =
        error.response?.data?.detail || "Verify failed, please try again.";
      return rejectWithValue(errorDetail);
    }
  }
);

export const preAuthState = createAsyncThunk(
  "auth/preauth",
  async (
    _,
    { rejectWithValue }: { rejectWithValue: (value: string) => void }
  ) => {
    try {
      const accessToken = await getAccessToken();
      const refreshToken = await getRefreshToken();
      let res = null;

      // res = await myAxios.get(FETCH_ME);

      return { accessToken, refreshToken };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.message || "OTP verification failed!"
      );
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (
    _,
    { rejectWithValue }: { rejectWithValue: (value: string) => void }
  ) => {
    try {
      await clearTokens().then(() => {
        router.replace("/(auth)/otp");
      });
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.message || "Getting me failed!"
      );
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "auth/deleteAccount",
  async (
    _,
    { rejectWithValue }: { rejectWithValue: (value: string) => void }
  ) => {
    try {
      await axios.delete(DELETE_USER).then(async (res) => {
        if (res.data.success) {
          await clearTokens().then(() => {
            router.replace("/");
          });
        }
      });
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.message || "Getting me failed!"
      );
    }
  }
);

// get me
export const getMe = createAsyncThunk(
  "auth/getMe",
  async (
    _,
    { rejectWithValue }: { rejectWithValue: (value: string) => void }
  ) => {
    try {
      const res = await myAxios.get(FETCH_ME);

      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.message || "getting me failed!"
      );
    }
  }
);
