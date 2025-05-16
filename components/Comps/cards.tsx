import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Product } from "@/constants/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import PriceComp from "./price";

export const ProductCard = ({
  item,
  link,
}: {
  item: Product;
  link: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: link as any,
          params: { id: item.id },
        });
      }}
    >
      <View style={styles.ProductContainer}>
        <View style={styles.ImageContainer}>
          {/* ITEM IMAGE */}
          <Image
            source={{ uri: item.images[0] }}
            resizeMode="cover"
            style={styles.ImageContainer}
          />
          {/* DISCOUNT PERCENTAGE */}
          <View style={styles.percentContainer}>
            <Text style={styles.percentText}>10% off</Text>
          </View>

          {/* LIKE BUTTON*/}
          <BlurView intensity={30} style={styles.likeContainer}>
            <AntDesign name="hearto" size={18} color="white" />
          </BlurView>
        </View>
        <View style={styles.detailsContainer}>
          {/* ITEM NAME */}
          <Text style={styles.detailTitle}>{item.name}</Text>
          <PriceComp item={item} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ProductContainer: { width: "100%" },
  ImageContainer: {
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    overflow: "hidden",
    height: 180,
    width: "100%",
    position: "relative",
  },
  percentContainer: {
    backgroundColor: "black",
    borderRadius: 5,
    position: "absolute",

    color: "white",
    top: 10,
    left: 10,
    padding: 4,
  },
  percentText: { color: "white", fontSize: 10, fontWeight: "bold" },
  likeContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,.2)",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  },
  detailsContainer: {
    display: "flex",
    gap: 5,
    paddingVertical: 5,
    height: 50,
  },
  detailTitle: {
    fontWeight: "bold",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
  },
  mainPrice: {
    display: "flex",
    flexDirection: "row",
    columnGap: 2,
    alignItems: "center",
  },
});
