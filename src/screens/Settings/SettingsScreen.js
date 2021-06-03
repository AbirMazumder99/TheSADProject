import React, { useState, useEffect } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
// import * as Location from "expo-location";
import { Picker } from "@react-native-picker/picker";
import MultiSlider from "@ptomasroos/react-native-multi-slider";


import styles from "./styles";

// const Loc = () => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }
//   return (
//     <View style={styles.container}>
//       <Text>{text}</Text>
//     </View>
//   );
// };

export default function SettingsScreen() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [selectedPref, setSelectedPref] = useState();
  const [selectedDist, setSelectedDist] = useState();

  // Age Range
  const [multiSliderValue, setMultiSliderValue] = useState([18, 100]);
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
      <View style={styles.slider}>
        {/* <Text style={styles.sliderText}></Text> */}
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          // sliderLength={250}
          onValuesChange={multiSliderValuesChange}
          min={18}
          max={100}
          step={1}
          snapped
        />
        <View style={styles.sliderText}>
          <Text>{multiSliderValue[0]}</Text>
          <Text>{multiSliderValue[1]}</Text>
        </View>
      </View>
      <Text style={styles.header}>Location</Text>

    </ScrollView>
  );
}
