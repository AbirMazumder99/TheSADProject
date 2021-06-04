import React, { useState, useEffect } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import * as setting from "../../static/constants/settingsConst";

import styles from "./styles";
import { set } from "react-native-reanimated";

export default function SettingsScreen() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [selectedPref, setSelectedPref] = useState();
  const [selectedDist, setSelectedDist] = useState();
  const [selectedLoc, setSelectedLoc] = useState();

  // Age Range
  const [multiSliderValue, setMultiSliderValue] = useState([
    setting.MIN_AGE,
    setting.MAX_AGE,
  ]);
  const multiSliderValuesChange = (values) => setMultiSliderValue(values);

  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <Text style={styles.header}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Text style={styles.header}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Text style={styles.header}>Show Me</Text>
      <Picker
        selectedValue={selectedPref}
        onValueChange={(itemValue, itemIndex) => setSelectedPref(itemValue)}
        itemStyle={styles.picker}
      >
        <Picker.Item label="Everyone" value={setting.EVERONE} />
        <Picker.Item label="Men" value={setting.MEN} />
        <Picker.Item label="Women" value={setting.WOMEN} />
      </Picker>
      <Text style={styles.header}>Max Distance</Text>
      <Picker
        selectedValue={selectedDist}
        onValueChange={(itemValue, itemIndex) => setSelectedDist(itemValue)}
        itemStyle={styles.picker}
      >
        <Picker.Item label="10 mi." value={setting.DIST10} />
        <Picker.Item label="25 mi." value={setting.DIST25} />
        <Picker.Item label="50 mi." value={setting.DIST50} />
        <Picker.Item label="100 mi." value={setting.DIST100} />
      </Picker>
      <Text style={styles.header}>Age Range</Text>
      <View style={styles.slider}>
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          onValuesChange={multiSliderValuesChange}
          min={setting.MIN_AGE}
          max={setting.MAX_AGE}
          step={1}
          snapped
        />
        <View style={styles.sliderText}>
          <Text>{multiSliderValue[0]}</Text>
          <Text>{multiSliderValue[1]}</Text>
        </View>
      </View>
      <Text style={styles.header}>Location</Text>
      <Picker
        selectedValue={selectedLoc}
        onValueChange={(itemValue, itemIndex) => setSelectedLoc(itemValue)}
        itemStyle={styles.picker}
      >
        <Picker.Item label="Asia" value={setting.ASIA} />
        <Picker.Item label="Australia" value={setting.AUSTRALIA} />
        <Picker.Item label="USA" value={setting.USA} />
        <Picker.Item label="Canada" value={setting.CANADA} />
      </Picker>
    </ScrollView>
  );
}
