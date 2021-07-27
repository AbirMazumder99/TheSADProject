import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  stage: {
    backgroundColor: "#EFEFF4",
    padding: 15,
  },
  imageItem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    padding: 25,
  },
  imageContainer: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 5,
    backgroundColor: "aliceblue",
    maxHeight: 500,
    alignContent: "space-around",
  },
});
