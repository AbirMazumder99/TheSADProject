import React, { useState } from "react";
import { TextInput, View } from "react-native";

const EmailScreen = () => {
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        onChangeText={(text) => setEmailAddress(text)}
        value={emailAddress}
        placeholder="Enter Email Address"
      />
    </View>
  );
};

export default EmailScreen;
