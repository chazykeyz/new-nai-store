import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { globalStyle } from "@/constants/styles";
import { cartData } from "@/utils/data/cart";
import { CartItem } from "@/constants/types";
import { Colors } from "@/constants/Colors";
import Trackline from "@/components/Comps/trackline";

const PreOrderDetails = () => {
  const { height }: { height: number } = useWindowDimensions();
  return (
    <View style={[styles.screen, { height }]}>
      <View style={styles.closeContainer}>
        <Pressable
          onPress={() => {
            router.back();
          }}
          style={styles.closeIcon}
        >
          <EvilIcons name="close" size={18} color="black" />
        </Pressable>
      </View>

      <View style={styles.orderTitleContainer}>
        <Text style={[styles.orderTitle, { fontWeight: "bold" }]}>
          Order ID:
        </Text>
        <Text style={styles.orderTitle}>#565788</Text>
      </View>
      <Text style={styles.orderSubtitle}>25 Oct, 2025 • Tsh 1,000,000/=</Text>

      {/* SCROLL CONTENT */}
      <ScrollView
        style={{ paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {/* TRACKING LINE */}
        <Trackline />
        {/* BREAK LINE */}
        <Text
          style={{
            textAlign: "center",
            color: "rgba(0,0,0,.3)",
            marginVertical: 10,
          }}
        >
          --------------------------------------------------------------------
        </Text>
        {/* SUMMARY */}
        <Text style={globalStyle.subtitle}>Summary</Text>
        {/* SUMMARY LIST */}
        {cartData.map((item: CartItem, index: number) => (
          <View key={index}>
            <View style={styles.cartContainer}>
              <View style={styles.productContainer}>
                {/* IMAGE */}
                <Image
                  source={{ uri: item.images[0] }}
                  height={52}
                  width={52}
                  style={styles.image}
                />
                <View
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  {/* PRODUCT DETAILS */}
                  <View>
                    <Text style={styles.title}>{item.name}</Text>

                    <Text
                      style={[styles.title, { color: "gray", fontWeight: 400 }]}
                    >
                      Blue / S
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.removeIcon}>
                <View>
                  <Text style={[styles.title, { fontFamily: "SpaceMono" }]}>
                    {item.price}/=
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
        {/* BREAK LINE */}
        <Text
          style={{
            textAlign: "center",
            color: "rgba(0,0,0,.3)",
            paddingBottom: 5,
          }}
        >
          --------------------------------------------------------------------
        </Text>
        {/* SUBTOTAL */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Subtotal</Text>
          <Text style={[styles.title, { fontFamily: "SpaceMono" }]}>
            1,000,000/=
          </Text>
        </View>
        {/* DISCOUNT */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Discount</Text>
          <Text style={[styles.title, { fontFamily: "SpaceMono" }]}>
            1000,000/=
          </Text>
        </View>
        {/* BREAK LINE */}
        <Text
          style={{
            textAlign: "center",
            color: "rgba(0,0,0,.3)",
          }}
        >
          --------------------------------------------------------------------
        </Text>
        {/* TOTAL */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>Total</Text>
          <Text
            style={[styles.title, { fontFamily: "SpaceMono", fontSize: 18 }]}
          >
            1000,000/=
          </Text>
        </View>

        <View style={{ padding: 40 }} />
      </ScrollView>
    </View>
  );
};

export default PreOrderDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    position: "relative",
  },
  closeContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
    position: "absolute",
    right: 10,
    top: 25,
  },
  closeIcon: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  orderTitleContainer: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 5,
  },
  orderTitle: {
    fontSize: 20,
  },
  orderSubtitle: {
    color: "rgba(0,0,0,.6)",
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    paddingBottom: 10,
  },
  // cart
  cartContainer: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 2,
  },
  productContainer: {
    flexDirection: "row",
    gap: 7,
    marginBottom: 5,
  },
  image: {
    borderRadius: 8,
    backgroundColor: "whitesmoke",
  },
  removeIcon: {
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
