import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/constants/styles";
import { router } from "expo-router";
import { EvilIcons } from "@expo/vector-icons";
import { productData } from "@/utils/data/product";
import { Product } from "@/constants/types";
import { ProductCard } from "@/components/Comps/cards";

const SearchSheet = () => {
  const [search, setSearch] = useState<string>("");
  const { height }: { height: number } = useWindowDimensions();
  const trendingSearch: string[] = [
    "hoodie",
    "Perfumes",
    "Boots",
    "cargo pants",
    "sunglasses",
    "neanies",
    "rings",
    "wallet",
    "nike",
  ];
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

      <TextInput
        style={styles.searchContainer}
        value={search}
        placeholder="Search"
        placeholderTextColor="black"
        onChangeText={(newText) => {
          setSearch(newText);
        }}
      />

      {search.length > 0 ? (
        <FlatList
          data={productData ? productData : []}
          numColumns={2}
          renderItem={({ item, index }: { item: Product; index: number }) => (
            <View style={styles.listContainer} key={index}>
              <ProductCard item={item} link={"/[shopProductDetails]"} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text>No item</Text>}
          contentContainerStyle={{ paddingHorizontal: 0, paddingTop: 10 }}
        />
      ) : (
        <View>
          <Text style={globalStyle.subtitle}>Trending Searches</Text>
          <View style={styles.trendingSearchContainer}>
            {trendingSearch.map((searchTerm, index: number) => (
              <View style={styles.trendingSearch} key={index}>
                <Text key={index} style={globalStyle.textGray}>
                  {searchTerm}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default SearchSheet;

const styles = StyleSheet.create({
  listContainer: {
    width: "50%",
    padding: 3,
  },
  screen: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  closeContainer: { flexDirection: "row", gap: 10, justifyContent: "flex-end" },
  closeIcon: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: Colors.lighter,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 13,
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,.2)",
    gap: 5,
    marginBottom: 20,
  },
  searchText: {
    fontSize: 18,
  },
  trendingSearchContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  trendingSearch: {
    paddingHorizontal: 15,
    backgroundColor: "whitesmoke",
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 6,
    marginLeft: 6,
  },
});
