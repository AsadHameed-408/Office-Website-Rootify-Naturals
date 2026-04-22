import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../constants/CColors';
import styles from './LoginScreenStyle';
import { validateEmail, validatePassword } from '../utils/textFeildsValidation';

const LoginScreen = () => {
    const navigation = useNavigation();

    // States for Login
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const [emailErr, setEmailErr] = useState();
    const [passwordErr, setPasswordErr] = useState();

    const [focusedInput, setFocusedInput] = useState(null);
    console.log(password)


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            style={styles.container}
        >
            {/* <StatusBar barStyle="dark-content" /> */}
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                {/* Header Section with Gradient */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors.gradient || ['#1fbba6', '#0891b2']}
                    style={styles.headerGradient}
                >
                    <View style={styles.brandContainer}>
                        <Text style={styles.brandName}>Rootify Naturals</Text>
                        <Text style={styles.brandTagline}>Manage Your Inventory & Orders</Text>
                    </View>
                </LinearGradient>

                {/* Login Form Card */}
                <View style={styles.formArea}>
                    <View style={styles.loginFormContainer}>
                        <Text style={styles.formTitle}>Welcome Back</Text>
                        <Text style={styles.formSubtitle}>Sign in to continue</Text>

                        {/* Email Input */}
                        <View style={{ marginBottom: 18 }}>
                            <View style={[styles.inputWrapper, emailErr && email && { borderBottomColor: '#E11D48' }, focusedInput === 'email' && { borderColor: '#1fbba6', borderWidth: 2 }]}>
                                <MaterialIcons name="alternate-email" size={20} color="#138b82" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Email Address"
                                    placeholderTextColor="#9ca3af"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onFocus={() => setFocusedInput('email')}
                                    onBlur={() => setFocusedInput(null)}
                                    value={email}
                                    onChangeText={(val) => {
                                        const emailError = validateEmail(val.trim())
                                        setEmailErr(emailError)
                                        setEmail(val.trim())
                                    }}
                                />
                            </View>
                            {emailErr && email && <Text style={{ marginHorizontal: 20, color: "#E11D48" }}>{emailErr}</Text>}
                        </View>

                        {/* Password Input */}
                        <View>
                            <View style={[styles.inputWrapper, passwordErr && password && { borderBottomColor: '#E11D48' }, focusedInput === 'password' && { borderColor: '#1fbba6', borderWidth: 2 }]}>
                                <MaterialIcons name="lock-outline" size={20} color="#138b82" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Password"
                                    placeholderTextColor="#9ca3af"
                                    secureTextEntry={secureTextEntry}
                                    onFocus={() => setFocusedInput('password')}
                                    onBlur={() => setFocusedInput(null)}
                                    value={password}
                                    onChangeText={(val) => {
                                        const passError = validatePassword(val.trim())
                                        setPasswordErr(passError)
                                        setPassword(val.trim())
                                    }}
                                />
                                <TouchableOpacity
                                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                >
                                    <MaterialIcons
                                        name={secureTextEntry ? "visibility-off" : "visibility"}
                                        size={20}
                                        color="#9ca3af"
                                    />
                                </TouchableOpacity>
                            </View>
                            {passwordErr && password && <Text style={{ marginHorizontal: 20, color: "#E11D48" }}>{passwordErr}</Text>}
                        </View>

                        {/* Forgot Password */}
                        <TouchableOpacity style={styles.forgotPassTouch}>
                            <Text style={styles.forgotPassText}>Forgot Password?</Text>
                        </TouchableOpacity>

                        {/* Sign In Button */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
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

                    {/* Footer Section */}
                    <View style={styles.footer}>
                        <MaterialIcons name="copyright" size={14} color={'#6b7280'} />
                        <Text style={styles.footerText}>2026 Rootify Naturals</Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};


export default LoginScreen;