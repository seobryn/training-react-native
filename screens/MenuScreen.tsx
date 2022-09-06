import {
    Animated,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { IconType } from '../components/atoms/IconButton/Types'
import { ScreenProps } from '../navigation/Types'
import IconButton from '../components/atoms/IconButton'
import { useRef, useState } from 'react'

type MenuItem = { key: string; value: string; icon?: IconType }

const MenuOptions: MenuItem[] = [
    { key: 'profile', value: 'Profile', icon: 'user-circle' },
    { key: 'orders', value: 'Orders', icon: 'shopping-basket' },
    { key: 'offers', value: 'Offer and promo', icon: 'tag' },
    { key: 'privacy', value: 'Privacy policy', icon: 'file' },
    { key: 'security', value: 'Security', icon: 'shield' },
]

const MenuScreen = () => {
    const scaleValue = useRef(new Animated.Value(1)).current
    const translateValue = useRef(new Animated.Value(0)).current

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.6,
            duration: 300,
            useNativeDriver: true,
        }).start()
        Animated.timing(translateValue, {
            toValue: showMenu ? 0 : 250,
            duration: 300,
            useNativeDriver: true,
        }).start()
        setShowMenu(!showMenu)
    }

    return (
        <SafeAreaView style={MenuStyles.container}>
            {/* Menu Section */}
            <View style={MenuStyles.menu}>
                <FlatList
                    contentContainerStyle={MenuStyles.menuList}
                    data={MenuOptions}
                    renderItem={(listItem) => (
                        <TouchableOpacity
                            style={[
                                { marginVertical: 15, paddingBottom: 20 },
                                MenuStyles.menuItemSep,
                            ]}
                            onPress={() => toggleMenu()}
                        >
                            <View style={MenuStyles.menuItem}>
                                {listItem.item.icon && (
                                    <FontAwesome
                                        color="#ffff"
                                        style={{
                                            width: 26,
                                            justifyContent: 'center',
                                        }}
                                        size={24}
                                        name={listItem.item.icon}
                                    />
                                )}
                                <Text style={[MenuStyles.menuItemText]}>
                                    {listItem.item.value}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            {/* Content Section */}
            <Animated.View
                style={[
                    MenuStyles.content,
                    {
                        transform: [
                            {
                                scale: scaleValue,
                            },
                            {
                                translateX: translateValue,
                            },
                        ],
                        borderRadius: showMenu ? 15 : 0,
                    },
                ]}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <IconButton name="bars" onPress={toggleMenu} />
                    <IconButton
                        name="shopping-cart"
                        styles={{
                            text: {
                                color: '#d0d0d0',
                            },
                        }}
                    />
                </View>
            </Animated.View>
        </SafeAreaView>
    )
}

const MenuStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FA4A0C',
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
        width: 800,
        marginLeft: 38,
    },
    menuList: {
        justifyContent: 'center',
        height: '100%',
    },
    menuItem: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    menuItemSep: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff53',
        paddingBottom: 10,
        marginBottom: 5,
    },
    menuItemText: {
        width: 100,
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: 12,
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        paddingTop: 74,
        paddingHorizontal: 34,
    },
})

export default MenuScreen
