import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
    Home: undefined
    Auth: undefined
    Menu: { name: string }
}

export type ScreenProps = NativeStackScreenProps<RootStackParamList>
