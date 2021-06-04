import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scrollview: {
    flex: 1,
  },
  stackContainer: {
    // paddingVertical: 200,
    backgroundColor: "blue",
  },
  title: {
    padding: 10,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    padding: 10,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 17,
    fontStyle: "italic",
    textAlign: "center",
  },
  slider: {
    marginTop: 15,
    overflow: "visible", // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  slide: {
    backgroundColor: "orange",
    borderRadius: 20,
    alignSelf: "center",
  },
});
