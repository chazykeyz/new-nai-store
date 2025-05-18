import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const globalStyle = StyleSheet.create({
  lineStrike: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  screen: { paddingHorizontal: 16 },
  largeTitle: { fontSize: 30, fontFamily: "boldFont", fontWeight: "bold" },
  title: {
    fontSize: 28,
    fontFamily: "boldFont",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 23,
    fontWeight: "700",
  },
  textGray: {
    color: "rgba(0,0,0,.7)",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: Colors.lighter,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 13,
    marginVertical: 10,
    alignItems: "center",
    gap: 10,
  },
  closeIcon: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryBtn: {
    paddingVertical: 16,
    backgroundColor: Colors.identifier,
    borderRadius: 13,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tertiaryBtn: {
    paddingVertical: 16,
    backgroundColor: "red",
    borderRadius: 13,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryBtn: {
    paddingVertical: 16,
    backgroundColor: "black",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLeftText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.identifier,
  },
});
