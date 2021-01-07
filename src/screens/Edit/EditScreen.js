import React, { useState }from 'react'
import { Image, Text, StatusBar, Platform, RefreshControl, View, TextInput } from 'react-native'
import styles from './styles';
import { SettingsScreen } from 'react-native-settings-screen'

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

export default function SettingScreen() {
  const [bio, setBio] = useState('')
  const [passion, setPassion] = useState('')
  const [company, setCompany] = useState('')
  const [job, setJob] = useState('')


  const state = {
      refreshing: false,
  }
  //4 Sections
  const settingsData = [
    {
      type: 'CUSTOM_VIEW',
      header: 'ABOUT ME',
      render: () => {
          <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setBio(text)}
          value={bio}
          placeholder="about me"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />  
      }
    },
    {
      type: 'CUSTOM_VIEW',
      header: 'PASSIONS',
      render: () => (
        <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setPassion(text)}
        value={passion}
        placeholder="passions"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
      ),
    },
    {
      type: 'CUSTOM_VIEW',
      header: 'JOB TITLE',
      render: () => (
        <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setJob(text)}
        value={job}
        placeholder="job title"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
      ),
    }, 
    {
      type: 'CUSTOM_VIEW',
      header: 'COMPANY',
      render: () => (
        <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setCompany(text)}
        value={company}
        placeholder="company"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
      ),
    }, 
    {
      type: 'SECTION',
      header: 'LIVING IN',
      rows: [
        { title: 'ABC, DE',
          showDisclosureIndicator: true,
        },
      ]
    },
    {
      type: 'SECTION',
      header: 'GENDER',
      rows: [
        { title: 'Man',
          showDisclosureIndicator: true,
        },
      ],
    },
    {
      type: 'SECTION',
      header: 'SEXUAL ORIENTATION',
      rows: [
        { title: 'Straight',
          showDisclosureIndicator: true,
        },
      ],
    },
      
  ]
        
  return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#8c231a" />

        <SettingsScreen data={settingsData} globalTextStyle={{ fontFamily }} 
        scrollViewProps={{ refreshControl: (
            <RefreshControl refreshing={state.refreshing} 
            onRefresh={() => {setState({ refreshing: true }) 
            setTimeout(() => setState({ refreshing: false }), 3000)
            }}
            />
        ),}} />
      </View>
  )
}





