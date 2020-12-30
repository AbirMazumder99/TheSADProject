import React, { useState } from 'react'
import { Image, Text, Button, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import styles from './styles';
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen({navigation}) {
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 64, alignItems: "center" }}>
                {/* <Image style={styles.avatar} source={this.state.user.avatar ? { uri: this.state.user.avatar } : require("../assets/authHeader.jpg")} /> */}
                <Image style={styles.avatar} source={require("../../assets/abir.jpg")} />
                {/* <Text style={styles.name}>{this.state.user.name}</Text> */}
                <Text style={styles.name}>Abir Mazumder</Text>
            </View>
            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuIcon}/* onPress={}*/>
                        <Ionicons name="settings" size={30} />
                    </TouchableOpacity>
                    <Text style={styles.menuTitle}>Edit</Text>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuIcon} /* onPress={}*/>
                        <Ionicons name="pencil" size={30} />
                    </TouchableOpacity>
                    <Text style={styles.menuTitle}>Settings</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} /* onPress={}*/>
                <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}