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
    padding: 10,
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
  imageItem: {
    margin: "5% 5% 5% 5%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 80,
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
