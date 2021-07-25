import React, { useState, useEffect } from "react";
import styles from "./styles";
import Chat from "../Chat/Chat";
import db from "../../../firebase/config";
import { Button, View } from "react-native";
const Chats = () => {
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

  return (
    <View style={styles.container}>
      {/* {people.map((person) =>
        person.team === "MA" ? (
          <Chat
            key={person.firstName}
            name={person.firstName + " " + person.lastName}
            // message="Wuff"
            team={person.team}
            profilePic={person.url}
          />
        ) : (
          ""
        )
      )} */}
      <Chat
        name="Labrador"
        message="Wuff"
        timestamp="6 mins ago"
        profilePic="https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg"
      />
      <Chat
        name="Shiba Inu"
        message="Bork"
        timestamp="1 hr ago"
        profilePic="https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg"
      />
      <Chat
        name="Corgi"
        message="Awooo"
        timestamp="4 hrs ago"
        profilePic="https://i.pinimg.com/originals/cb/d4/1f/cbd41fb83c06a915a79ed0ab9ca63789.jpg"
      />
    </View>
  );
};

export default Chats;
