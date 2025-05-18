import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { globalStyle } from "@/constants/styles";

export default function TabLayout() {
  const cart: Array<number> = [1];
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: "#EAEAEA" }} />
        ),
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },

          default: { backgroundColor: "gray" },
        }),
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Entypo name="home" size={28} color={color} />
            ) : (
              <SimpleLineIcons name="home" size={26} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="(products)"
        options={{
          title: "Products",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "bag-check" : "bag-check-outline"}
              size={27}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
