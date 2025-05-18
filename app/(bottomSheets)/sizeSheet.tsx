import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { sizeList } from "@/constants/custom";
import { Size } from "@/constants/types";
import { Colors } from "@/constants/Colors";

const SizeSheet = ({ close }: { close: () => void }) => {
  const [selectedSize, setSelectedSize] = useState<Size>(sizeList[0]);

  return (
    <View>
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

      <Pressable
        style={styles.button}
        onPress={() => {
          close();
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
          Done
        </Text>
      </Pressable>
    </View>
  );
};

export default SizeSheet;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.identifier,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },
});
