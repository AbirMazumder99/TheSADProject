import React, { useState, useEffect } from "react";
import styles from "./styles";
import Message from "../Message/Message";
import db from "../../../firebase/config";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
function MessageScreen() {
  const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = db
  //     .collection("people")
  //     .onSnapshot((snapshot) =>
  //       setPeople(snapshot.docs.map((doc) => doc.data()))
  //     );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const Demo = [
    {
      id: 1,
      name: "Abir Mazumder",
      message: "Hey!",
      image: require("../../../../assets/abir.jpg"),
    },
    {
      id: 2,
      name: "Ali Khan",
      message: "You look great!",
      image: require("../../../../assets/ali.jpg"),
    },
  ];
  return (
    <View style={styles.containerMessages}>
      <ScrollView>
        <View style={styles.top}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity>
            <Text style={styles.icon}>{/* <Icon name="optionsV" /> */}</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={Demo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Message
                image={item.image}
                name={item.name}
                lastMessage={item.message}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
}

export default MessageScreen;
