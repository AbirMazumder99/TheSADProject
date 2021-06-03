import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import * as Location from "expo-location";
import { Picker } from "@react-native-picker/picker";
import { Slider, Thumb, Rail, RailSelected } from "rn-range-slider";

import styles from "./styles";
// import Slider from "@react-native-community/slider";

const Loc = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

export default function SettingScreen() {
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [selectedPref, setSelectedPref] = useState();
  const [selectedDist, setSelectedDist] = useState();

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <Text style={styles.header}>My Bio</Text>
      <TextInput
        style={styles.input}
        placeholder="Write something fun about yourself!"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setBio(text)}
        value={bio}
        underlineColorAndroid="transparent"
      />
      <Text style={styles.header}>Passions</Text>
      <Text style={styles.header}>Show Me</Text>
      <Picker
        selectedValue={selectedPref}
        onValueChange={(itemValue, itemIndex) => setSelectedPref(itemValue)}
        itemStyle={styles.picker}
      >
        <Picker.Item label="Everyone" value="E" />
        <Picker.Item label="Men" value="M" />
        <Picker.Item label="Women" value="W" />
      </Picker>
      <Text style={styles.header}>Max Distance</Text>
      <Picker
        selectedValue={selectedDist}
        onValueChange={(itemValue, itemIndex) => setSelectedDist(itemValue)}
        itemStyle={styles.picker}
      >
        <Picker.Item label="10 mi." value="10" />
        <Picker.Item label="25 mi." value="25" />
        <Picker.Item label="50 mi." value="50" />
        <Picker.Item label="100 mi." value="100" />
      </Picker>
      <Text style={styles.header}>Age Range</Text>
      <Slider
        // style={styles.slider}
        min={18}
        max={100}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />

      {/* <Text style={styles.text}>{state && +state.toFixed(3)}</Text> */}
      <Text style={styles.header}>Location</Text>
    </ScrollView>
  );
}
