import React from "react";
import styles from "./styles";
import { Link } from "react-router-native";
import { View, Text, Image } from "react-native";

function Message({ name, lastMessage, image }) {
  return (
    <View style={styles.containerMessage}>
      <Image
        style={styles.avatar}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
    </View>
  );
}

export default Message;
