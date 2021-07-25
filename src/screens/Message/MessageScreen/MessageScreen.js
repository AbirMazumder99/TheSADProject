import React, { useState, useEffect } from "react";
import styles from "./styles";
import Message from "../Message/Message";
import db from "../../../firebase/config";
import { View, TouchableOpacity } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
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
      name: "Labrador",
      message: "Wuff",
      image:
        "https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg",
    },
    {
      id: 2,
      name: "Shiba Inu",
      message: "Bork",
      image:
        "https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg",
    },
    {
      id: 3,
      name: "Corgi",
      message: "Awooo",
      image:
        "https://i.pinimg.com/originals/cb/d4/1f/cbd41fb83c06a915a79ed0ab9ca63789.jpg",
    },
  ];
  return (
    <View style={styles.containerMessages}>
      <ScrollView>
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
