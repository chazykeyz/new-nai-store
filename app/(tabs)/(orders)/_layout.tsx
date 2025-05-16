import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Orders from ".";
import PreOrders from "./preOrders";

const tabs = ["Orders", "Pre-orders"];

export default function IOS18Tabs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const handlePress = (index: number): void => {
    setActiveIndex(index);
    Animated.spring(translateX, {
      toValue: index * 93, // Moves the indicator smoothly
      useNativeDriver: true,
      speed: 20,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Tab Bar */}
        <View style={styles.tabContainer}>
          <View style={styles.tabBar}>
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={index}
                style={styles.tab}
                onPress={() => handlePress(index)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeIndex === index && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}

            {/* Animated Indicator */}
            <Animated.View
              style={[
                styles.indicator,
                { transform: [{ translateX }] }, // Moves dynamically
              ]}
            />
          </View>
        </View>

        {/* Tab Content */}
        {activeIndex === 0 ? <Orders /> : <PreOrders />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white" },
  container: { flex: 1, padding: 10 },
  tabContainer: { flexDirection: "row", justifyContent: "center" },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,.08)", // Light gray Apple-style background
    borderRadius: 12,
    width: 190,
    padding: 3,
    height: 35,
    position: "relative",
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    paddingVertical: 6,
    alignItems: "center",
    zIndex: 2, // Ensures text stays above the indicator
  },
  tabText: {
    fontSize: 16,
    color: "black",
  },
  activeTabText: {
    color: "black",
    fontWeight: "700",
  },
  indicator: {
    position: "absolute",
    width: 90,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.15)",
    zIndex: 1,
    top: 3,
    left: 3,
  },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
});
