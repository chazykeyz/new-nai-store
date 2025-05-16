import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "@/constants/styles";

const Orders = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.screen}>
        <Text style={globalStyle.title}>Orders</Text>
      </View>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({});
