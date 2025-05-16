import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useTheme } from "@/components/theme";
import { globalStyle } from "@/constants/styles";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const HomeLayout = () => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: "black",
        headerTitle: "",
        // headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "",
          contentStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerLeft: () => (
            <View
              style={{
                paddingHorizontal: 20,
                width,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={[globalStyle.title, { textAlign: "center" }]}>
                Nai Store
              </Text>
              <Ionicons name="bag-handle-outline" size={28} color="gray" />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="[homeProductDetails]"
        options={{
          headerBackTitle: "Home",
          headerTitleStyle: { color: "black" },
        }}
      />
    </Stack>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({});
