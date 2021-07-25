import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  buttons: {
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.95,
    shadowRadius: 10,
    shadowColor: "gray",
    shadowOffset: { height: 10, width: 0 },
  },
});
