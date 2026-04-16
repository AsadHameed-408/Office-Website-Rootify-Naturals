import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from './SplashStyle'
import colors from '../constants/CColors'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation()
    setTimeout(() => {
        navigation.navigate('Login')
    }, 3000)
    return (
        <View style={{ flex: 1 }}>
            {/* 1. Teal Header & Branding Section */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors.gradient}
                style={styles.headerGradient}
            >
                <View style={styles.brandWrapper}>
                    <Text style={styles.brandName}>Rootify Naturals</Text>
                    <Text style={styles.brandTagline}>Manage Your Inventory & Orders</Text>
                </View>
            </LinearGradient>
        </View>
    )
}


export default SplashScreen