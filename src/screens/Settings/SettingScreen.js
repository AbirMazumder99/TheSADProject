import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import * as Location from "expo-location";

import styles from "./styles";

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

export default function SettingScreen({ navigation }) {
  const onEmailAddressPress = () => {
    navigation.navigate("Email");
  };
  const onPhoneNumberPress = () => {
    navigation.navigate("Number");
  };
  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <TableView appearance="light">
        <Section header="ACCOUNT SETTINGS">
          <Cell
            title="Email Address"
            accessory="DisclosureIndicator"
            onPress={onEmailAddressPress}
          />
          <Cell
            title="Phone Number"
            accessory="DisclosureIndicator"
            onPress={onPhoneNumberPress}
          />
        </Section>
        <Section header="DISCOVERY">
          <Cell title="Location" onPress={() => <Text>RIPPP</Text>} />
          <Loc></Loc>

          <Cell title="Show Me" />
          {/* <CellSlider
            title="Maximum Distance"
            // onPress={() => console.log("Enter Maximum Distance")}
          /> */}
          {/* <CellSlider
            title="Age Range"
            onPress={() => console.log("Enter Age Range")}
          /> */}
        </Section>
      </TableView>
      <TableView>
        <Section footer="All rights reserved.">
          <Cell
            title="Help / FAQ"
            titleTextColor="#007AFF"
            onPress={() => console.log("open Help/FAQ")}
          />
          <Cell
            title="Contact Us"
            titleTextColor="#007AFF"
            onPress={() => console.log("open Contact Us")}
          />
        </Section>
      </TableView>
    </ScrollView>
  );
}
