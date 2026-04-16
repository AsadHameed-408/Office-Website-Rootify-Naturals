import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';

// Custom Components & Styles
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import styles from './addCouriersCompaniesStyle';
import CColors from '../../../constants/CColors';
import LinearGradient from 'react-native-linear-gradient';

const AddCouriersCompanies = () => {

    // Form Inputs (Inko aap controlled inputs ke liye use kar sakte hain)
    const [warehouseName, setWarehouseName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackArrowAppBar title={'Add Courier Company'} />

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>

                {/*  Company Name  Input */}
                <Text style={styles.label}>Company Name *</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Company Name"
                        value={warehouseName}
                        onChangeText={setWarehouseName}
                    />
                </View>

                {/*  Code  */}
                <Text style={styles.label}>Code *</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Code"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {/*  Contact Person  */}
                <Text style={styles.label}>Contact Person *</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Contact Person"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {/*  Phone  */}
                <Text style={styles.label}>Phone *</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {/*  Email */}
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Email"
                        keyboardType="email-address"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {/*  Website */}
                <Text style={styles.label}>Website</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Website"
                        keyboardType="url"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {/*  Tracking URL */}
                <Text style={styles.label}>Tracking URL</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Tracking URL"
                        keyboardType="url"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={CColors.gradient}
                    style={styles.confirmBtn}
                    onPress={() => { /* Confirm button logic */ }}
                >
                    <Text style={styles.btnText}>Save Courier Company</Text>
                </LinearGradient>
                {/* Bottom Spacer */}
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

export default AddCouriersCompanies;