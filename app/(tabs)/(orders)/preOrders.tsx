import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "@/constants/styles";
import { Order } from "@/constants/types";
import { orderData } from "@/utils/data/order";
import OrderCard from "@/components/Comps/orderCard";

const PreOrders = () => {
  const data: Order[] = orderData.filter(
    (item) => item.orderType === "pre-order"
  );

  return (
    <SafeAreaView>
      <View style={globalStyle.screen}>
        <Text style={globalStyle.title}>Pre-Orders</Text>
      </View>
      <FlatList
        numColumns={1}
        data={data ? data : []}
        renderItem={({ item, index }: { item: Order; index: number }) => (
          <View style={{ paddingVertical: 5 }}>
            <OrderCard item={item} key={index} />
          </View>
        )}
        keyExtractor={(item) => item.orderId}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text>No pre-order</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default PreOrders;

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
