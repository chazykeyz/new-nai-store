import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductDetailComp from "@/components/Comps/productDetails";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { productData } from "@/utils/data/product";
import { globalStyle } from "@/constants/styles";

const ScreenProductDetailsComp = () => {
  const { id: id } = useLocalSearchParams();
  const navigation = useNavigation();

  const productDetail = productData.find((item) => item.id === id);
  const scrollY = new Animated.Value(0);

  scrollY.addListener(({ value }) => {
    if (value > 30) {
      navigation.setOptions({
        headerTitle: "Product Details",
        headerStyle: {
          backgroundColor: "whitesmoke",
        },
        headerShadowVisible: true,
      });
    } else {
      navigation.setOptions({
        headerTitle: "",
        headerStyle: { backgroundColor: "white" },
        headerShadowVisible: false,
      });
    }
  });

  if (!productDetail) {
    return (
      <View style={styles.noItemContainer}>
        <Text>No product found!</Text>
      </View>
    ); // Return a message if no product is found with the provided id.
  }
  return (
    <ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View
        style={{ paddingTop: 15, paddingHorizontal: 20, paddingBottom: 10 }}
      >
        <Text style={globalStyle.largeTitle}>Product Details</Text>
      </View>
      <ProductDetailComp item={productDetail} />
    </ScrollView>
  );
};

export default ScreenProductDetailsComp;

const styles = StyleSheet.create({
  noItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
