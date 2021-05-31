import React, { useState } from 'react'
import {Text, RefreshControl, View, ScrollView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { SettingsScreen } from "react-native-settings-screen"
import styles from './styles';

export default function EditScreen() {
    const [refreshing, setRefreshing] = useState(false)
    const [bio, setBio] = useState('')

    const settingsData = [
       
        {
            type: 'SECTION',
            header: 'Discovery'.toUpperCase(),
            rows: [

                {
                    title: 'Location',
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Show Me',
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Max Distance',
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Age Range',
                    showDisclosureIndicator: true,
                },
            ],
        },
        {
            type: 'CUSTOM_VIEW',
            title: 'akgfg',
            render: () => (
            <TextInput
                style={styles.input}
                placeholder='Write Something Nice!!'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setBio(text)}
                value={bio}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            ),
        },
    ]

    return (
        <ScrollView contentContainerStyle={{marginTop: 20}}>
            <View style={styles.container}>
                <SettingsScreen 
                    data={settingsData} 
                    scrollViewProps={{
                        refreshControl: (
                            // This is for Scroll Refreshing, Timeout after 3s
                            <RefreshControl 
                                refreshing={refreshing} 
                                onRefresh={() => {
                                    setRefreshing(true)
                                    setTimeout(() => setRefreshing(false), 3000)
                                }}
                            />
                        ),
                    }}
                />    
            </View>
        </ScrollView>        
    )
}