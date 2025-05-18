import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import MyListTile from "@/components/myComps/listTile";
import EmptyComp from "@/components/myComps/empty";

const PaymentHistory = () => {
  const data = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={data ? data : []}
        renderItem={({ item, index }: { item: number; index: number }) => (
          <MyListTile
            leading={
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingHorizontal: 6,
                  color: Colors.identifier,
                }}
              >
                #{index + 1}
              </Text>
            }
            title="12 Mar, 2024"
            subtitle="Order • EFNRPOIHN"
            separator={data.length !== index + 1}
            trailing={<EvilIcons name="chevron-right" size={24} color="gray" />}
            preTrailing=<Text> TZS 1,000,000</Text>
            key={index}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyComp
            title="Payment history"
            icon={
              <Ionicons name="wallet" size={50} color={Colors.identifier} />
            }
            subtitle=" Start a new chat by clicking the button on top right"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default PaymentHistory;

const styles = StyleSheet.create({});
