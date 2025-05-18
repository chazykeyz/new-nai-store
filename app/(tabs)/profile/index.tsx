import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { Pressable } from "react-native";
import { phoneNumberFormat } from "@/utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/utils/store";
import MyGroupTile from "@/components/myComps/groupTile";
import MyFormSheet from "@/components/myComps/customFormSheet";
import Logout from "../../(bottomSheets)/logout";
import DeleteAccount from "../../(bottomSheets)/delete-account";
import { globalStyle } from "@/constants/styles";

const Profile = () => {
  const [visible, setIsVisible] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const [accountVisible, setAccountVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);

  // const { loading, user } = useSelector((state: RootState) => state.auth);

  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  const navigation = useNavigation();

  const scrollY = new Animated.Value(0);

  scrollY.addListener(({ value }) => {
    if (value > 30) {
      navigation.setOptions({
        headerTitle: "Profile",
        headerStyle: {
          backgroundColor: "whitesmoke",
        },
        headerShadowVisible: true,
      });
    } else {
      navigation.setOptions({
        headerTitle: "",
        headerStyle: { backgroundColor: "whitesmoke" },
        headerShadowVisible: false,
      });
    }
  });

  return (
    <SafeAreaView>
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
      >
        <View style={{ paddingTop: 15, paddingBottom: 10 }}>
          <Text style={globalStyle.largeTitle}>Profile</Text>
        </View>
        <View>
          <View style={{ alignItems: "center" }}>
            <Pressable
              onPress={() => {
                setIsVisible(true);
              }}
            >
              <View style={styles.graphics}>
                <Ionicons name="person-circle" size={80} color="gray" />
              </View>
            </Pressable>

            <Text style={styles.profileTitle}>
              {phoneNumberFormat("0787064145")}
            </Text>
          </View>
        </View>

        <MyGroupTile
          list={[
            {
              title: "Payment History",
              leading: (
                <Ionicons
                  name="card-outline"
                  size={24}
                  color={Colors.identifier}
                />
              ),
              onPress: () => router.push("/paymentHistory"),
            },
            {
              title: "Liked Products",
              leading: (
                <Ionicons
                  name="heart-outline"
                  size={24}
                  color={Colors.identifier}
                />
              ),
              onPress: () => router.push("/(tabs)/profile/liked"),
            },
            {
              title: "Cart",
              leading: (
                <Ionicons
                  name="bag-handle-outline"
                  size={24}
                  color={Colors.identifier}
                />
              ),
              preTrailing: (
                <Text
                  style={{
                    color: Colors.identifier,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  2
                </Text>
              ),
              onPress: () => router.push("/bag"),
            },
            {
              title: "Orders",
              leading: (
                <Ionicons
                  name="bag-check-outline"
                  size={24}
                  color={Colors.identifier}
                />
              ),
              onPress: () => router.push("/orders"),
            },
            {
              title: "Pre-orders",
              leading: (
                <Ionicons
                  name="bag-outline"
                  size={24}
                  color={Colors.identifier}
                />
              ),

              onPress: () => router.push("/orders"),
            },
          ]}
        />

        <View style={{ paddingTop: 20 }}>
          <Text style={styles.subtitle}>Account</Text>
          <MyGroupTile
            list={[
              {
                title: "Delete Account",
                leading: (
                  <Ionicons name="trash-outline" size={24} color="red" />
                ),
                onPress: () => setAccountVisible(true),
              },

              {
                title: "Logout",
                leading: (
                  <Ionicons
                    name="log-out-outline"
                    size={24}
                    color={Colors.identifier}
                  />
                ),
                onPress: () => setLogoutVisible(true),
              },
            ]}
          />
        </View>
      </ScrollView>

      <MyFormSheet
        isVisible={accountVisible}
        onClose={() => setAccountVisible(false)}
        title="Delete Account"
        notwhite={true}
        height={400}
        leftTitle="Cancel"
        onLeftPress={() => setAccountVisible(false)}
      >
        <DeleteAccount />
      </MyFormSheet>

      <MyFormSheet
        isVisible={logoutVisible}
        onClose={() => setLogoutVisible(false)}
        title="Log out Account"
        notwhite={true}
        height={300}
      >
        <Logout close={setLogoutVisible} />
      </MyFormSheet>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: "100%",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    paddingBottom: 6,
  },

  graphics: {
    objectFit: "cover",
    borderRadius: 100,
    backgroundColor: Colors.lighter,
    height: 90,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  profileTitle: {
    fontWeight: 800,
    fontSize: 24,
    paddingBottom: 20,
  },
  profilesubTitle: {
    fontSize: 18,
    color: "gray",
  },
});
