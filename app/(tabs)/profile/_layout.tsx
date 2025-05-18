import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useTheme } from "@/components/theme";
import { Colors } from "@/constants/Colors";
import CartItem from "@/components/Comps/cartItem";

const ProfileLayout = () => {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerTintColor: Colors.identifier,
        headerTitle: "",
        // headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerBackVisible: false,
          headerTitleStyle: { color: "black" },
          headerStyle: {
            backgroundColor: "whitesmoke",
          },
          contentStyle: { backgroundColor: "whitesmoke" },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="liked"
        options={{
          headerBackTitle: "Backs",
          headerTintColor: Colors.identifier,
          headerTitleStyle: { color: "black" },
          contentStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          title: "",
          headerRight: () => <CartItem />,
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;

const styles = StyleSheet.create({});
