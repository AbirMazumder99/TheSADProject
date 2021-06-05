import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuth } from "../../../api/user/AuthContext";
import * as screens from "../../../static/constants/navConst";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import styles from "./styles";

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useAuth();

  const onFooterLinkPress = () => {
    navigation.navigate(screens.LOGIN);
  };

  const getCameraPermission = async () => {
    if (Constants.platform.io) {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

      if (status != "granted") {
        alert("We need permission to use your camera roll");
      }
    }
  };
  const handlePickAvater = async () => {
    getCameraPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        {/* <Image
          style={styles.logo}
          source={require("../../../../assets/sadlogo.jpg")}
        /> */}
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={() => handlePickAvater()}
        >
          <Ionicons
            name="ios-add"
            size={40}
            color="#FFF"
            styles={{ marginTop: 6, marginLeft: 2 }}
          ></Ionicons>
          <Image source={{ uri: avatar }} style={styles.avatar}></Image>
        </TouchableOpacity>
        <Text style={styles.welcomeText}>Welcome to S.A.D</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            signup(email, password, confirmPassword, fullName, avatar)
          }
        >
          <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
