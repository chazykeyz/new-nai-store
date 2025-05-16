import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { cartData } from "@/utils/data/cart";
import { Feather, Ionicons } from "@expo/vector-icons";
import { globalStyle } from "@/constants/styles";

const CartCard = () => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <View>
      <ScrollView>
        {cartData.map((item, index) => (
          <View key={index}>
            <View style={styles.cartContainer}>
              <View style={styles.productContainer}>
                {/* IMAGE */}
                <Image
                  source={{ uri: item.images[0] }}
                  height={120}
                  width={120}
                  style={styles.image}
                />
                <View
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  {/* PRODUCT DETAILS */}
                  <View style={styles.detail}>
                    <Text style={styles.title}>{item.name}</Text>

                    <Text style={[styles.title, { color: "gray" }]}>
                      Blue / S
                    </Text>
                  </View>

                  {/* QUANTITY */}

                  <View style={styles.quantityValues}>
                    <Pressable
                      onPress={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      {quantity > 1 ? (
                        <Feather
                          name="minus"
                          size={18}
                          color={quantity > 1 ? "black" : "rgba(0,0,0,.3)"}
                        />
                      ) : (
                        <Ionicons
                          name="trash-outline"
                          size={18}
                          color="black"
                        />
                      )}
                    </Pressable>

                    <Text style={styles.quantity}>{quantity}</Text>

                    <Pressable
                      onPress={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      <Feather name="plus" size={18} color="black" />
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style={styles.removeIcon}>
                <View>
                  <Text style={styles.title}>{item.price}</Text>
                  <Text
                    style={[
                      styles.title,
                      globalStyle.lineStrike,
                      { color: "gray" },
                    ]}
                  >
                    {item?.discount}
                  </Text>
                </View>

                <Pressable>
                  <Ionicons name="trash-outline" size={22} color="gray" />
                </Pressable>
              </View>
            </View>
          </View>
        ))}
        <View
          style={{
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>Subtotal</Text>
          <Text style={styles.title}>100</Text>
        </View>
        <View style={[globalStyle.secondaryBtn, { marginTop: 5 }]}>
          <Text style={styles.buttonText}>Continue to checkout</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: 16,
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

  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  quantityValues: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: "whitesmoke",
    width: 90,
    borderColor: "rgba(0,0,0,.04)",
    borderWidth: 1,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  detail: {},
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
