import { ThemeProvider } from "@/components/theme";
import { store } from "@/utils/store";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Platform, Pressable, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { globalStyle } from "@/constants/styles";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const loaded = useAppResources();

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <ThemeProvider>
        <GestureHandlerRootView>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
                contentStyle: { backgroundColor: "red" },
              }}
            />

            {/* AUTHENTICATION SCREENS */}
            <Stack.Screen
              name="(auth)/otp"
              options={{
                title: "Enter your phone number",
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name="(auth)/[phoneNumber]"
              options={{
                headerBackTitle: "Edit number",
              }}
            />

            {/*OTHER STACKS LIKE DETAILS*/}
            <Stack.Screen
              name="(screenSheets)/[preOrderDetails]"
              options={{
                headerBackTitle: "Back",
                title: "",
                headerShadowVisible: false,
                contentStyle: { backgroundColor: "whitesmoke" },
                headerStyle: {
                  backgroundColor: "whitesmoke",
                },
              }}
            />
            <Stack.Screen
              name="(screenSheets)/bag"
              options={{
                headerBackTitle: "Back",
                title: "",
                headerShadowVisible: false,
                contentStyle: { backgroundColor: "whitesmoke" },
              }}
            />

            {/* BOTTOM SHEETS */}
            <Stack.Screen
              name="(bottomSheets)/paymentHistory"
              options={{
                title: "Payment history",
                presentation: Platform.OS === "ios" ? "formSheet" : "card",
                sheetCornerRadius: 20,
                contentStyle: { backgroundColor: "white" },
                headerLeft: () => (
                  <Pressable
                    onPress={() => {
                      router.back();
                    }}
                  >
                    <Text>Cancel</Text>
                  </Pressable>
                ),
              }}
            />

            <Stack.Screen
              name="(screenSheets)/searchSheet"
              options={{
                headerShown: false,
                presentation: "formSheet",
                sheetCornerRadius: 30,
              }}
            />
          </Stack>
          <StatusBar style="auto" />
        </GestureHandlerRootView>
      </ThemeProvider>
    </Provider>
  );
}

const useAppResources = (): boolean => {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    FiraMono: require("../assets/fonts/FiraCode-Regular.ttf"),
    boldFont: require("../assets/fonts/PPRadioGrotesk-Black.otf"),
  });

  const [imagesLoaded, setImagesLoaded] = useState(false);

  const preloadImages = useCallback(async () => {
    await Asset.loadAsync([
      require("../assets/images/logo.png"),
      require("../assets/images/logo2.png"),
      // Add more static images here
    ]);
    setImagesLoaded(true);
  }, []);

  useEffect(() => {
    const prepare = async () => {
      try {
        await preloadImages(); // Preload local images
      } catch (e) {
        console.warn("🛑 Image preload failed:", e);
      } finally {
        if (fontsLoaded && imagesLoaded) SplashScreen.hideAsync(); // Only hide splash when fonts + images are ready
      }
    };

    if (fontsLoaded) prepare();
  }, [fontsLoaded, preloadImages, imagesLoaded]);

  return fontsLoaded && imagesLoaded;
};
