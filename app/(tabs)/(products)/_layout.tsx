import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useTheme } from "@/components/theme";
import { Colors } from "@/constants/Colors";

const ProductLayout = () => {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: "black",
        headerTitle: "",
        // headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[shopProductDetails]"
        options={{
          headerBackTitle: "Products",
          headerTitleStyle: { color: "black" },
        }}
      />
    </Stack>
  );
};

export default ProductLayout;

const styles = StyleSheet.create({});
