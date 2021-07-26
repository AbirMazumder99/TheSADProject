import * as React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

export default function PreviewScreen() {
  const loginWithFacebook = () => {
    console.log("PREVIEW");
  };
  return (
    <View style={styles.container}>
      <FontAwesome.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={loginWithFacebook}
      >
        Login with Facebook
      </FontAwesome.Button>
    </View>
  );
}
