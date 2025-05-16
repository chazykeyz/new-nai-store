import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "@/constants/styles";
import CartCard from "@/components/Comps/cartCard";

const Bag = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        style={globalStyle.screen}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Text style={globalStyle.title}>Bag</Text>
        {/* Add items here */}
        <CartCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bag;

const styles = StyleSheet.create({});
