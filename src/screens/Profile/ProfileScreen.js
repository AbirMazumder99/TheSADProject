import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import * as screens from "../../static/constants/navConst";
import { useAuth } from "../../api/user/AuthContext";
import { firebase } from "../../firebase/config";

export default function ProfileScreen({ navigation }) {
  const { logout, currentUser, userData } = useAuth();
  const [userName, setUsername] = useState("");
  const { remove } = useAuth();
  const [avatar, setAvatar] = useState(null);

  firebase
    .firestore()
    .collection("users")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (doc.id === currentUser.uid) {
          setUsername(data.fullName);
          setAvatar(data.avatar);
        }
      });
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });
  const onSettingsPress = () => {
    navigation.navigate(screens.SETTINGS);
  };
  const onEditPress = () => {
    navigation.navigate(screens.EDIT);
  };
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 64, alignItems: "center" }}>
        <Image style={styles.avatarPlaceholder} source={{ uri: avatar }} />
        <Text style={styles.name}>{userName}</Text>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuIcon} onPress={onSettingsPress}>
            <Ionicons name="settings" size={30} />
          </TouchableOpacity>
          <Text style={styles.menuTitle}>Settings</Text>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuIcon} onPress={onEditPress}>
            <Ionicons name="pencil" size={30} />
          </TouchableOpacity>
          <Text style={styles.menuTitle}>Edit</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => logout()}>
        <Text style={styles.buttonTitle}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => remove()}>
        <Text style={styles.buttonTitle}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
}
