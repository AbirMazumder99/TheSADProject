import React from 'react'
import { Image, Text, StatusBar, Platform, RefreshControl, Switch, View, TouchableOpacity } from 'react-native'
import styles from './styles';
import { SettingsScreen } from 'react-native-settings-screen'

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

export default function SettingScreen() {
    const state = {
        refreshing: false,
    }
    //4 Sections
    const settingsData = [
        {
          type: 'SECTION',
          header: 'ACCOUNT SETTINGS',
          footer:
            'A verified Phone Number and Email help secure your account',
          rows: [
            {
              title: 'Phone Number',
              renderAccessory: () => (
                <Text style={styles.defaultText}>
                  1112223333
                </Text>
              ),
              showDisclosureIndicator: true,
            },
            { title: 'Connected Accounts',
              showDisclosureIndicator: true,
            },
            {
              title: 'Email',
              renderAccessory: () => (
                <Text style={styles.defaultText}>
                  johndoe@gmail.com
                </Text>
              ),
              showDisclosureIndicator: true,
            },
          ],
        },
        {
          type: 'SECTION',
          header: 'DISCOVERY',
          footer:
            'Going global will allow you to see people nearby and from around the world',
          rows: [
            {
              title: 'Location',
              subtitle: 'My Current Location',
              renderAccessory: () => (
                <Text style={styles.defaultText}>
                  Location
                </Text>
              ),
              showDisclosureIndicator: true,
            },
            {
              title: 'Maximum Distance',
              renderAccessory: () => (
                <Text style={styles.defaultText}>
                  Women
                </Text>
              ),
            },
            {
              title: 'Show Me',
              renderAccessory: () => (
                <Text style={styles.defaultText}>
                  Women
                </Text>
              ),
              showDisclosureIndicator: true,
            },
            {
              title: 'Age Range',
              renderAccessory: () => (
                <Text style={styles.defaultText}>
                  Women
                </Text>
              ),
            },
            {
              title: 'Global',
              renderAccessory: () => <Switch value onValueChange={() => {}} />,
            },            
          ],
        },
        {
          type: 'SECTION',
          header: 'PREFERRED LANGUAGES',
          rows: [
            { title: 'English',
            },
            {
              title: 'Add Language...',
              titleStyle: {
                color: 'blue',
              },
              showDisclosureIndicator: true,
            }
          ]
        },
        {
          type: 'SECTION',
          header: 'NOTIFICATIONS ',
          rows: [
            { title: 'Push Notifications',
              showDisclosureIndicator: true,
            },
          ]
        },
        {
          type: 'SECTION',
          rows: [
            {
              title: 'Share SAD',
              titleStyle: {
                color: 'red',
                textAlign: 'center',
              },
            },
          ],
        },
        {
          type: 'SECTION',
          header: 'CONTACT US',
          rows: [
            { title: 'Help & Support',
              showDisclosureIndicator: true,
            },
          ]
        },
        {
          type: 'SECTION',
          header: 'COMMUNITY',
          rows: [
            { title: 'Community Guidelines',
              showDisclosureIndicator: true,
            },
            { title: 'Safety Tips',
              showDisclosureIndicator: true,
            },
            { title: 'Safety Center',
              showDisclosureIndicator: true,
            },
            { title: 'Connect Noonlight',
              showDisclosureIndicator: true,
            },
          ],
        },
        {
          type: 'SECTION',
          header: 'LEGAL',
          rows: [
            { title: 'Privacy Policy',
              showDisclosureIndicator: true,
            },
            { title: 'Terms of Service',
              showDisclosureIndicator: true,
            },
            { title: 'Licenses',
              showDisclosureIndicator: true,
            },
            { title: 'Privacy Preferences',
              showDisclosureIndicator: true,
            },
          ],
        },
        {
          type: 'CUSTOM_VIEW',
          render: () => (
          <TouchableOpacity style={styles.button} /* onPress={}*/>
            <Text style={styles.buttonTitle}>Delete Account</Text>
          </TouchableOpacity>
          ),
        },
        {
          type: 'CUSTOM_VIEW',
          render: () => (
          <>
          <Image style={styles.logo} source={require('../../../assets/sadlogo.jpg')} />
          <Text style={styles.versionText}>v1.0.0</Text>
          </>
          ),
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





