import {
  FlatList,
  ListRenderItem,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { productData } from "@/utils/data/product";
import { Product } from "@/constants/types";
import { ProductCard } from "@/components/Comps/cards";
import { globalStyle } from "@/constants/styles";
import { router, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import EmptyComp from "@/components/Comps/empty";
import { Image } from "expo-image";

const Home = () => {
  const navigation = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 0 && !isScrolled) {
      setIsScrolled(true);
      navigation.setOptions({
        headerShadowVisible: true,
        headerStyle: { backgroundColor: Colors.lighter },
      });
    } else if (offsetY <= 0 && isScrolled) {
      setIsScrolled(false);
      navigation.setOptions({
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "white" },
      });
    }
  };

  const { width } = useWindowDimensions();
  const NUM_ITEMS_VISIBLE = 2;
  const ITEM_WIDTH = width / NUM_ITEMS_VISIBLE;

  return (
    <View>
      <View style={[globalStyle.screen]}>
        <ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            onPress={() => {
              router.push("/searchSheet");
            }}
            style={globalStyle.searchContainer}
          >
            <Feather name="search" size={20} color="black" />
            <Text style={styles.searchText}>Search</Text>
          </Pressable>
          <ScrollAds />
          <MyLister
            data={productData.slice(0, 5)}
            title="From shop"
            renderItem={({ item }: { item: Product }) => (
              <View style={[styles.listContainer, { width: ITEM_WIDTH - 18 }]}>
                <ProductCard item={item} link={"/[homeProductDetails]"} />
              </View>
            )}
          />
          <MyLister
            data={productData.slice(5, 10)}
            title="Order Items"
            renderItem={({ item }: { item: Product }) => (
              <View style={[styles.listContainer, { width: ITEM_WIDTH - 18 }]}>
                <ProductCard item={item} link={"/[homeProductDetails]"} />
              </View>
            )}
          />
          <MyLister
            data={productData.slice(10, 15)}
            title="Promos & offers"
            renderItem={({ item }: { item: Product }) => (
              <View style={[styles.listContainer, { width: ITEM_WIDTH - 18 }]}>
                <ProductCard item={item} link={"/[homeProductDetails]"} />
              </View>
            )}
          />
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  listContainer: {
    padding: 3,
  },

  searchText: {
    fontSize: 18,
    color: "gray",
  },
  dotsContainer: {
    flexDirection: "row",
    gap: 3,
    marginTop: 10,
    justifyContent: "center",
  },
  dot: {
    height: 6,

    borderRadius: 4,
  },
});

const MyLister = ({
  title,
  renderItem,
  data,
}: {
  title: string;
  renderItem: ListRenderItem<any>;
  data: any;
}) => {
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={globalStyle.subtitle}>{title}</Text>
        <Feather name="chevron-right" size={24} color={Colors.identifier} />
      </View>
      <FlatList
        data={data ? data : []}
        horizontal={true}
        style={{ marginTop: 5 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyComp
            title="Product"
            heightSize={180}
            subtitle=""
            icon={
              <FontAwesome5
                name="box-open"
                size={40}
                color={Colors.lightGray}
              />
            }
          />
        }
        contentContainerStyle={{ paddingHorizontal: 0 }}
      />
    </View>
  );
};

const ScrollAds = () => {
  const { width } = useWindowDimensions();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const onViewRef = useRef(
    ({ viewableItems }: { viewableItems: Array<{ index: number | null }> }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index);
      }
    }
  );

  const data = productData.slice(15);
  return (
    <View>
      <View
        style={{
          overflow: "hidden",
          backgroundColor: Colors.lighter,
          borderRadius: 20,
          height: 220,
          width: width - 25,
        }}
      >
        <FlatList
          horizontal
          data={data ? data : []}
          renderItem={({ item, index }: { item: Product; index: number }) => (
            <Image
              key={index}
              source={{ uri: item.images[0] }}
              style={{ width: width - 25, height: 220 }}
            />
          )}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewabilityConfig}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <EmptyComp
              title="Product"
              heightSize={180}
              subtitle=""
              icon={
                <FontAwesome5
                  name="box-open"
                  size={40}
                  color={Colors.lightGray}
                />
              }
            />
          }
          contentContainerStyle={{ paddingHorizontal: 0 }}
        />
      </View>
      {/* Dots */}
      {data.length > 1 && (
        <View style={styles.dotsContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    activeIndex === index
                      ? Colors.identifier
                      : Colors.lightGray,
                  width: activeIndex === index ? 16 : 6,
                },
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};
