import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chatScreen__text: {
    marginLeft: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 20,
  },
  chatScreen__message: {
    display: "flex",
    padding: 15,
    alignItems: "center",
  },
  chatScreen__timestamp: {
    textAlign: "center",
    padding: 20,
    color: "gray",
  },
  chatScreen__owntext: {
    marginLeft: "auto",
    backgroundColor: "#29b3cd",
    padding: 10,
    borderRadius: 20,
    color: "white",
  },
  chatScreen__form: {
    display: "flex",
    padding: 5,
    // position: "fixed",
    position: "absolute",
    bottom: 0,
    width: 100,
    // width: 100%;
    // borderTop: "1px solid lightgray",
  },
  chatScreen__input: {
    flex: 1,
    padding: 10,
    // border: "none",
  },
  chatScreen__button: {
    marginRight: 20,
    // border: "none",
    backgroundColor: "white",
    fontWeight: "bold",
    color: "#fe3d71",
    // cursor: "pointer",
  },
});
