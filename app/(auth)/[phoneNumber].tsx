import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/constants/styles";
import { phoneNumberFormat } from "@/utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/utils/store";
import { verifyOtp } from "@/redux/action/auth";

const CELL_COUNT = 6;
const VerifyPhoneNumber = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>();

  const { loading } = useSelector((state: RootState) => state.auth);

  const [value, setValue] = useState<string>("");
  const ref = useBlurOnFulfill({ value: value, cellCount: CELL_COUNT });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: value,
    setValue: setValue,
  });

  //   FUNCTIONS
  const onChangeText = (value: string): void => {
    setValue(value);

    if (value.length === 6) {
      verifyCode(value);
    }
  };

  const verifyCode = (value: string): void => {
    // dispatch(verifyOtp({ phone_number: phoneNumber, otp_code: value })).then(
    //   (res) => {
    //     if (res.payload.success) {
    //       router.replace("/payment");
    //     }
    //   }
    // );

    router.replace("/payment");
  };

  if (loading) {
    return (
      <View style={globalStyle.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.identifier} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: phoneNumberFormat(phoneNumber) }} />
      <Text style={{ fontSize: 20, fontWeight: "bold", lineHeight: 50 }}>
        Verify Your Phone Number
      </Text>
      <Text style={styles.text}>
        We’ve sent you an SMS with a 6-digit code to the phone number above.
      </Text>
      <Text style={styles.text}>
        To complete the verification of your phone number, please enter the
        6-digit code to confirm.
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={onChangeText}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      {/* <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>
          Hujapokea SMS ya uthibitisho? tuma tena.
        </Text>
      </Pressable> */}

      <Text style={{ fontSize: 14, color: Colors.text, marginTop: 15 }}>
        By using this App you agree to our{" "}
        <Text style={{ color: Colors.identifier }}>Terms of Use </Text>
        and
        <Text style={{ color: Colors.identifier }}> Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default VerifyPhoneNumber;

const styles = StyleSheet.create({
  container: { padding: 20 },
  text: {
    fontSize: 16,

    color: Colors.text,
    marginBottom: 15,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 260,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 4,
  },
  cellRoot: {
    width: 40,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    padding: 4,
    borderColor: "#000",
    borderWidth: 2,
  },
  button: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: Colors.identifier,
    fontSize: 14,
  },
});
