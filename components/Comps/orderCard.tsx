import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Order } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import TileCard from "./tile";

const OrderCard = ({ item }: { item: Order }) => {
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/(screenSheets)/[preOrderDetails]",
          params: { preOrderDetails: "565788" },
        });
      }}
    >
      <TileCard
        title={`#${item.orderId}`}
        subtitle={`Tsh ${item.totalAmount} /=`}
        icon={<Ionicons name="ticket-outline" size={24} color="black" />}
      />
    </Pressable>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  cartContainer: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  productContainer: {
    flexDirection: "row",
    gap: 7,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 2,
  },
  removeIcon: {
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  image: {
    borderRadius: 8,
    backgroundColor: "whitesmoke",
  },
});
