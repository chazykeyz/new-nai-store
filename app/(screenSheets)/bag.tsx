import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { globalStyle } from "@/constants/styles";
import CartCard from "@/components/Comps/cartCard";
import { useNavigation } from "expo-router";

const Bag = () => {
  const navigation = useNavigation();
  const scrollY = new Animated.Value(0);

  scrollY.addListener(({ value }) => {
    if (value > 30) {
      navigation.setOptions({
        headerTitle: "Bag",
        headerShadowVisible: true,
      });
    } else {
      navigation.setOptions({
        headerTitle: "",
        headerShadowVisible: false,
      });
    }
  });
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Text style={globalStyle.largeTitle}>Bag</Text>
        </View>
        {/* Add items here */}
        <CartCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bag;

const styles = StyleSheet.create({});
