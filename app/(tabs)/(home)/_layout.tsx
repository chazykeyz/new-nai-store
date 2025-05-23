import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useTheme } from "@/components/theme";
import CartItem from "@/components/Comps/cartItem";
import { Colors } from "@/constants/Colors";

const HomeLayout = () => {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: "black",
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
        name="[homeProductDetails]"
        options={{
          headerBackTitle: "Back",
          headerTitleStyle: { color: "black" },
          headerTintColor: Colors.identifier,
          headerShadowVisible: false,
          title: "",
        }}
      />

      <Stack.Screen
        name="lister/[lister]"
        options={{
          headerBackTitle: "Home",
          headerTintColor: Colors.identifier,
          headerTitleStyle: { color: "black" },
          headerShadowVisible: false,
          title: "",
          headerRight: () => <CartItem />,
        }}
      />
    </Stack>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({});
