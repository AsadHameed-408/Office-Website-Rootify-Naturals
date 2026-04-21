import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AddSuppliersStyle'

// Custom Components & Styles
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../constants/CColors';

const AddSuppliers = () => {
    // Store/Warehouse States
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);

    // Location States
    const [countryValue, setCountryValue] = useState(null);
    const [isCountryFocus, setCountryFocus] = useState(false);
    const [stateValue, setStateValue] = useState(null);
    const [isStateFocus, setStateFocus] = useState(false);
    const [cityValue, setCityValue] = useState(null);
    const [isCityFocus, setCityFocus] = useState(false);

    // Form Inputs
    const [warehouseName, setWarehouseName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    // Data Lists
    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];

    const countryList = [
        { label: 'Pakistan', value: '1' },
        { label: 'India', value: '2' },
        { label: 'USA', value: '3' },
    ];

    const stateListData = [
        { label: 'Punjab', value: '1' },
        { label: 'Sindh', value: '2' },
        { label: 'KPK', value: '3' },
    ];

    const cityListData = [
        { label: 'Lahore', value: '1' },
        { label: 'Karachi', value: '2' },
        { label: 'Islamabad', value: '3' },
    ];

    const handleSave = () => {
        // Logic to save supplier
        console.log({
            warehouseName,
            phoneNumber,
            countryValue,
            address
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackArrowAppBar title={'Add Supplier'} />

            <ScrollView
                style={styles.body}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {/* Warehouse Dropdown */}
                <Text style={styles.label}>Warehouse*</Text>
                <Dropdown
                    style={[styles.dropdown, isWareHouseFocus && styles.activeBorder]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={wareHouseList}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Store"
                    value={wareHouseValue}
                    onFocus={() => setWareHouseFocus(true)}
                    onBlur={() => setWareHouseFocus(false)}
                    onChange={item => {
                        setWareHouseValue(item.value);
                        setWareHouseFocus(false);
                    }}
                />

                {/* Name Input */}
                <Text style={styles.label}>Supplier Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Supplier Name"
                        placeholderTextColor="#ababab"
                        value={warehouseName}
                        onChangeText={setWarehouseName}
                    />
                </View>

                {/* Phone Number Input */}
                <Text style={styles.label}>Phone Number*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. +92 300 1234567"
                        placeholderTextColor="#ababab"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>

                {/* Country Dropdown */}
                <Text style={styles.label}>Country*</Text>
                <Dropdown
                    style={[styles.dropdown, isCountryFocus && styles.activeBorder]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={countryList}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Country"
                    value={countryValue}
                    onFocus={() => setCountryFocus(true)}
                    onBlur={() => setCountryFocus(false)}
                    onChange={item => {
                        setCountryValue(item.value);
                        setCountryFocus(false);
                    }}
                />

                {/* State Dropdown */}
                <Text style={styles.label}>State / Province*</Text>
                <Dropdown
                    style={[styles.dropdown, isStateFocus && styles.activeBorder]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={stateListData}
                    labelField="label"
                    valueField="value"
                    placeholder="Select State"
                    value={stateValue}
                    onFocus={() => setStateFocus(true)}
                    onBlur={() => setStateFocus(false)}
                    onChange={item => {
                        setStateValue(item.value);
                        setStateFocus(false);
                    }}
                />

                {/* City Dropdown */}
                <Text style={styles.label}>City*</Text>
                <Dropdown
                    style={[styles.dropdown, isCityFocus && styles.activeBorder]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={cityListData}
                    labelField="label"
                    valueField="value"
                    placeholder="Select City"
                    value={cityValue}
                    onFocus={() => setCityFocus(true)}
                    onBlur={() => setCityFocus(false)}
                    onChange={item => {
                        setCityValue(item.value);
                        setCityFocus(false);
                    }}
                />

                {/* Full Address Input */}
                <Text style={styles.label}>Full Address*</Text>
                <View style={[styles.inputContainer, styles.textAreaContainer]}>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Enter Complete Address"
                        placeholderTextColor="#ababab"
                        multiline={true}
                        numberOfLines={4}
                        value={address}
                        onChangeText={setAddress}
                    />
                </View>

                {/* Save Button */}
                <TouchableOpacity activeOpacity={0.8} onPress={handleSave}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient || ['#18b5a1', '#0ea391']}
                        style={styles.confirmBtn}
                    >
                        <Text style={styles.btnText}>Save Supplier</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ height: 50 }} />
            </ScrollView>
            <View style={{ height: 30 }} />
        </View>
    );
};



export default AddSuppliers;