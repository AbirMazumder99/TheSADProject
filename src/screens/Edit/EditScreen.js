import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
// import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";

import styles from "./styles";

export default function SettingsScreen() {
  const [lookingFor, setlookingFor] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [hobbies, setHobbies] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.stage}>
      {/* INCLUDE ADDITION & DELETION OF PICTURES AND GET RID OF ADDITION OF PICTURES */}
      <View style={styles.imageItem}>
        {/* <Image style={styles.avatar} source={this.state.user.avatar ? { uri: this.state.user.avatar } : require("../assets/authHeader.jpg")} /> */}
        <Image
          style={styles.image}
          source={require("../../../assets/abir.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../../assets/abir2.jpg")}
        />
      </View>
      <View style={styles.imageItem}>
        {/* <Image style={styles.avatar} source={this.state.user.avatar ? { uri: this.state.user.avatar } : require("../assets/authHeader.jpg")} /> */}
        <Image
          style={styles.image}
          source={require("../../../assets/ali.jpg")}
        />
        <Image
          style={styles.image}
          source={require("../../../assets/ali2.jpg")}
        />
      </View>
      <TextInput
        mode="outlined"
        label="Name"
        multiline
        placeholder="Mr. Sunshine"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        mode="outlined"
        label="Age"
        multiline
        placeholder="just a number..."
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <TextInput
        mode="outlined"
        label="Height"
        multiline
        placeholder="just a number..."
        onChangeText={(text) => setHeight(text)}
        value={height}
      />
      <TextInput
        mode="outlined"
        label="Location"
        multiline
        placeholder="Your Heart"
        onChangeText={(text) => setLocation(text)}
        value={location}
      />
      <TextInput
        mode="outlined"
        label="Ethnicity"
        multiline
        placeholder="Asian...."
        onChangeText={(text) => setEthnicity(text)}
        value={ethnicity}
      />
      <TextInput
        mode="outlined"
        label="Language(s)"
        multiline
        placeholder="Polyglot hehe"
        onChangeText={(text) => setLanguage(text)}
        value={language}
      />
      <TextInput
        mode="outlined"
        label="Hobbies"
        multiline
        placeholder="Buying all that boba..."
        onChangeText={(text) => setHobbies(text)}
        value={hobbies}
      />
      <TextInput
        mode="outlined"
        label="Looking for"
        multiline
        placeholder="the matcha to my latte"
        onChangeText={(text) => setlookingFor(text)}
        value={lookingFor}
      />
      <TextInput
        mode="outlined"
        label="Pros"
        multiline
        placeholder="can cook any meal for u. The Ultimate Cheffff"
        onChangeText={(text) => setPros(text)}
        value={pros}
      />
      <TextInput
        mode="outlined"
        label="Cons"
        multiline
        placeholder="What are cons even...."
        onChangeText={(text) => setCons(text)}
        value={cons}
      />
      <TextInput
        mode="outlined"
        label="Requirements"
        multiline
        placeholder="Your Smile :)"
        onChangeText={(text) => setRequirements(text)}
        value={requirements}
      />
    </ScrollView>
  );
}
