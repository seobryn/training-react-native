import React, { useEffect, useState } from 'react'
import {
    GestureResponderEvent,
    Pressable,
    Text,
    TextStyle,
    ViewStyle,
} from 'react-native'
import ButtonStyle from './ButtonStyle'

type CustomButtonProps = {
    title?: string
    style?: {
        button?: ViewStyle
        text?: ViewStyle | TextStyle
    }
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined
}

const Button = (props: CustomButtonProps) => {
    const { onPress, title = '', style } = props
    const [value, setValue] = useState<Pick<CustomButtonProps, 'style'>>({
        style,
    })

    useEffect(() => {
        if (style) {
            setValue({
                style: {
                    button: {
                        ...ButtonStyle.button,
                        ...style.button,
                    },
                    text: {
                        ...ButtonStyle.text,
                        ...style.text,
                    },
                },
            })
        }
    }, [])

    return (
        <Pressable
            onPress={onPress}
            style={value.style?.button || ButtonStyle.button}
        >
            <Text style={value.style?.text || ButtonStyle.text}>{title}</Text>
        </Pressable>
    )
}

export default Button
