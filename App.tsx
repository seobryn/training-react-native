import { useEffect, useCallback } from 'react'
import AppNavigation from './navigation/BaseNavigation'
import * as SplashScreen from 'expo-splash-screen'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

export default function App() {
    const [fontsLoaded] = useFonts({
        SFProRounded: require('./assets/fonts/SF-Pro-Rounded-Heavy.ttf'),
    })

    useEffect(() => {
        async function Prepare() {
            await SplashScreen.preventAutoHideAsync()
        }
        Prepare()
    }, [])

    const OnLayout = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }

    return (
        <SafeAreaView onLayout={OnLayout} style={styles.mainContainer}>
            <AppNavigation />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
})
