import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyle } from "@/constants/styles";
import { Order } from "@/constants/types";
import { orderData } from "@/utils/data/order";
import OrderCard from "@/components/Comps/orderCard";
import MyGroupTile from "../myComps/groupTile";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import Myheader from "../Comps/header";
import Animated, {
  CurvedTransition,
  FadeInUp,
  FadeOutUp,
  useSharedValue,
} from "react-native-reanimated";
import MyListTile from "../myComps/listTile";
import EmptyComp from "../myComps/empty";

const Orders = () => {
  const data: Order[] = orderData.filter(
    (item) => item.orderType === "pre-order"
  );
  const [search, setSearch] = useState<string>("");
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView style={{ margin: 10, flex: 1 }}>
      <View>
        <Text style={globalStyle.title}>Orders</Text>
      </View>
      <TextInput
        style={globalStyle.searchContainer}
        value={search}
        placeholder="Search"
        placeholderTextColor="black"
        onChangeText={(newText) => {
          setSearch(newText);
        }}
      />
      <Animated.FlatList
        scrollEventThrottle={16}
        itemLayoutAnimation={CurvedTransition.delay(100)}
        data={data ? data : []}
        skipEnteringExitingAnimations={true}
        numColumns={1}
        keyExtractor={(item) => item.orderId}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={FadeInUp.delay(index * 20)}
            exiting={FadeOutUp}
          >
            <MyListTile
              noPadding={true}
              title={`#${item.orderId}`}
              subtitle="25 Oct, 2025"
              preTrailing={
                <Text style={{ fontSize: 15 }}> Tzs {item.totalAmount}</Text>
              }
              leading={
                <View
                  style={{
                    borderRadius: 16,
                    backgroundColor: "whitesmoke",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: Colors.text,
                    width: 40,
                    height: 40,
                  }}
                >
                  <Ionicons name="ticket-outline" size={24} color="black" />
                </View>
              }
              trailing={
                <EvilIcons name="chevron-right" size={24} color="gray" />
              }
              onPress={() => {
                router.push({
                  pathname: "/(screenSheets)/[preOrderDetails]",
                  params: { preOrderDetails: "565788" },
                });
              }}
            />
          </Animated.View>
        )}
        ListEmptyComponent={() => (
          <EmptyComp
            title="Pre-Orders"
            subtitle="You have no pre-orders yet."
            heightSize={height - 300}
            icon={
              <Ionicons
                name="bag-check"
                size={50}
                color={Colors.identifier}
                style={{ marginBottom: 10 }}
              />
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
