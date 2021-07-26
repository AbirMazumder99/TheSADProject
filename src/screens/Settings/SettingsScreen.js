import React, { useState, useEffect } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import * as setting from "../../static/constants/settingsConst";

import styles from "./styles";

export default function SettingsScreen() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [selectedPref, setSelectedPref] = useState();

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
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Text style={styles.header}>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Text style={styles.header}>Preference</Text>
      <Picker
        selectedValue={selectedPref}
        onValueChange={(itemValue, itemIndex) => setSelectedPref(itemValue)}
        itemStyle={styles.picker}
      >
        <Picker.Item label="Everyone" value={setting.EVERONE} />
        <Picker.Item label="Men" value={setting.MEN} />
        <Picker.Item label="Women" value={setting.WOMEN} />
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
          <Text>
            {multiSliderValue[1] + (multiSliderValue[1] >= 60 ? "+" : "")}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
