import React from 'react'
import { Image, Text, StatusBar, Platform, RefreshControl, Switch, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import styles from './styles';
import { SettingsScreen } from 'react-native-settings-screen'

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'
const statusBarHeight = Platform.OS === 'ios' ? 35 : 0

const renderHero = () => {
  return (
    <View style={styles.heroContainer}>
      <Image source={require('../../../assets/abir.jpg')} style={styles.heroImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.heroTitle}>Jan Söndermann</Text>
        <Text style={styles.heroSubtitle}>jan+git@primlo.com</Text>
      </View>
    </View>
  )
}
  

export default function SettingScreen() {
    const state = {
        refreshing: false,
    }
    //5 items
    const settingsData = [
        { type: 'CUSTOM_VIEW', key: 'hero', render: renderHero },
        {
          type: 'SECTION',
          header: 'My Section'.toUpperCase(),
          footer:
            'Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
          rows: [
            {
              title: 'A row',
              showDisclosureIndicator: true,
            },
            { title: 'A non-tappable row' },
            {
              title: 'This row has a',
              subtitle: 'Subtitle',
              showDisclosureIndicator: true,
            },
            {
              title: 'Long title. So long long long long long long long',
              subtitle:
                'And so is the subtitle. Even longer longer longer longer longer',
            },
            {
              title: 'Switch',
              renderAccessory: () => <Switch value onValueChange={() => {}} />,
            },
            {
              title: 'Text',
              renderAccessory: () => (
                <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
                  Maybe
                </Text>
              ),
            },
            {
              title: 'Custom view',
              renderAccessory: () => (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: 'blue',
                  }}
                />
              ),
              showDisclosureIndicator: true,
            },
          ],
        },
        {
          type: 'SECTION',
          header: 'My Other Section'.toUpperCase(),
          rows: [
            {
              title: 'Dolor Nullam',
              showDisclosureIndicator: true,
            },
            {
              title: 'Nulla vitae elit libero',
              renderAccessory: () => (
                <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
                  Dapibus
                </Text>
              ),
            },
            {
              title: 'Ipsum Lorem Venenatis',
              subtitle: 'Vestibulum Inceptos Fusce Justo',
              renderAccessory: () => (
                <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
                  Yes
                </Text>
              ),
              showDisclosureIndicator: true,
            },
            {
              title: 'Cras Euismod',
              renderAccessory: () => (
                <Icon
                  style={{ marginTop: 3, marginRight: 6 }}
                  name="colours"
                  size={32}
                  color="black"
                />
              ),
              showDisclosureIndicator: true,
            },
          ],
        },
        {
          type: 'SECTION',
          header: 'My Third Section'.toUpperCase(),
          rows: [
            {
              title: 'Different title style',
              showDisclosureIndicator: true,
              titleStyle: {
                color: 'red',
              },
            },
          ],
        },
        {
          type: 'CUSTOM_VIEW',
          render: () => (
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 18,
                color: '#999',
                marginBottom: 40,
                marginTop: -30,
                fontFamily,
              }}
            >
              v1.2.3
            </Text>
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





