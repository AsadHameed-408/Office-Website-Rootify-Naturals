import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';

// Custom Components & Styles
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import styles from './AddStoresStyle';
import CColors from '../../../constants/CColors';
import LinearGradient from 'react-native-linear-gradient';

const AddStores = () => {

    // Form Inputs (Inko aap controlled inputs ke liye use kar sakte hain)
    const [warehouseName, setWarehouseName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackArrowAppBar title={'Add Store'} />

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>

                {/*  Store Name Input */}
                <Text style={styles.label}>Store Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Store Name"
                        value={warehouseName}
                        onChangeText={setWarehouseName}
                    />
                </View>

                {/*  Store URL */}
                <Text style={styles.label}>Store URL*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Store URL"
                        keyboardType="url"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {/*  Access Token */}
                <Text style={styles.label}>Access Token*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Access Token"
                        keyboardType="url"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {/*  Instagram Key */}
                <Text style={styles.label}>Instagram Key*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Instagram Key"
                        keyboardType="instagram key"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {/*  Webhook Secret Code */}
                <Text style={styles.label}>Webhook Secret Code*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Webhook Secret Code"
                        keyboardType="webhook secret code*"
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
                    <Text style={styles.btnText}>Save Store</Text>
                </LinearGradient>
                {/* Bottom Spacer */}
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

export default AddStores;