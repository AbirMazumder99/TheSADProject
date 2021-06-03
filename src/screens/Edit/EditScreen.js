import React, { useState, useEffect } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

import styles from "./styles";

export default function SettingsScreen() {
  const [bio, setBio] = useState("");
  const [selectedGen, setSelectedGen] = useState();
  const [selectedSex, setSelectedSex] = useState();

  return (
    <ScrollView contentContainerStyle={styles.stage}>
      {/* Image Carousel Here */}
      <Text style={styles.header}>My Bio</Text>
      <TextInput
        style={styles.input}
        placeholder="Write something cool.."
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setBio(text)}
        value={bio}
        underlineColorAndroid="transparent"
      />
      <Text style={styles.header}>Living In</Text>
      <TouchableOpacity>
        <Text>Get Current Location</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Gender</Text>
      <Picker
        selectedValue={selectedGen}
        onValueChange={(itemValue, itemIndex) => setSelectedGen(itemValue)}
        itemStyle={styles.picker}
      >
        <Picker.Item label="Men" value="M" />
        <Picker.Item label="Women" value="W" />
        <Picker.Item label="Other" value="O" />
      </Picker>
      <Text style={styles.header}>Sexual Orientation</Text>
      <Picker
        selectedValue={selectedSex}
        onValueChange={(itemValue, itemIndex) => setSelectedSex(itemValue)}
        itemStyle={styles.picker}
      >
        <Picker.Item label="Straight" value="S" />
        <Picker.Item label="Bisexual" value="B" />
        <Picker.Item label="Other" value="O" />
      </Picker>
    </ScrollView>
  );
}
