import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  picker: {
    backgroundColor: "#EFEFF4",
    maxHeight: "70%",
    borderRadius: 10,
  },
  stage: {
    backgroundColor: "#EFEFF4",
    padding: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
  slider: {
    alignSelf: "center",
  },
  sliderText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
