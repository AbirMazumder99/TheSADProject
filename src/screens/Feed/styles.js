import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scrollview: {
    flex: 1,
  },
  stackContainer: {
    backgroundColor: "blue",
  },
  title: {
    padding: 10,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    padding: 10,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 17,
    fontStyle: "italic",
    textAlign: "center",
  },
  slide: {
    backgroundColor: "orange",
    borderRadius: 20,
    alignSelf: "center",
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { paddingBottom: 10, fontSize: 22, color: "gray" },
  icon: {
    // fontFamily: ICON_FONT,
    fontSize: 20,
    color: "gray",
    paddingRight: 10,
  },
});
