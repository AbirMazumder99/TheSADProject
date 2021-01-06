import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';


export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    )
}