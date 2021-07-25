import React from "react";
import styles from "./styles";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function SwipeButtons() {
  return (
    <View style={styles.buttonContainer}>
      <Button
        icon="replay"
        color="#f5b748"
        mode="contained"
        compact
        style={styles.buttons}
        onPress={() => console.log("Pressed")}
      />
      <Button
        icon="close"
        color="#ec5e6f"
        mode="contained"
        compact
        style={styles.buttons}
        onPress={() => console.log("Pressed")}
      />
      <Button
        icon="star"
        color="#62b4f9"
        mode="contained"
        compact
        style={styles.buttons}
        onPress={() => console.log("Pressed")}
      />
      <Button
        icon="heart"
        color="#76e2b3"
        mode="contained"
        compact
        style={styles.buttons}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}
