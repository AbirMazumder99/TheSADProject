import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chat: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    height: 70,
    // borderBottom: "1px solid #fafafa",
    // border-bottom: 1px solid #fafafa;
  },

  // a: {
  //   // text-decoration: none;
  //   color: "inherit",
  // },
  //   flex: 1,
  // },
  // chat__details,
  message: {
    color: "gray",
  },

  chat__image: {
    marginRight: 20,
  },

  chat__timestamp: {
    color: "gray",
  },
});
