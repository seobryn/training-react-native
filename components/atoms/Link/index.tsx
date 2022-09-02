import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Linking, Text, TextStyle, ViewStyle } from 'react-native'
import LinkStyles from './LinkStyle'

type LinkProps = {
    text: string
    href: string
    isExternal?: boolean
    style?: TextStyle | ViewStyle
}

const Link = ({ text, href, isExternal, style }: LinkProps) => {
    const navigation = useNavigation()
    const [value, setStyle] = useState<typeof style>(LinkStyles.text)

    useEffect(() => {
        setStyle({ ...style, ...LinkStyles.text })
    }, [style])

    const handleOnPress = (link: string) => {
        if (isExternal) {
            Linking.openURL(link)
            return
        } else {
            return navigation.navigate(link as never)
        }
    }

    return (
        <Text style={value} onPress={() => handleOnPress(href)}>
            {text}
        </Text>
    )
}

export default Link
