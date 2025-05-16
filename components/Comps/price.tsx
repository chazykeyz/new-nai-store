import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "@/constants/styles";
import { Price } from "@/constants/types";

const PriceComp = ({
  item,
  details = false,
}: {
  item: Price;
  details?: boolean;
}) => {
  return (
    <View style={styles.priceContainer}>
      {/* MAIN PRICE */}
      <View style={styles.mainPrice}>
        <Text style={{ fontWeight: "bold" }}>Tsh</Text>
        <Text style={details && [styles.price, globalStyle.textGray]}>
          {item?.discount ? item.discount : item.price}
        </Text>
      </View>

      {/* IF DICOUNTED THE PREV PRICE */}
      <Text
        style={
          details
            ? [styles.discount, globalStyle.textGray, globalStyle.lineStrike]
            : globalStyle.lineStrike
        }
      >
        {item?.discount !== 0 && item.price}
      </Text>
    </View>
  );
};

export default PriceComp;

const styles = StyleSheet.create({
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
  },
  mainPrice: {
    display: "flex",
    flexDirection: "row",
    columnGap: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
  },
  discount: {
    fontSize: 20,
  },
});
