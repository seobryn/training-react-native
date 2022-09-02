import React from 'react'
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LoginScreen from './AuthModules/LoginScreen'
import RegisterScreen from './AuthModules/RegisterScreen'
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs/lib/typescript/src/types'

const Tabs = createMaterialTopTabNavigator()

const AuthScreen = () => {
    return (
        <>
            <Image
                source={require('../assets/icon.png')}
                style={authStyles.logo}
            />
            <Tabs.Navigator screenOptions={screenOptions}>
                <Tabs.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        tabBarLabel: 'Login',
                    }}
                />
                <Tabs.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        tabBarLabel: 'Sign-Up',
                    }}
                />
            </Tabs.Navigator>
        </>
    )
}

const authStyles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        position: 'absolute',
        zIndex: 2,
        left: '32%',
        top: '20%',
    },
})

const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarPressColor:'#FFFFFF',
    tabBarStyle: {
        height: 402,
        justifyContent: 'flex-end',
        borderRadius: 30,
        marginTop: -20,
    },
    tabBarIndicatorStyle: {
        width: 80,
        marginHorizontal: 60,
        alignContent: 'center',
        backgroundColor: '#FF4B3A',
    },
    tabBarLabelStyle: {
        textTransform: 'capitalize',
        fontSize: 18,
    },
}
export default AuthScreen
