import { FieldValues, useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { Button, Input } from '../../components/atoms'
import Link from '../../components/atoms/Link'
import { ScreenProps } from '../../navigation/Types'

const LoginScreen = ({ navigation }: ScreenProps) => {
    const { control, handleSubmit } = useForm()

    const onLogin = (data: FieldValues) => {
        console.log(data)

        navigation.navigate('Menu', {
            name: data.Email.substr(0, data.Email.indexOf('@')),
        })
    }

    return (
        <View style={loginStyles.container}>
            <Input
                name="Email"
                label="Email address"
                control={control}
                type="email"
                rules={{
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                }}
            />
            <Input
                name="Password"
                type="password"
                control={control}
                rules={{
                    required: true,
                }}
            />
            <Link
                text="Forgot passcode?"
                href="ForgotPassword"
                style={loginStyles.link}
            />
            <Button
                title="Login"
                style={{
                    button: loginStyles.button,
                    text: loginStyles.buttonText,
                }}
                onPress={handleSubmit(onLogin)}
            />
        </View>
    )
}

const loginStyles = StyleSheet.create({
    container: {
        marginTop: 62,
        marginHorizontal: 50,
        alignItems: 'center',
        flexDirection: 'column',
    },
    link: {
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    button: {
        marginTop: 30,
        backgroundColor: '#FA4A0C',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '400',
    },
})

export default LoginScreen
