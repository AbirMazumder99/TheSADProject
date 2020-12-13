import React, { useState } from 'react'
import { Image, Text, Button, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import styles from './styles';

export default function ProfileScreen({navigation}) {

    const signOut = () => {
        Alert.alert(
            "Sign Out",
            "You have been signed out",
            [
                { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        )
        // navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 64, alignItems: "center" }}>
                <View style={styles.avatarContainer}>
                    {/* <Image style={styles.avatar} source={this.state.user.avatar ? { uri: this.state.user.avatar } : require("../assets/authHeader.jpg")} /> */}
                    <Image style={styles.avatar} source={require("../../assets/abir.jpg")} />
                </View>
                {/* <Text style={styles.name}>{this.state.user.name}</Text> */}
                <Text style={styles.name}>Abir Mazumder</Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.statAmount}>21</Text>
                    <Text style={styles.statTitle}>Posts</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statAmount}>891</Text>
                    <Text style={styles.statTitle}>Followers</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statAmount}>63</Text>
                    <Text style={styles.statTitle}>Following</Text>
                </View>
            </View>
            <Button onPress={signOut} title='Log out' />
        </View>

    )
}