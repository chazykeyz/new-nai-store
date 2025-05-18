import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { globalStyle } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const CartItem = () => {
  return (
    <Pressable
      onPress={() => {
        router.push("/bag");
      }}
      style={{
        width: 50,
        position: "relative",
      }}
    >
      <Ionicons name="bag-handle-outline" size={28} color="gray" />
      <View
        style={{
          backgroundColor: Colors.identifier,
          minWidth: 23,
          paddingHorizontal: 6,
          height: 23,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: -8,
          right: 10,
        }}
      >
        <Text style={{ color: "white" }}>1</Text>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
