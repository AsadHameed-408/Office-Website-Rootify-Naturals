import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../constants/CColors'
import styles from './LoginScreenStyle'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()
    setTimeout(() => {
        navigation.navigate('drawer')
    }, 1000)
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    return (
        <ScrollView>
            {/* gradient */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors.gradient}
                style={{ height: '55%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.brandName}>Rootify Naturals</Text>
                <Text style={styles.brandTagline}>Manage Your Inventory & Orders</Text>
            </LinearGradient>
            {/* login form */}
            <SafeAreaView >
                <View style={styles.loginFormContainer}>
                    <View style={styles.inputWrapper}>
                        <MaterialIcons name="alternate-email" size={22} color="#138b82" style={styles.inputIcon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email Address"
                            placeholderTextColor="#9ca3af"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    {/* Password Input Field */}
                    <View style={styles.inputWrapper}>
                        <MaterialIcons name="lock-outline" size={22} color="#138b82" style={styles.inputIcon} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            placeholderTextColor="#9ca3af"
                            secureTextEntry={secureTextEntry}
                        />
                        <TouchableOpacity style={{ position: 'absolute', right: 16 }} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                            {secureTextEntry ? <MaterialIcons name="visibility-off" size={22} color="#9ca3af" /> : <MaterialIcons name="visibility" size={22} color="#9ca3af" />}
                        </TouchableOpacity>
                    </View>
                    {/* Forgot Password */}
                    <TouchableOpacity style={styles.forgotPassTouch}>
                        <Text style={styles.forgotPassText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    {/* 3. Gradient Primary Button */}
                    <TouchableOpacity>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#1fbba6', '#0891b2']}
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText}>SIGN IN</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', height: 200, }}>
                    <MaterialIcons name="copyright" size={20} color={'#6b7280'} />
                    <Text style={{ color: '#6b7280', marginLeft: 4 }}>2024 Rootify Naturals</Text>
                </View>
            </SafeAreaView >
        </ScrollView >
    )
}

export default LoginScreen