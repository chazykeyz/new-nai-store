import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import { globalStyle } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const Header = ({
  backTitle = "black",
  title,
  rightComp,
  animationValue,
}: {
  backTitle?: string;
  title?: string;
  rightComp?: ReactNode;
  animationValue?: boolean;
}) => {
  return (
    <BlurView
      intensity={50}
      style={[
        styles.headerContainer,
        {
          borderBottomWidth: animationValue ? 1 : 0,
          borderBottomColor: "rgba(0,0,0,.1)",
          backgroundColor: animationValue ? "whitesmoke" : "white",
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={styles.headerLeft}
      >
        <Ionicons
          name="chevron-back-outline"
          size={28}
          color={Colors.identifier}
        />
        <Text style={globalStyle.headerLeftText}>{backTitle}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.headerRight}>{rightComp}</View>
    </BlurView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 15,
    height: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: 60,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: 60,
  },
  noItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
