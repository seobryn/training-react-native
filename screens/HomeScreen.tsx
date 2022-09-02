import React from 'react'
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native'
import Button from '../components/atoms/Button'
import { ScreenProps } from '../navigation/Types'

const HomeScreen = ({ navigation }: ScreenProps) => {
    const onPress = () => {
        navigation.navigate('Auth')
    }

    return (
        <View style={homeStyles.container}>
            <Image
                source={require('../assets/icon.png')}
                style={homeStyles.logo}
            />
            <Text style={homeStyles.textTitle}>Food For Everyone</Text>
            <ImageBackground
                source={require('../assets/images/guys.png')}
                style={homeStyles.logoGuys}
            >
                <Button title="Get started" onPress={onPress} />
            </ImageBackground>
        </View>
    )
}

const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: '#FF4B3A',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 56,
    },
    textTitle: {
        color: '#ffff',
        fontFamily: 'SFProRounded',
        fontSize: 65,
        marginTop: 31,
        marginLeft: 49,
        textAlign: 'left',
        lineHeight: 62,
    },
    logo: {
        marginLeft: 49,
        width: 73,
        height: 73,
    },
    logoGuys: {
        marginTop: 5,
        paddingBottom: 50,
        height: 490,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})

export default HomeScreen
