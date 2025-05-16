import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";

type emptyProps = {
  title: string;
  icon: React.ReactElement;
  subtitle: string;
  heightSize?: number;
};
const EmptyComp: React.FC<emptyProps> = ({
  title,
  icon,
  subtitle,
  heightSize,
}) => {
  const { height, width } = useWindowDimensions();
  return (
    <View
      style={[
        {
          height: heightSize ? heightSize : height - 130,
          width,
        },
        styles.container,
      ]}
    >
      <View style={styles.itemContainer}>
        {icon}
        <Text style={styles.title}>No {title} found!</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default EmptyComp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    width: 280,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    paddingBottom: 5,
  },
  subtitle: { fontSize: 16, textAlign: "center", color: "gray" },
});
