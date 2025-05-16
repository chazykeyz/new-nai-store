import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const globalStyle = StyleSheet.create({
  lineStrike: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  screen: { paddingHorizontal: 10 },
  largeTitle: { fontSize: 35, fontFamily: "boldFont", fontWeight: "bold" },
  title: {
    fontSize: 28,
    fontFamily: "boldFont",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "boldFont",
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLeftText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.identifier,
  },
});
