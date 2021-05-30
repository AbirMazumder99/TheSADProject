import React, { useState } from 'react'
import {Text, RefreshControl, View, ScrollView} from 'react-native'
import { SettingsScreen } from "react-native-settings-screen"
import styles from './styles';

export default function SettingScreen() {
    const [refreshing, setRefreshing] = useState(false)

    const settingsData = [
        {
            type: 'SECTION',
            header: 'Account Settings'.toUpperCase(),
            footer:
                'A verified Phone Number and Email help secure your account',
            rows: [
                {
                    title: 'Phone Number',
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Email Address',
                    showDisclosureIndicator: true,
                },
            ],
        },
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
            render: () => (<Text style={styles.versionTitle}>v1.0.0</Text>),
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