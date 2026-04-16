import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';

// Custom Components & Styles
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import styles from './AddSuppliersStyle';
import CColors from '../../../constants/CColors';
import LinearGradient from 'react-native-linear-gradient';

const AddSuppliers = () => {

    // Store/Warehouse States
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);

    // Country States
    const [countryValue, setCountryValue] = useState(null);
    const [isCountryFocus, setCountryFocus] = useState(false);

    // State/Province States
    const [stateValue, setStateValue] = useState(null);
    const [isStateFocus, setStateFocus] = useState(false);

    // City
    const [cityValue, setCityValue] = useState(null);
    const [isCityFocus, setCityFocus] = useState(false);

    // Form Inputs (Inko aap controlled inputs ke liye use kar sakte hain)
    const [warehouseName, setWarehouseName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    // --- 2. Data Lists ---
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

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackArrowAppBar title={'Add Supplier'} />

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                {/* 2. Shopify Store Dropdown */}
                <Text style={styles.label}>Warehouse*</Text>
                <Dropdown
                    style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={wareHouseList}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isWareHouseFocus ? 'Select Store' : ''}
                    value={wareHouseValue}
                    onFocus={() => setWareHouseFocus(true)}
                    onBlur={() => setWareHouseFocus(false)}
                    onChange={item => {
                        setWareHouseValue(item.value);
                        setWareHouseFocus(false);
                    }}
                />

                {/* 3. Warehouse Name Input */}
                <Text style={styles.label}>Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Warehouse Name"
                        value={warehouseName}
                        onChangeText={setWarehouseName}
                    />
                </View>

                {/* 4. Phone Number Input */}
                <Text style={styles.label}>Phone Number*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Phone"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>

                {/* 5. Country Dropdown */}
                <Text style={styles.label}>Country*</Text>
                <Dropdown
                    style={[styles.dropdown, isCountryFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={countryList}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isCountryFocus ? 'Select Country' : ''}
                    value={countryValue}
                    onFocus={() => setCountryFocus(true)}
                    onBlur={() => setCountryFocus(false)}
                    onChange={item => {
                        setCountryValue(item.value);
                        setCountryFocus(false);
                    }}
                />

                {/* 6. State Dropdown */}
                <Text style={styles.label}>State*</Text>
                <Dropdown
                    style={[styles.dropdown, isStateFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={stateListData}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isStateFocus ? 'Select State' : ''}
                    value={stateValue}
                    onFocus={() => setStateFocus(true)}
                    onBlur={() => setStateFocus(false)}
                    onChange={item => {
                        setStateValue(item.value);
                        setStateFocus(false);
                    }}
                />

                {/* 7. City Dropdown */}
                <Text style={styles.label}>City*</Text>
                <Dropdown
                    style={[styles.dropdown, isCityFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={cityListData}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isCityFocus ? 'Select City' : ''}
                    value={cityValue}
                    onFocus={() => setCityFocus(true)}
                    onBlur={() => setCityFocus(false)}
                    onChange={item => {
                        setCityValue(item.value);
                        setCityFocus(false);
                    }}
                />

                {/* 8. Full Address Input (Multiline) */}
                <Text style={styles.label}>Full Address*</Text>
                <View style={[styles.inputContainer, { height: 100, alignItems: 'flex-start' }]}>
                    <TextInput
                        style={[styles.input, { textAlignVertical: 'top', paddingTop: 10 }]}
                        placeholder="Enter Complete Address"
                        multiline={true}
                        numberOfLines={4}
                        value={address}
                        onChangeText={setAddress}
                    />
                </View>

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={CColors.gradient}
                    style={styles.confirmBtn}
                    onPress={() => { /* Confirm button logic */ }}
                >
                    <Text style={styles.btnText}>Save Supplier</Text>
                </LinearGradient>
                {/* Bottom Spacer */}
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

export default AddSuppliers;