import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyle } from "@/constants/styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ProductCard } from "@/components/Comps/cards";
import { productData } from "@/utils/data/product";
import { Product } from "@/constants/types";
import CartItem from "@/components/Comps/cartItem";

const Products = () => {
  const categories: string[] = [
    "All",
    "Clothing",
    "Electronics",
    "Accessories",
    "Home & Garden",
    "Beauty & Health",
    "Sports & Outdoors",
    "Kids & Baby",
    "Toys & Games",
    "Books & Magazines",
    "Stationery & Office Supplies",
    "Fashion",
    "Gifts & Cards",
    "Pet Supplies",
    "Travel & Vacations",
    "Services",
    "Real Estate",
    "Business & Finance",
    "Health & Fitness",
    "Food & Drinks",
    "Home & Decor",
    "Pets & Animals",
    "Sports & Outdoors",
    "Kids & Baby",
    "Toys & Games",
    "Books & Magazines",
    "Stationery & Office Supplies",
    "Fashion",
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (offsetY <= 0 && isScrolled) {
      setIsScrolled(false);
    }
  };
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
          }}
        >
          <Text style={[globalStyle.largeTitle]}>Products</Text>
        </View>

        {/* the search field */}
        <Pressable
          onPress={() => {
            router.push("/searchSheet");
          }}
          style={[globalStyle.searchContainer, { marginHorizontal: 16 }]}
        >
          <Feather name="search" size={20} color="black" />
          <Text style={styles.searchText}>Search</Text>
        </Pressable>

        {/* CATEGORIES */}
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.categoriesContainer}
          showsHorizontalScrollIndicator={false}
          style={{
            borderBottomWidth: isScrolled ? StyleSheet.hairlineWidth : 0,
            borderBottomColor: "gray",
            paddingHorizontal: 16,
          }}
        >
          {categories.map((category: string, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedCategory(category);
              }}
              style={[
                styles.category,
                {
                  backgroundColor:
                    selectedCategory === category ? "black" : "whitesmoke",
                },
              ]}
            >
              <Text
                style={[
                  globalStyle.textGray,
                  { color: selectedCategory === category ? "white" : "black" },
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <FlatList
          data={productData ? productData : []}
          onScroll={handleScroll}
          scrollEventThrottle={16}
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
          contentContainerStyle={{ paddingHorizontal: 0, paddingTop: 5 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;

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
