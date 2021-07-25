import React from "react";
import styles from "./styles";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-native";
import { View, Text } from "react-native";

const Chat = ({ name, message, profilePic, team }) => {
  return (
    <Link to={`/chat/${name}`}>
      <View style={styles.chat}>
        <Avatar style={styles.chat__image} src={profilePic} />
        <View style={styles.chat__details}>
          <Text style={styles.message}>{name}</Text>
          <Text>{message}</Text>
        </View>
      </View>
      <Text style={styles.chat__timestamp}>{team}</Text>
    </Link>
  );
};

export default Chat;
