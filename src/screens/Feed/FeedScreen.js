import React from "react";
import { View, SafeAreaView, Dimensions } from "react-native";
import styles from "./styles";
import CardStack from "./CardStack/CardStack";

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CardStack />
      </View>
    </SafeAreaView>
  );
}
