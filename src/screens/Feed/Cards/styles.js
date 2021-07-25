import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tinderCards__cardContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 5,
  },
  /* stacks cards on top of each other */
  swipe: {
    position: "absolute",
  },
  card: {
    flex: 1,
    justifyContent: "center",
  },
  // card,
  cardHeader: {
    position: "absolute",
    bottom: 10,
    color: "black",
  },
});
