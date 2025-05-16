import React, { useEffect } from "react";
import { router } from "expo-router";
import { SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/utils/store";
import { logOut, preAuthState } from "@/redux/action/auth";
import { imageAssets } from "@/utils/imageCache";
import { Colors } from "@/constants/Colors";

const RootScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    const checkAuthAndNavigate = async () => {
      try {
        const result = (await dispatch(preAuthState())) as {
          payload: { accessToken?: string };
        };

        if (result.payload?.accessToken) {
          router.replace("/(tabs)");
        } else {
          // router.replace("/(auth)/otp");
          router.replace("/(tabs)");
        }
      } catch (error) {
        console.error("Auth check failed:", error);

        router.replace("/(auth)/otp");
      }
    };

    checkAuthAndNavigate();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={imageAssets.logo} style={{ width: 160, height: 50 }} />
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      </SafeAreaView>
    );
  }

  return null;
};

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow,
    justifyContent: "center",
    alignItems: "center",
  },
});
