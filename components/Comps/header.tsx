import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import Search from "@/app/(tabs)/search";

type SearchOptionProps = {
  placeholder: string;
  hideWhenScrolling: boolean;
  searchBarBackgroundColor?: string;
  searchBarStyle?: ViewStyle;
  searchIconBackgroundColor?: string;
  searchIconSize?: number;
  searchIconColor?: string;
  searchInputStyle?: TextStyle;
  searchInputOnPress?: (text: string) => void;
};

type HeaderProps = {
  // all
  tintColor?: string;
  containerStyle?: ViewStyle;
  headerShadowShown?: boolean;
  scrollValue: SharedValue<number>;
  backgroundColor?: string;

  // center props
  title: string;
  titleComp?: React.ReactElement;
  titleStyle?: TextStyle;

  //   left props
  leftContent?: JSX.Element;
  leftContentStyle?: ViewStyle;
  headerBackVisible?: boolean;
  headerBackTitle?: string;
  headerBackTitleStyle?: TextStyle;
  //   right props
  rightContent?: JSX.Element;
  rightContentStyle?: ViewStyle;
  rightOnPress?: () => void;

  //   large title and search
  largeTitle?: boolean;
  largeTitleStyle?: TextStyle;
  largeTitleShadowShown?: boolean;
  headerSearchBarOptions?: SearchOptionProps;
  getSearchBarState?: (ispressed: boolean) => void;
};

const primarColor: string = "#007AFF";

