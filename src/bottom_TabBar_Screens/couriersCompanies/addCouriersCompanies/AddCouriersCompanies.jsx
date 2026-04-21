import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../constants/CColors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './addCouriersCompaniesStyle'

const AddCouriersCompanies = () => {
    // Form States
    const [companyName, setCompanyName] = useState('');
    const [code, setCode] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [trackingUrl, setTrackingUrl] = useState('');

    return (
        <View style={styles.mainContainer}>
            <BackArrowAppBar title={'Add Courier Company'} />

            <ScrollView contentContainerStyle={styles.scrollBody} showsVerticalScrollIndicator={false}>

                {/* 1. Company Name */}
                <Text style={styles.label}>Company Name <Text style={{ color: '#E74C3C' }}>*</Text></Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="office-building" size={20} color="#7F8C8D" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. TCS Logistics"
                        placeholderTextColor="#BDC3C7"
                        value={companyName}
                        onChangeText={setCompanyName}
                    />
                </View>

                {/* 2. Code & Contact Person (Side by Side potentially, but keeping vertical for clarity) */}
                <Text style={styles.label}>Courier Code <Text style={{ color: '#E74C3C' }}>*</Text></Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="barcode-scan" size={20} color="#7F8C8D" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. tcs, lcs"
                        placeholderTextColor="#BDC3C7"
                        value={code}
                        onChangeText={setCode}
                    />
                </View>

                <Text style={styles.label}>Contact Person <Text style={{ color: '#E74C3C' }}>*</Text></Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="account-tie-outline" size={20} color="#7F8C8D" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#BDC3C7"
                        value={contactPerson}
                        onChangeText={setContactPerson}
                    />
                </View>

                {/* 3. Phone & Email */}
                <Text style={styles.label}>Phone Number <Text style={{ color: '#E74C3C' }}>*</Text></Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="phone-outline" size={20} color="#7F8C8D" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="021-XXX-XXX"
                        placeholderTextColor="#BDC3C7"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>

                <Text style={styles.label}>Email Address</Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="email-outline" size={20} color="#7F8C8D" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="support@company.com"
                        placeholderTextColor="#BDC3C7"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* 4. Website & Tracking */}
                <Text style={styles.label}>Website URL</Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="web" size={20} color="#7F8C8D" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="https://www.example.com"
                        placeholderTextColor="#BDC3C7"
                        keyboardType="url"
                        value={website}
                        onChangeText={setWebsite}
                    />
                </View>

                <Text style={styles.label}>Tracking URL Pattern</Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="map-marker-distance" size={20} color="#7F8C8D" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="https://track.com/id="
                        placeholderTextColor="#BDC3C7"
                        keyboardType="url"
                        value={trackingUrl}
                        onChangeText={setTrackingUrl}
                    />
                </View>

                {/* Action Button */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient || ['#1ABC9C', '#16A085']}
                        style={styles.confirmBtn}
                    >
                        <Text style={styles.btnText}>Save Courier Company</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
};



export default AddCouriersCompanies;