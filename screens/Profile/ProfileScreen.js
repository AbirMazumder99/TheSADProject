import React, { useState } from 'react'
import { Image, Text, Button, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import styles from './styles';

export default function ProfileScreen({navigation}) {

    const signOut = () => {
        // props.extraData = !props.extraData
        navigation.navigate('LogIn')
    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 64, alignItems: "center" }}>
                {/* <Image style={styles.avatar} source={this.state.user.avatar ? { uri: this.state.user.avatar } : require("../assets/authHeader.jpg")} /> */}
                <Image style={styles.avatar} source={require("../../assets/abir.jpg")} />
                {/* <Text style={styles.name}>{this.state.user.name}</Text> */}
                <Text style={styles.name}>Abir Mazumder</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={signOut}>
                <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}