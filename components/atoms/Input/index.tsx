import { Control, Controller, RegisterOptions } from 'react-hook-form'
import {
    KeyboardTypeOptions,
    ReturnKeyTypeOptions,
    StyleSheet,
    TextInput,
    View,
} from 'react-native'
import InputStyles from './InputStyles'

type InputType = 'text' | 'email' | 'password'

const KeyboardTypes: { [k in InputType]: KeyboardTypeOptions } = {
    text: 'default',
    email: 'email-address',
    password: 'default',
}

interface InputProps {
    name: string
    control: Control
    label?: string
    type?: InputType
    returnKeyType?: ReturnKeyTypeOptions
    rules?: Omit<
        RegisterOptions,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >
}

const Input = ({
    control,
    name,
    label,
    type = 'text',
    returnKeyType,
    rules,
}: InputProps) => {
    return (
        <View style={InputStyles.container}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { value, onBlur, onChange } }) => (
                    <TextInput
                        style={InputStyles.field}
                        selectionColor="#FF4B3A"
                        autoCapitalize='none'
                        placeholder={label || name}
                        keyboardType={KeyboardTypes[type]}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry={type == 'password'}
                        returnKeyType={returnKeyType}
                    />
                )}
            />
        </View>
    )
}

export default Input
