import { StyleSheet } from 'react-native';
import { fontFamily } from "./EditScreen";
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    heroContainer: {
        marginTop: 40,
        marginBottom: 50,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc',
        flexDirection: 'row',
    },
    heroImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'black',
        marginHorizontal: 20,
    },
    heroTitle: {
        fontFamily,
        color: 'black',
        fontSize: 24,
    },
    heroSubtitle: {
        fontFamily,
        color: '#999',
        fontSize: 14,
    },
})