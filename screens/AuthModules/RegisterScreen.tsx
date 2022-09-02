import { FieldValues, useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { Button, Input } from '../../components/atoms'

const RegisterScreen = () => {
    const { control, handleSubmit, formState } = useForm()

    const onRegister = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <View style={registerStyles.container}>
            <Input
                control={control}
                name="name"
                type="text"
                label="Name"
                rules={{ required: true }}
            />
            <Input
                control={control}
                name="lastname"
                label="Lastname"
                type="text"
            />
            <Input
                control={control}
                name="email"
                label="Email Address"
                type="email"
            />
            <Input
                control={control}
                name="pasword"
                label="Password"
                type="password"
            />
            <Button
                title="Register"
                style={{
                    button: registerStyles.button,
                    text: registerStyles.buttonText,
                }}
                onPress={handleSubmit(onRegister)}
            />
        </View>
    )
}

const registerStyles = StyleSheet.create({
    container: {
        marginTop: 62,
        marginHorizontal: 50,
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#FA4A0C',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '400',
    },
})

export default RegisterScreen
