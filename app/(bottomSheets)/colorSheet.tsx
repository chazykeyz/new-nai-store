import {Pressable, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {EvilIcons, Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import {BlurView} from "expo-blur";

const ColorSheet = () => {
  const [selecetedColor, setSelectedColor] = useState<string>("Black");
  const colors: Array<string> = ["red", "green", "yellow", "blue"];

  return (
    <BlurView intensity={90} tint='light' style={{padding: 20}}>
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
        <Text style={{fontSize: 20, fontWeight: "bold"}}>Color</Text>
        <Pressable
          onPress={() => {
            router.back();
          }}
          style={styles.closeIcon}
        >
          <EvilIcons name="close" size={18} color="black"/>
        </Pressable>
      </View>
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
              <Ionicons name="radio-button-on" size={24} color="black"/>
            ) : (
              <Ionicons name="radio-button-off" size={24} color="gray"/>
            )}
          </Pressable>
        </View>
      ))}
    </BlurView>
  );
};

export default ColorSheet;

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
