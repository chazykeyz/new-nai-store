import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { globalStyle } from "@/constants/styles";
import { Colors } from "@/constants/Colors";

const Loader = ({ isModel = false }: { isModel?: boolean }) => {
  const { height } = useWindowDimensions();
  return (
    <View
      style={[
        globalStyle.loadingContainer,
        isModel && { height: height - 120 },
      ]}
    >
      <ActivityIndicator size="large" color={Colors.text} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
