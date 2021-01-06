import { StyleSheet } from 'react-native';
import { fontFamily } from "./SettingScreen";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    color: '#999',
    marginRight: 6,
    fontSize: 18 
  },
  versionText: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 40,
    fontFamily,
  },
  logo: {
    flex: 1,
    height: 75,
    width: 75,
    alignSelf: "center",
    margin: 20,
    borderRadius: 30
  },
  button: {
    backgroundColor: 'orange',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
})