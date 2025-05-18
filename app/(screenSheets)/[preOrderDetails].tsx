import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";
import { globalStyle } from "@/constants/styles";
import { cartData } from "@/utils/data/cart";
import { CartItem } from "@/constants/types";
import Trackline from "@/components/Comps/trackline";
import MyGroupTile from "@/components/myComps/groupTile";
const PreOrderDetails = () => {
  const navigation = useNavigation();
  const { height }: { height: number } = useWindowDimensions();
  const scrollY = new Animated.Value(0);

  scrollY.addListener(({ value }) => {
    if (value > 30) {
      navigation.setOptions({
        headerTitle: "Order Details",
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
    <View style={[{ height }]}>
      {/* SCROLL CONTENT */}
      <ScrollView
        style={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={{ paddingBottom: 10 }}>
          <Text style={globalStyle.largeTitle}>0rder Details</Text>
        </View>

        <MyGroupTile
          list={[
            {
              title: "Order ID",
              noTrailing: true,
              preTrailing: <Text>#565788</Text>,
            },
            {
              title: "Date created",
              noTrailing: true,
              preTrailing: <Text>25 Oct, 2025</Text>,
            },
            {
              title: "Order Amount",
              noTrailing: true,
              preTrailing: <Text>Tzs 200,000</Text>,
            },
          ]}
        />

        {/* TRACKING LINE */}
        <Trackline />

        {/* SUMMARY */}
        <Text style={[{ marginBottom: 10, fontWeight: "500", fontSize: 18 }]}>
          Summary
        </Text>

        {/* SUMMARY LIST */}
        <MyGroupTile
          list={cartData.map((item: CartItem, index: number) => {
            return {
              title: item.name,
              subtitle: "Size • S(Small)",
              preTrailing: (
                <Text style={{ fontSize: 15 }}> Tzs {item.price}</Text>
              ),

              leading: (
                <Image
                  source={{ uri: item.images[0] }}
                  height={40}
                  width={40}
                  style={styles.image}
                />
              ),
              onPress: () => {
                router.push("/payment");
              },
            };
          })}
        />

        <View style={{ height: 20 }} />
        <MyGroupTile
          list={[
            {
              title: "Subtotal",
              noTrailing: true,
              preTrailing: <Text>1,000,000/={"  "}</Text>,
            },
            {
              title: "Discount",
              noTrailing: true,
              preTrailing: <Text> -500,000/={"  "}</Text>,
            },
            {
              title: "Total",
              noTrailing: true,
              preTrailing: <Text style={[styles.title]}> 500,000/={"  "}</Text>,
            },
          ]}
        />

        <View style={{ height: 150 }} />
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
  },
  closeContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
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
