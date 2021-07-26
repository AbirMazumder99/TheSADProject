import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as screens from "../../../static/constants/navConst";
import { useAuth } from "../../../api/user/AuthContext";
import { SocialIcon } from "react-native-elements";

import styles from "./styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const onFooterLinkPress = () => {
    navigation.navigate(screens.SIGNUP);
  };

  const onFacebookButtonPress = () => {
    console.log("FACEBOOK LOGIN");
    //  navigation.navigate(screens.SIGNUP);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.keyboardScroll}
        keyboardShouldPersistTaps="always"
      >
        <Image
          style={styles.logo}
          source={require("../../../../assets/sadlogo.jpg")}
        />
        <TouchableOpacity>
          <SocialIcon
            style={styles.button}
            title="Sign In With Facebook"
            button
            type="facebook"
            // onPress={}
          />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
