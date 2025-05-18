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
import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { globalStyle } from "@/constants/styles";
import { CartItem } from "@/constants/types";
import MyGroupTile from "../myComps/groupTile";

const CartCard = () => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <View>
      <ScrollView>
        <MyGroupTile
          list={cartData.map((item: CartItem, index: number) => {
            return {
              title: item.name,
              subtitle: "Size • S(Small)",
              thirdTitle: `Tzs ${item.price}`,
              preTrailing: (
                <View style={styles.quantityValues}>
                  <Pressable
                    onPress={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    {quantity > 1 ? (
                      <Feather name="minus" size={14} color="gray" />
                    ) : (
                      <EvilIcons name="close" size={14} color="gray" />
                    )}
                  </Pressable>

                  <Text style={styles.quantity}>{quantity}</Text>

                  <Pressable
                    onPress={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    <Feather name="plus" size={14} color="gray" />
                  </Pressable>
                </View>
              ),

              leading: (
                <Image
                  source={{ uri: item.images[0] }}
                  height={40}
                  width={40}
                  style={styles.image}
                />
              ),
              trailing: <Ionicons name="trash-outline" size={18} color="red" />,
            };
          })}
        />
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>Bag subtotal</Text>
          <Text style={styles.title}>Tzs 100</Text>
        </View>
        <View style={[globalStyle.secondaryBtn, { marginHorizontal: 20 }]}>
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
    fontSize: 13,
    marginHorizontal: 10,
    fontWeight: "600",
  },
  quantityValues: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "whitesmoke",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  detail: {},
  removeIcon: {
    paddingVertical: 5,
    flexDirection: "row",
    gap: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
