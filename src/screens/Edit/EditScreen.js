import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles";

export default function SettingsScreen() {
  const [bio, setBio] = useState("");
  const [selectedGen, setSelectedGen] = useState();
  const [selectedSex, setSelectedSex] = useState();

  return (
    <ScrollView contentContainerStyle={styles.stage}>
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

      <Text style={styles.header}>My Bio</Text>
      <TextInput
        style={styles.input}
        placeholder="Write something cool!"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setBio(text)}
        value={bio}
        underlineColorAndroid="transparent"
      />
      <Text style={styles.header}>Living In</Text>
      <TouchableOpacity
        style={{ padding: 20, backgroundColor: "orange", borderRadius: 10 }}
      >
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
