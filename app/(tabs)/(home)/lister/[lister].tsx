import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { globalStyle } from "@/constants/styles";
import { ProductCard } from "@/components/Comps/cards";
import { productData } from "@/utils/data/product";
import { Product } from "@/constants/types";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

const ListerSeeMore = () => {
  const navigation = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 0 && !isScrolled) {
      setIsScrolled(true);
      navigation.setOptions({
        headerShadowVisible: true,
        headerTitle: "From Shop",
        headerStyle: { backgroundColor: Colors.lighter },
      });
    } else if (offsetY <= 0 && isScrolled) {
      setIsScrolled(false);
      navigation.setOptions({
        headerShadowVisible: false,
        headerTitle: "",
        headerStyle: { backgroundColor: "white" },
      });
    }
  };

  return (
    <FlatList
      data={productData ? productData : []}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text style={[globalStyle.largeTitle]}>From Shop</Text>
        </View>
      }
      numColumns={2}
      style={{ paddingHorizontal: 16 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }: { item: Product; index: number }) => (
        <View style={styles.listContainer} key={index}>
          <ProductCard item={item} link={"/[shopProductDetails]"} />
        </View>
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={<Text>No item</Text>}
    />
  );
};

export default ListerSeeMore;

const styles = StyleSheet.create({
  listContainer: {
    width: "50%",
    padding: 3,
  },

  searchText: {
    fontSize: 18,
    color: "gray",
  },
  categoriesContainer: {
    alignItems: "center",
    paddingBottom: 5,
  },
  category: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 10,
    marginLeft: 6,
    height: 35,
  },
});
