import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactElement, useEffect } from "react";
import { JSX } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { StyleProp, TextStyle } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ListTileProps {
  leading?: JSX.Element;
  title: string;
  titleIcon?: JSX.Element;
  titleStyle?: StyleProp<TextStyle>;
  subtitle?: string;
  subtitleIcon?: JSX.Element;
  subtitleStyle?: StyleProp<TextStyle>;
  thirdTitle?: string;
  thirdTitleIcon?: JSX.Element;
  thirdTitleStyle?: StyleProp<TextStyle>;
  trailing?: JSX.Element;
  onPress?: () => void | null;
  trailOnPress?: () => void;
  onSelected?: () => void;
  tileColor?: string;
  selected?: boolean;
  selectionMode?: boolean;
  preTrailing?: ReactElement;
  separator?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  noTrailing?: boolean;
  noPadding?: boolean;
}

const MyListTile: React.FC<ListTileProps> = ({
  leading,
  title,
  titleIcon,
  titleStyle,
  subtitle,
  subtitleIcon,
  subtitleStyle,
  thirdTitle,
  thirdTitleIcon,
  thirdTitleStyle,
  trailing,
  onPress,
  trailOnPress,
  tileColor,
  selectionMode,
  onSelected,
  selected,
  preTrailing,
  separator = true,
  containerStyle,
  noTrailing = false,
  noPadding = false,
}) => {
  const widthL = useSharedValue<number>(0);

  useEffect(() => {
    widthL.value = withTiming(selectionMode ? 30 : 0, { duration: 400 });
  }, [selectionMode]);

  const rstyle = useAnimatedStyle(() => {
    return {
      width: widthL.value,
    };
  });

  const rTrailingStyle = useAnimatedStyle(() => {
    const InterWidth = interpolate(widthL.value, [0, 30], [30, 0]);
    return {
      width: InterWidth,
    };
  });

  const rSelect = useAnimatedStyle(() => {
    const interTranslate = interpolate(widthL.value, [0, 40], [-20, 20]);

    return {
      transform: [{ translateX: interTranslate }],
    };
  });

  return (
    <Pressable
      style={[styles.container, { backgroundColor: tileColor }, containerStyle]}
      onPress={selectionMode ? onSelected : trailOnPress ? () => {} : onPress}
    >
      <View style={styles.content}>
        {/* selected */}

        <Animated.View
          style={[
            rstyle,
            {
              overflow: "hidden",
            },
          ]}
        >
          <Animated.View style={[rSelect]}>
            {selected ? (
              <Ionicons
                name="checkmark-circle"
                size={24}
                color={Colors.identifier}
              />
            ) : (
              <View style={styles.selectedTile} />
            )}
          </Animated.View>
        </Animated.View>

        {/* leading */}
        {leading && (
          <View style={[styles.leading, { paddingLeft: noPadding ? 0 : 15 }]}>
            {leading}
          </View>
        )}
        <View
          style={[
            styles.leftRightContainer,
            separator && { borderBottomWidth: StyleSheet.hairlineWidth },
          ]}
        >
          <View style={styles.textContainer}>
            <View style={styles.iconText}>
              <Text
                style={[styles.title, titleStyle]}
                numberOfLines={1}
                lineBreakMode="tail"
              >
                {title}
              </Text>
              {titleIcon && titleIcon}
            </View>

            {subtitle && (
              <View style={styles.iconText}>
                {subtitleIcon && subtitleIcon}
                <Text
                  style={[styles.subtitle, subtitleStyle]}
                  numberOfLines={1}
                  lineBreakMode="tail"
                >
                  {subtitle}
                </Text>
              </View>
            )}
            {thirdTitle && (
              <View style={styles.iconText}>
                {thirdTitleIcon && thirdTitleIcon}
                <Text style={[styles.subtitle, thirdTitleStyle]}>
                  {thirdTitle}
                </Text>
              </View>
            )}
          </View>

          {/* trailing */}
          {/* pre trailing */}
          {preTrailing && <View style={styles.preTrailing}>{preTrailing}</View>}
          {trailing && (
            <View style={{ paddingRight: 10 }}>
              {trailing && trailOnPress ? (
                <Pressable style={styles.trailing} onPress={trailOnPress}>
                  {trailing}
                </Pressable>
              ) : (
                <Animated.View style={[styles.trailing, rTrailingStyle]}>
                  {trailing}
                </Animated.View>
              )}
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default MyListTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },

  selectedTile: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  leading: {
    marginRight: 10,
  },
  leftRightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "rgba(0,0,0,.4)",
    alignItems: "center",
    paddingVertical: 13,
  },
  textContainer: {
    flex: 1,
    gap: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    paddingVertical: 1,
  },
  iconText: {
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-end",
  },
  preTrailing: {
    marginHorizontal: 5,
  },
  trailing: {
    marginLeft: 5,
  },
});
