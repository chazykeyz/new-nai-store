import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const ColorSheet = ({ close }: { close: () => void }) => {
  const [selecetedColor, setSelectedColor] = useState<string>("Black");
  const colors: Array<string> = ["red", "green", "yellow", "blue"];

  return (
    <View>
      {colors.map((color, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              borderRadius: 7,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,.3)",
              height: 30,
              width: 30,
              backgroundColor: `${color}`,
            }}
          />

          <Pressable onPress={() => setSelectedColor(color)}>
            {color === selecetedColor ? (
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

export default ColorSheet;

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
