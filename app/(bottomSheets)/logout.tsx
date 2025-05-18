import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { logOut } from "@/redux/action/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/utils/store";

interface LogoutProps {
  close: (value: boolean) => void;
}

const Logout = ({ close }: LogoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View>
      <Text style={styles.title}>Are you sure you want to logout?</Text>

      <Pressable
        onPress={() => {
          dispatch(logOut()).then(() => {
            close(false);
          });
        }}
      >
        <View style={styles.button}>
          <Text style={{ color: "red", fontSize: 18 }}>Logout</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          router.back();
        }}
      >
        <Text
          style={{
            color: Colors.identifier,
            fontSize: 18,
            textAlign: "center",
            padding: 20,
          }}
        >
          cancel
        </Text>
      </Pressable>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
  },
});
