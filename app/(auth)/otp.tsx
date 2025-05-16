import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import MaskInput from "react-native-mask-input";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { requestOtp } from "@/redux/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/utils/store";

const Otp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector((state: RootState) => state.auth);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberData, setPhoneNumberData] = useState<string>("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;

  const handlePhoneChange = (masked: string, unmasked: string): void => {
    setPhoneNumberData(unmasked);
    if (unmasked?.startsWith("0")) {
      // Replace leading 0 with +255
      const newNumber = "+255";

      setPhoneNumber(newNumber);
    } else {
      setPhoneNumber(masked);
    }
  };

  const sendOtp = async () => {
    // dispatch(requestOtp(`+${phoneNumberData}`)).then((res) => {
    //   if (res.payload.success) {
    //     router.push({
    //       pathname: "/[phoneNumber]",
    //       params: { phoneNumber: `+${phoneNumberData}` },
    //     });
    //   }
    // });

    router.push({
      pathname: "/[phoneNumber]",
      params: { phoneNumber: `+${phoneNumberData}` },
    });
  };

  const tyrAgain = async () => {};

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1 }}
      behavior="padding"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>
            Naistore will need to verify your account using your phone number.
            Your network provider may charge a fee.
          </Text>

          <View>
            <MaskInput
              style={styles.inputContainer}
              value={phoneNumber}
              mask={[
                "+",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
              ]}
              placeholder="255 787-064-145"
              placeholderTextColor="black"
              keyboardType="number-pad"
              onChangeText={handlePhoneChange}
            />
          </View>

          <Pressable
            style={[
              styles.button,
              {
                backgroundColor:
                  phoneNumber !== "" && phoneNumber.length === 16
                    ? Colors.identifier
                    : "rgba(0,0,0,.2)",
              },
            ]}
            onPress={
              phoneNumber !== "" && phoneNumber.length === 16
                ? sendOtp
                : () => {}
            }
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color:
                    phoneNumber !== "" && phoneNumber.length === 16
                      ? "white"
                      : "black",
                }}
              >
                Next
              </Text>
            )}
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 13,
    fontSize: 18,
  },
  subtitle: {
    marginBottom: 10,
    color: Colors.text,
  },
  enabled: {
    backgroundColor: Colors.identifier,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