const Myheader: React.FC<HeaderProps> = ({
  headerShadowShown = false,
  tintColor,
  containerStyle,
  scrollValue,
  backgroundColor = "white",
  title,
  titleComp,
  leftContent,
  rightContent,
  titleStyle,
  leftContentStyle,
  rightContentStyle,
  headerBackVisible = true,
  headerBackTitle = "Back",
  headerBackTitleStyle,
  rightOnPress = () => {},
  largeTitle,
  largeTitleStyle,
  headerSearchBarOptions,
  largeTitleShadowShown = false,
  getSearchBarState,
}) => {
  const formWidth = useSharedValue<number>(100);
  const cancelWidth = useSharedValue<number>(0);
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const titleHeaderRef = useAnimatedRef<Animated.View>();
  const inputRef = useRef<TextInput>(null);

  const heightsToSwapSearch = headerSearchBarOptions && largeTitle ? 100 : 55;

  // large title style
  const rlargeTitleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollValue.value,
            [50, 100],
            [0, -50],
            "clamp"
          ),
        },
      ],
    };
  });
  // search input animation styles
  const rsearchBox = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollValue.value, [0, 50], [50, 0], "clamp"),
    };
  });
  // searcn input
  const rsearchInput = useAnimatedStyle(() => {
    return {
      width: withTiming(`${formWidth.value}%`, { duration: 300 }),
    };
  });
  // search bar cancel
  const rcancelInput = useAnimatedStyle(() => {
    return {
      width: withTiming(`${cancelWidth.value}%`, { duration: 300 }),
    };
  });
  // movement of the large title and search bar
  const rMovement = useAnimatedStyle(() => {
    const initialHeight: number[] =
      headerSearchBarOptions && largeTitle
        ? [150, 100, 55]
        : largeTitle || headerSearchBarOptions
        ? [110, 70]
        : [60, 65];
    const interpolatedValues = headerSearchBarOptions ? [0, 10, 50] : [50, 50];

    const initialHeights =
      headerSearchBarOptions && largeTitle
        ? 150
        : largeTitle || headerSearchBarOptions
        ? 110
        : 60;

    return {
      height: onSearch
        ? withTiming(70, { duration: 300 })
        : scrollValue.value === 0
        ? withTiming(initialHeights, { duration: 500 })
        : interpolate(
            scrollValue.value,
            interpolatedValues,
            initialHeight,
            "clamp"
          ),
      borderBottomWidth: scrollValue.value > 100 ? StyleSheet.hairlineWidth : 0,
      borderBottomColor: scrollValue.value > 100 ? "rgba(0,0,0,.5)" : "",
    };
  });
  // header title animation
  const rTitle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollValue.value, [90, 100], [0, 1]),
    };
  });
  const animatedBackgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollValue.value,
      [90, 100], // Input range
      [backgroundColor, "rgb(240, 240, 240)"] // Output colors
    ),
  }));

  const rtitleHeader = useAnimatedStyle(() => {
    const value: number = onSearch ? heightsToSwapSearch : 0; // Ensure a fallback value
    return {
      transform: [
        { translateY: withDelay(100, withTiming(-value, { duration: 300 })) }, // Explicitly cast to number
      ],
      opacity: withTiming(!onSearch && scrollValue.value > 100 ? 0 : 1, {
        duration: 300,
      }),
      overflow: "hidden",
    };
  }, [onSearch]);

  const rtitleHeaderOff = useAnimatedStyle(() => {
    return {
      opacity: onSearch
        ? withTiming(0, { duration: 300 })
        : withDelay(250, withTiming(1, { duration: 10 })), // Explicitly cast to number
    };
  }, [onSearch]);

  getSearchBarState && getSearchBarState(onSearch);

  return (
    <Animated.View style={[animatedBackgroundStyle]}>
      <SafeAreaView>
        {/* MAIN HEADER */}

        <Animated.View
          style={[
            rMovement,
            styles.mycontainerStyle,
            largeTitleShadowShown && {
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: "black",
            },
            containerStyle,
          ]}
        >
          <Animated.View
            ref={titleHeaderRef}
            style={[rtitleHeaderOff, { overflow: "hidden" }]}
          >
            <Animated.View
              style={[
                styles.mytopBarContainer,
                animatedBackgroundStyle,
                headerShadowShown &&
                  !largeTitleShadowShown && {
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderBottomColor: "black",
                  },
              ]}
            >
              {/* LEFT SIDE */}
              <View style={[styles.myleftContentStyle, leftContentStyle]}>
                {/* left custome Comp */}
                {leftContent && leftContent}
                {/* headerBack */}
                {!leftContent && headerBackVisible && (
                  <View style={styles.headerBack}>
                    <Ionicons
                      name="chevron-back"
                      size={35}
                      color={tintColor ? tintColor : primarColor}
                    />
                    {headerBackTitle && (
                      <Text
                        style={[
                          styles.myheaderBackTitleStyle,
                          headerBackTitleStyle,
                          { color: tintColor ? tintColor : primarColor },
                        ]}
                      >
                        {headerBackTitle}
                      </Text>
                    )}
                  </View>
                )}
              </View>
              {/* TITLE */}
              <View style={styles.mytitle}>
                {/* if title in string */}
                {title && !titleComp && (
                  <Animated.Text
                    style={[
                      titleStyle,
                      styles.myTitlestyle,
                      largeTitle && rTitle,
                    ]}
                  >
                    {title}
                  </Animated.Text>
                )}
                {/* if custome Title as React Func */}
                {titleComp && titleComp}
              </View>
              {/* RIGHT SIDE */}
              <View style={[styles.myrightContentStyle, rightContentStyle]}>
                {rightContent && rightContent}
              </View>
            </Animated.View>
            {/* LARGE TITLE & SEARCH BAR */}
            <Animated.View
              style={[styles.mylargeTitleContainer, rlargeTitleStyle]}
            >
              {largeTitle && (
                <Text style={[styles.mylargeTitleStyle, largeTitleStyle]}>
                  {title}
                </Text>
              )}
            </Animated.View>
          </Animated.View>

          {/* SEARCH BAR */}
          {headerSearchBarOptions && (
            <Animated.View
              style={[
                styles.searchBarStyle,
                headerSearchBarOptions.searchBarStyle,
                !onSearch && rsearchBox,
                rtitleHeader,
              ]}
            >
              <Animated.View style={[rsearchInput]}>
                <Pressable
                  style={styles.mysearchInputContainer}
                  onPress={() => {
                    formWidth.value = 85;
                    cancelWidth.value = 15;
                    setOnSearch(true);
                  }}
                >
                  <Ionicons name="search-outline" size={20} color="gray" />

                  <TextInput
                    onPress={() => {
                      formWidth.value = 85;
                      cancelWidth.value = 15;
                      setOnSearch(true);
                    }}
                    placeholder={headerSearchBarOptions.placeholder}
                    ref={inputRef}
                    style={[
                      styles.mysearchInputStyle,
                      headerSearchBarOptions.searchInputStyle,
                      { width: "100%" },
                    ]}
                    onChangeText={(text) => {
                      headerSearchBarOptions.searchInputOnPress?.(text);
                    }}
                  />
                </Pressable>
              </Animated.View>
              <Animated.View style={[styles.InputCancel, rcancelInput]}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    color: tintColor ? tintColor : primarColor,
                  }}
                  numberOfLines={1}
                  onPress={() => {
                    formWidth.value = 100;
                    cancelWidth.value = 0;
                    setOnSearch(false);
                    inputRef?.current?.blur();
                  }}
                >
                  Cancel
                </Text>
              </Animated.View>
            </Animated.View>
          )}
        </Animated.View>

        {/* SEARCH COMP */}
      </SafeAreaView>
    </Animated.View>
  );
};

export default Myheader;

const styles = StyleSheet.create({
  mycontainerStyle: {
    paddingBottom: 7,
  },
  mytopBarContainer: {
    flexDirection: "row",
    width: "100%",
    paddingBottom: 10,
    paddingTop: 5,

    zIndex: 2,
  },
  myleftContentStyle: {
    paddingLeft: 20,
    justifyContent: "center",
    width: "20%",
  },
  headerBack: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  myheaderBackTitleStyle: {
    fontSize: 17,
  },
  mytitle: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  myTitlestyle: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  myrightContentStyle: {
    width: "20%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20,
  },
  mylargeTitleContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  mylargeTitleStyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
  searchBarStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  mysearchInputContainer: {
    backgroundColor: "rgba(0, 0,0,.09)",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 12,
  },
  mysearchInputStyle: {
    paddingVertical: 10,
  },
  InputCancel: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
