import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyle } from "@/constants/styles";
import { Product } from "@/constants/types";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import PriceComp from "./price";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { sizeList } from "@/constants/custom";
import { Colors } from "@/constants/Colors";
import MyFormSheet from "../myComps/customFormSheet";
import SizeSheet from "@/app/(bottomSheets)/sizeSheet";

const ProductDetailComp = ({ item }: { item: Product }) => {
  const { width }: { width: number } = useWindowDimensions();
  const [sizeVisible, setSizeVisible] = useState(false);

  // const variables
  const [islike, setIslike] = useState<Boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<string>(sizeList[2]);
  const [inCart, setIncart] = useState<Boolean>(false);

  return (
    <View>
      {/* IMAGE SCROLL LIST */}
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{ paddingLeft: 16 }}
      >
        {item.images.map((image, index) => (
          <View style={styles.imageContainer} key={index}>
            <Image
              height={400}
              source={{ uri: image }}
              width={width - 40}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        ))}
      </ScrollView>
      <View style={globalStyle.screen}>
        {/* ITEM DETAIL */}
        <View style={styles.detailContainer}>
          {/* RIGHT NAME AND CATEGORY */}
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.categoryContainer}>
              <Octicons name="stack" size={18} color="black" />
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
          </View>

          {/* LEFT LIKE AND SHARE ICONS */}
          <View style={styles.iconsContainer}>
            <Pressable
              onPress={() => {
                setIslike(!islike);
              }}
              style={[
                styles.icons,
                {
                  backgroundColor: islike ? Colors.identifier : undefined,
                  borderColor: islike ? Colors.identifier : "rgba(0,0,0,.2)",
                },
              ]}
            >
              {islike ? (
                <AntDesign name="heart" size={16} color="white" />
              ) : (
                <AntDesign name="hearto" size={16} color="black" />
              )}
            </Pressable>
          </View>
        </View>
        {/* PRICE */}
        <View style={styles.priceCont}>
          {/* MAIN PRICE */}
          <PriceComp item={item} details={true} />
          {/* DISCOUNT PERCENTAGE */}
          {item.discount !== 0 && (
            <View style={styles.percentContainer}>
              <Text style={styles.percentText}>10% off</Text>
            </View>
          )}
        </View>
        <View style={{ marginVertical: 10 }}>
          {/* SIZE */}
          <TouchableOpacity
            style={styles.quantityContainer}
            onPress={() => {
              setSizeVisible(true);
            }}
          >
            <Text style={styles.name}>Size</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, marginHorizontal: 5 }}>{size}</Text>

              <Ionicons name="chevron-expand-outline" size={16} color="black" />
            </View>
          </TouchableOpacity>

          {/* QUANTITY */}
          <View style={styles.quantityContainer}>
            <Text style={styles.name}>Quantity</Text>
            <View style={styles.quantityValues}>
              <Pressable
                onPress={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                <Feather
                  name="minus"
                  size={18}
                  color={quantity > 1 ? "black" : "rgba(0,0,0,.3)"}
                />
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
        {/* ADD AND BUY BUTTONS */}
        <Pressable
          onPress={() => {
            setIncart(!inCart);
          }}
          style={inCart ? globalStyle.tertiaryBtn : globalStyle.primaryBtn}
        >
          <Text style={styles.buttonText}>
            {inCart ? "Remove from cart" : "Add to Cart"}
          </Text>
        </Pressable>
        <View style={[globalStyle.secondaryBtn, { marginTop: 5 }]}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </View>
        {/* DESCRIPTIONS */}
        <View style={{ marginTop: 20, padding: 10 }}>
          <Text style={styles.name}>Description</Text>
          <Text style={{ marginTop: 5 }}>{item.description}</Text>
        </View>

        {/* size bottome sheet */}
        <MyFormSheet
          isVisible={sizeVisible}
          onClose={() => setSizeVisible(false)}
          title="Choose Size"
          height={450}
        >
          <SizeSheet close={() => setSizeVisible(false)} />
        </MyFormSheet>
      </View>
    </View>
  );
};

export default ProductDetailComp;

const styles = StyleSheet.create({
  name: { fontSize: 16, fontWeight: "600" },
  scroll: {
    height: 420,
  },
  imageContainer: {
    margin: 3,
  },
  image: {
    backgroundColor: "whitesmoke",
    overflow: "hidden",
    borderRadius: 20,
  },
  detailContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  categoryContainer: {
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 15,
  },
  iconsContainer: { display: "flex", flexDirection: "row", gap: 5 },
  icons: {
    height: 43,
    width: 43,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  percentContainer: {
    backgroundColor: "black",
    borderRadius: 7,
    color: "white",
    padding: 5,
  },
  percentText: { color: "white", fontSize: 12 },
  priceCont: {
    width: "100%",
    padding: 5,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    paddingVertical: 18,
    backgroundColor: "blue",
    borderRadius: 13,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  quantityContainer: {
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    paddingVertical: 15,
    paddingBottom: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  quantityValues: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
