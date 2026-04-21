import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Custom Components & Styles
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../constants/CColors';
import styles from './AddStoresStyle'

const AddStores = () => {
    // Form States
    const [storeName, setStoreName] = useState('');
    const [storeUrl, setStoreUrl] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [instaKey, setInstaKey] = useState('');
    const [webhookSecret, setWebhookSecret] = useState('');

    const handleSave = () => {
        const formData = {
            storeName,
            storeUrl,
            accessToken,
            instaKey,
            webhookSecret
        };
        console.log("Saving Store:", formData);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackArrowAppBar title={'Add Store'} />

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>

                {/* Store Name */}
                <Text style={styles.label}>Store Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Store Name"
                        placeholderTextColor="#ababab"
                        value={storeName}
                        onChangeText={setStoreName}
                    />
                </View>

                {/* Store URL */}
                <Text style={styles.label}>Store URL*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. digital-edge.com"
                        placeholderTextColor="#ababab"
                        keyboardType="url"
                        autoCapitalize="none"
                        value={storeUrl}
                        onChangeText={setStoreUrl}
                    />
                </View>

                {/* Access Token */}
                <Text style={styles.label}>Access Token*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter JWT or API Token"
                        placeholderTextColor="#ababab"
                        value={accessToken}
                        onChangeText={setAccessToken}
                    />
                </View>

                {/* Instagram Key */}
                <Text style={styles.label}>Instagram Key*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Key"
                        placeholderTextColor="#ababab"
                        value={instaKey}
                        onChangeText={setInstaKey}
                    />
                </View>

                {/* Webhook Secret Code */}
                <Text style={styles.label}>Webhook Secret Code*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Secret Code"
                        placeholderTextColor="#ababab"
                        value={webhookSecret}
                        onChangeText={setWebhookSecret}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.8} onPress={handleSave}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient || ['#18b5a1', '#0ea391']}
                        style={styles.confirmBtn}
                    >
                        <Text style={styles.btnText}>Save Store</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* Bottom Spacer */}
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};



export default AddStores;