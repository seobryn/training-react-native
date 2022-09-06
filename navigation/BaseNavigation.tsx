import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import AuthScreen from '../screens/AuthScreen'
import { RootStackParamList } from './Types'
import MenuScreen from '../screens/MenuScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Context = React.createContext({
    user: {}
})

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Auth" component={AuthScreen}  />
                <Stack.Screen name="Menu" component={MenuScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
