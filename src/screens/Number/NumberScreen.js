import React, { useState } from "react";
import { TextInput, View } from "react-native";

const NumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
      />
    </View>
  );
};

export default NumberScreen;
