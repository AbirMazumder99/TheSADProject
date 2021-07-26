import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
  name: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: "600",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 32,
  },
  menu: {
    alignItems: "center",
    flex: 1,
  },
  menuTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 4,
  },
  menuIcon: {
    borderRadius: 20,
    backgroundColor: "silver",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "orange",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#E1E2E6",
    borderRadius: 50,
    margin: 30,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
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
