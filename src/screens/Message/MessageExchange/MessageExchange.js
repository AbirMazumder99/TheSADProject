import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
// import { Avatar } from "react-native-elements";
// import { Avatar, ListItem } from "react-native-elements";

import styles from "./styles";
import db from "../../../firebase/config";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function MessageExchange({ name, timestamp }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Elon Musk",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      message: "Welcome to Moody's",
    },
    {
      name: "Elon Musk",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
      message: "Bork bork bork",
    },
    {
      message: "yo",
    },
  ]);
  //Read existing data into messages
  // useEffect(() => {
  //   const unsubscribe = db
  //     .collection("messages")
  //     .doc("room1")
  //     .onSnapshot((doc) => {
  //       setMessages(doc.data()["texts"]);
  //     });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const handleSend = (e) => {
    e.preventDefault();
    // Update messages locally
    // setMessages([...messages, { text: input }]);
    setMessages([...messages, { message: input }]);

    // Update database by rewriting with messages
    // db.collection("messages")
    //   .doc("room1")
    //   // .onSnapshot((doc) => {
    //   //   doc.data()["texts"].a;
    //   // });
    //   .update({
    //     texts: messages,
    //   })
    //   .then((docRef) => {
    //     console.log("Document Updated");
    //   })
    //   .catch((error) => {
    //     console.log("Error adding document: ", error);
    //   });
    setInput("");
  };
  return (
    <View style={styles.ChatScreen}>
      <Text style={styles.chatScreen__timestamp}>
        YOU MATCHED WITH {name} ON {timestamp}
      </Text>
      {messages.map((message) =>
        message.name ? (
          <View style={styles.chatScreen__message}>
            {/* <Avatar
              style={styles.chatScreen__image}
              alt={message.name}
              rounded
              source={message.image}
            /> */}
            <Avatar
              style={styles.chatScreen__image}
              alt={message.name}
              src={message.image}
            />
            <View style={styles.chatScreen__text}>{message.text}</View>
          </View>
        ) : (
          <View style={styles.chatScreen__message}>
            <Text style={styles.chatScreen__owntext}>{message.text}</Text>
          </View>
        )
      )}
      <View style={styles.chatScreen__form}>
        <TextInput
          style={styles.chatScreen__input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={handleSend}
          type="submit"
          style={styles.chatScreen__button}
        >
          SEND
        </Button>
      </View>
    </View>
  );
}

export default MessageExchange;
