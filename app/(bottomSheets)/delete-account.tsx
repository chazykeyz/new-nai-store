import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import MyGroupTile from "@/components/groupTile";
import MaskInput from "react-native-mask-input";
import { Colors } from "@/constants/Colors";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";

const DeleteAccount = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberData, setPhoneNumberData] = useState<string>("");

  const { loading } = useSelector((state: RootState) => state.auth);

  const handlePhoneChange = (
    masked: string,
    unmasked: string,
    obfuscated: string
  ): void => {
    setPhoneNumberData(unmasked);
    if (unmasked?.startsWith("0")) {
      // Replace leading 0 with +255
      const newNumber = "+255";

      setPhoneNumber(newNumber);
    } else {
      setPhoneNumber(masked);
    }
  };
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 40 }}>
        Are you sure you want to delete your account?
      </Text>
      <Text>1. Upon deleting you loose your subscription</Text>
      <Text>2. Upon deleting you loose your save data</Text>
      <Text>3. Upon deleting you accont is permanently deleted</Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          // dispatch(deleteAccount(`+${phoneNumberData}`));
        }}
      >
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Delete
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  button: {
    width: "100%",
    backgroundColor: "red",
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 13,
    fontSize: 18,
  },
});
