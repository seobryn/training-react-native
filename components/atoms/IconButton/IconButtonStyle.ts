import { StyleSheet } from 'react-native'

const IconButtonStyle = StyleSheet.create({
    button: {
        width: 35,
        height: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPressed: {
        backgroundColor: '#E5E5E5',
    },
    text: {
        color: '#000000',
        fontSize: 20,
    },
})

export default IconButtonStyle
