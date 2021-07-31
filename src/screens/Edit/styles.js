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
  uploadItem: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  imageItem: {
    width: 150,
    height: 150,
    borderRadius: 10,

    // justifyContent: "center",
    // alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 5,
    backgroundColor: "aliceblue",
    maxHeight: 400,
    alignContent: "space-around",
  },
});
