import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { MySegmentedControl } from "@/components/myComps/segmentedControll";
import PreOrders from "@/components/screens/preOrders";
import Orders from "@/components/screens/ordersItems";

const OrdersLayout = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Orders");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <MySegmentedControl
          options={["Orders", "Pre-orders"]}
          selectedOption={selectedOption}
          onOptionPress={setSelectedOption}
        />
      </View>
      {/* order or pre-order */}
      {selectedOption === "Orders" ? <Orders /> : <PreOrders />}
    </SafeAreaView>
  );
};

export default OrdersLayout;

const styles = StyleSheet.create({});
