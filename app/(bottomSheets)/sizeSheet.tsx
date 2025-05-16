import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { sizeList } from "@/constants/custom";
import { Size } from "@/constants/types";

const SizeSheet = () => {
  const [selectedSize, setSelectedSize] = useState<Size>(sizeList[0]);

  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            width: 50,
            height: 4,
            backgroundColor: "rgba(0,0,0,.2)",
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Color</Text>
        <Pressable
          onPress={() => {
            router.back();
          }}
          style={styles.closeIcon}
        >
          <EvilIcons name="close" size={18} color="black" />
        </Pressable>
      </View>
      {sizeList.map((size, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{size}</Text>

          <Pressable onPress={() => setSelectedSize(size)}>
            {selectedSize === size ? (
              <Ionicons name="radio-button-on" size={24} color="black" />
            ) : (
              <Ionicons name="radio-button-off" size={24} color="gray" />
            )}
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default SizeSheet;

const styles = StyleSheet.create({
  closeIcon: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,.1)",
    justifyContent: "center",
    alignItems: "center",
  },
});
