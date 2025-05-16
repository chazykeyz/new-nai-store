import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "@/constants/styles";
import { AntDesign, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import TileCard from "./tile";

const Trackline = () => {
  return (
    <View style={{ paddingTop: 10 }}>
      <Text style={globalStyle.subtitle}>Trackline</Text>
      <View style={styles.trackingContainer}>
        <View style={styles.trackingMap}>
          <AntDesign name="checkcircle" size={18} color={Colors.identifier} />
          <View style={styles.line} />
          <CircleDot />
          <View style={styles.line} />
          <CircleDot />
          <View style={styles.line} />
          <CircleDot />
        </View>
        <View style={styles.trackingDetails}>
          <TileCard
            title="Order Placed"
            subtitle="Process Completed"
            icon={<Ionicons name="bag-check-outline" size={24} color="black" />}
          />
          <TileCard
            title="Order Processed"
            subtitle="Process Completed"
            icon={<FontAwesome name="gears" size={22} color="black" />}
          />
          <TileCard
            title="Shipping"
            subtitle="Process Completed"
            icon={<Fontisto name="ship" size={24} color="black" />}
          />
          <TileCard
            title="Arrived"
            subtitle="Your Order is at the Mall"
            icon={<FontAwesome name="thumbs-o-up" size={22} color="black" />}
          />
        </View>
      </View>
    </View>
  );
};

export default Trackline;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(0,0,0,.7)",
  },
  trackingContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  trackingMap: {
    width: "10%",
    height: 200,
    alignItems: "center",
  },
  trackingDetails: {
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 28,
  },
  trackDetail: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    width: "100%",
  },
  line: {
    height: 53,
    width: 1,
    backgroundColor: "rgba(0,0,0,.2)",
  },
});

const CircleDot = () => {
  return (
    <View
      style={{
        width: 16,
        height: 16,
        borderRadius: 9,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
      }}
    />
  );
};
