import { StyleSheet, Dimensions } from "react-native";

const DIMENSION_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  containerMessage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
    width: DIMENSION_WIDTH - 100,
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginRight: 20,
    marginVertical: 15,
  },
  message: {
    color: "gray",
    fontSize: 12,
    paddingTop: 5,
  },
});
