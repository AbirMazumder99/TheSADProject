import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import * as screens from "../../static/constants/navConst";
import { useAuth } from "../../api/user/AuthContext";

export default function ProfileScreen({ navigation }) {
  const { logout, currentUser, userData } = useAuth();

  const onSettingsPress = () => {
    navigation.navigate(screens.SETTINGS);
  };
  const onEditPress = () => {
    navigation.navigate(screens.EDIT);
  };
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 64, alignItems: "center" }}>
        {/* <Image style={styles.avatar} source={this.state.user.avatar ? { uri: this.state.user.avatar } : require("../assets/authHeader.jpg")} /> */}
        <Image
          style={styles.avatar}
          source={require("../../../assets/abir.jpg")}
        />
        {/* <Text style={styles.name}>{this.state.user.name}</Text> */}
        <Text style={styles.name}>Abir Mazumder</Text>
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
      <TouchableOpacity style={styles.button} /* onPress={}*/>
        <Text style={styles.buttonTitle}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
}
