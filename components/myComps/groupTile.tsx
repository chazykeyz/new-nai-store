import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import MyListTile from "./listTile";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { JSX } from "react";

type ListProps = {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  leading?: JSX.Element;
  trailing?: JSX.Element;
  trailOnPress?: () => void;
  preTrailing?: React.ReactElement;
  titleStyle?: TextStyle;
  noTrailing?: boolean;
  thirdTitle?: string;
};
type GroupTileProps = {
  list: ListProps[];
  tileColor?: string;
  noPadding?: boolean;
};

const MyGroupTile: React.FC<GroupTileProps> = ({
  list,
  tileColor = "white",
  noPadding = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: tileColor, paddingLeft: noPadding ? 0 : 10 },
      ]}
    >
      {list.map((item: ListProps, index: number) => {
        return (
          <MyListTile
            leading={item.leading}
            title={item.title}
            subtitle={item.subtitle}
            thirdTitle={item.thirdTitle}
            titleStyle={item.titleStyle}
            separator={list.length !== index + 1}
            noPadding={noPadding}
            trailing={
              !item.noTrailing ? (
                item.trailing ? (
                  item.trailing
                ) : (
                  <EvilIcons name="chevron-right" size={24} color="gray" />
                )
              ) : undefined
            }
            preTrailing={item.preTrailing}
            onPress={item.onPress}
            trailOnPress={item.trailOnPress}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default MyGroupTile;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
  },
});
