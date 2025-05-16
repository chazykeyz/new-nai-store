import * as SecureStore from "expo-secure-store";

export const loadAuthState = async () => {
  try {
    const accessToken = await SecureStore.getItemAsync("accessToken");
    const refreshToken = await SecureStore.getItemAsync("refreshToken");

    return {
      auth: {
        loading: false,
        error: null,
        otpSent: false,
        accessToken: accessToken || "",
        refreshToken: refreshToken || "",
        isVerified: false,
      },
    };
  } catch (error) {
    console.error("Failed to load tokens from SecureStore", error);
    return undefined;
  }
};
