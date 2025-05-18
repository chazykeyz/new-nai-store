import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "@/constants/styles";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import TileCard from "./tile";
import MyListTile from "../myComps/listTile";

const Trackline = () => {
  return (
    <View style={{ paddingVertical: 20 }}>
      <Text style={[{ marginBottom: 10, fontWeight: "500", fontSize: 18 }]}>
        Trackline
      </Text>
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
          <View style={{ width: "100%" }}>
            <MyListTile
              title="Order Placed"
              subtitle="12 May, 2024"
              separator={false}
              leading={
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
                  <Ionicons name="bag-handle" size={24} color="black" />
                </View>
              }
              preTrailing={
                <Text style={{ color: "#34C759", fontWeight: "600" }}>
                  Completed{"   "}
                </Text>
              }
            />
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                width: "100%",
                backgroundColor: Colors.lightGray,
              }}
            />
          </View>
          <View style={{ width: "100%" }}>
            <MyListTile
              title="Order Processed"
              subtitle="12 May, 2024"
              separator={false}
              leading={
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
                  <MaterialIcons name="change-circle" size={24} color="black" />
                </View>
              }
              preTrailing={
                <Text style={{ color: Colors.text, fontWeight: "600" }}>
                  Pending...{"   "}
                </Text>
              }
            />
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                width: "100%",
                backgroundColor: Colors.lightGray,
              }}
            />
          </View>
          <View style={{ width: "100%" }}>
            <MyListTile
              title="Shipping"
              subtitle="12 May, 2024"
              separator={false}
              leading={
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
                  <MaterialCommunityIcons
                    name="truck-outline"
                    size={24}
                    color="black"
                  />
                </View>
              }
              preTrailing={
                <Text style={{ color: Colors.text, fontWeight: "600" }}>
                  Pending...{"   "}
                </Text>
              }
            />
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                width: "100%",
                backgroundColor: Colors.lightGray,
              }}
            />
          </View>

          <MyListTile
            title="Arrived"
            subtitle="12 May, 2024"
            separator={false}
            leading={
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
                <MaterialIcons name="location-pin" size={24} color="black" />
              </View>
            }
            preTrailing={
              <Text style={{ color: Colors.text, fontWeight: "600" }}>
                Pending...{"   "}
              </Text>
            }
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
    backgroundColor: "white",
    borderRadius: 15,
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
    gap: 10,
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
