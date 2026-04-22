import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from './SplashStyle'
import colors from '../constants/CColors'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../services/user_Auth_State'

const SplashScreen = () => {
    const { isLoading } = useContext(AuthContext)
    const navigation = useNavigation()
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
                {isLoading && <ActivityIndicator style={{ marginTop: 10 }} size={'large'} color={'#fff'} />}
            </LinearGradient>
        </View>
    )
}


export default SplashScreen