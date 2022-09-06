import {
    GestureResponderEvent,
    Pressable,
    TextStyle,
    ViewStyle,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { IconType } from './Types'
import IconButtonStyle from './IconButtonStyle'
import { useEffect, useState } from 'react'

type IconButtonProps = {
    name: IconType
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined
    styles?: {
        button?: ViewStyle
        buttonPressed?: ViewStyle
        text?: ViewStyle | TextStyle
    }
}

const IconButton = ({ name, styles, onPress }: IconButtonProps) => {
    const [iconStyle, setIconStyle] = useState<typeof styles>({})

    useEffect(() => {
        setIconStyle({
            button: {
                ...IconButtonStyle.button,
                ...styles?.button,
            },
            text: {
                ...IconButtonStyle.text,
                ...styles?.text,
            },
            buttonPressed: {
                ...IconButtonStyle.buttonPressed,
                ...styles?.buttonPressed,
            },
        })
    }, [styles])

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) =>
                pressed
                    ? [iconStyle?.button, iconStyle?.buttonPressed]
                    : iconStyle?.button
            }
        >
            <FontAwesome name={name} style={iconStyle?.text} />
        </Pressable>
    )
}

export default IconButton
