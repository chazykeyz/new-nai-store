import React from "react";
import { View, StyleSheet, Dimensions, Pressable, Text } from "react-native";
import Modal from "react-native-modal";
import { BlurView } from "expo-blur";
import { Colors } from "@/constants/Colors";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  height: number;
  title: string;
  notwhite?: boolean;
  noChildPadding?: boolean;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftTitle?: string;
  rightTitle?: string;
};

const MyFormSheet = ({
  isVisible,
  onClose,
  children,
  height,
  title,
  notwhite,
  noChildPadding = false,
  onLeftPress,
  onRightPress,
  rightTitle,
  leftTitle,
}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}
      useNativeDriver
      backdropOpacity={1}
      hideModalContentWhileAnimating
      customBackdrop={
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose}>
          <BlurView
            intensity={50}
            tint="dark"
            style={StyleSheet.absoluteFill}
          />
        </Pressable>
      }
    >
      <View
        style={[
          styles.container,
          { height, backgroundColor: notwhite ? "whitesmoke" : "white" },
        ]}
      >
        <View
          style={{ width: "100%", alignItems: "center", marginVertical: 10 }}
        >
          <View
            style={{ width: 40, height: 4, backgroundColor: Colors.lightGray }}
          />
          <View
            style={{
              borderColor: Colors.lightGray,
              borderBottomWidth: 1,
              width: "100%",
              paddingBottom: 10,
              paddingTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View style={{ width: "20%" }}>
              {onLeftPress && (
                <Pressable
                  onPress={() => {
                    onLeftPress();
                  }}
                >
                  <Text style={{ fontSize: 15, color: Colors.identifier }}>
                    {leftTitle}
                  </Text>
                </Pressable>
              )}
            </View>
            <View style={{ width: "60%" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {title}
              </Text>
            </View>
            <View style={{ width: "20%" }}>
              {onRightPress && (
                <Pressable
                  onPress={() => {
                    onRightPress();
                  }}
                >
                  <Text style={{ fontSize: 17 }}>{rightTitle}</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
        <View style={{ padding: noChildPadding ? 0 : 20 }}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default MyFormSheet;
