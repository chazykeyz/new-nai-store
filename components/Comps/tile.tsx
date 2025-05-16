import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const TileCard = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) => {
  return (
    <View style={styles.trackDetail}>
      <View
        style={{
          borderRadius: 13,
          backgroundColor: Colors.lighter,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "rgba(0,0,0,.1)",
          width: 40,
          height: 40,
        }}
      >
        {icon}
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default TileCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(0,0,0,.7)",
  },
  trackDetail: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    width: "100%",
  },
});
