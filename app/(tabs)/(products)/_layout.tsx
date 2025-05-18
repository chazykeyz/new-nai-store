import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useTheme } from "@/components/theme";
import { Colors } from "@/constants/Colors";
import CartItem from "@/components/Comps/cartItem";

const ProductLayout = () => {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: Colors.identifier,
        headerTitle: "",
        // headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          contentStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerBackVisible: false,
          title: "",
          headerRight: () => <CartItem />,
        }}
      />
      <Stack.Screen
        name="[shopProductDetails]"
        options={{
          headerBackTitle: "Products",
          headerTitleStyle: { color: "black" },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default ProductLayout;

const styles = StyleSheet.create({});
