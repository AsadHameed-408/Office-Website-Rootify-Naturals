import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';

// Custom Components
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../constants/CColors';
import styles from './AddCustomersStyle'

const AddCustomers = () => {
    // Dropdown States
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [countryValue, setCountryValue] = useState(null);
    const [stateValue, setStateValue] = useState(null);
    const [cityValue, setCityValue] = useState(null);

    // Focus States for Styling
    const [focusedField, setFocusedField] = useState(null);

    // Form Input States
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'Explore Traders', value: '3' },
    ];

    const countryList = [{ label: 'Pakistan', value: '1' }, { label: 'USA', value: '3' }];
    const stateListData = [{ label: 'Punjab', value: '1' }, { label: 'Sindh', value: '2' }];
    const cityListData = [{ label: 'Lahore', value: '1' }, { label: 'Karachi', value: '2' }];

    // Helper to render input with focus border
    const renderInput = (label, value, setter, placeholder, icon, keyboard = 'default', isMultiline = false) => (
        <View style={styles.fieldWrapper}>
            <Text style={styles.label}>{label}</Text>
            <View style={[
                styles.inputContainer,
                focusedField === label && styles.activeBorder,
                isMultiline && { height: 100, alignItems: 'flex-start', paddingTop: 8 }
            ]}>
                <View style={styles.iconBox}>
                    {icon}
                </View>
                <TextInput
                    style={[styles.input, isMultiline && { textAlignVertical: 'top' }]}
                    placeholder={placeholder}
                    placeholderTextColor="#94a3b8"
                    value={value}
                    onChangeText={setter}
                    keyboardType={keyboard}
                    multiline={isMultiline}
                    onFocus={() => setFocusedField(label)}
                    onBlur={() => setFocusedField(null)}
                />
            </View>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <BackArrowAppBar title={'Add Customers'} />

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

                {/* Warehouse Dropdown */}
                <Text style={styles.label}>Warehouse*</Text>
                <Dropdown
                    style={[styles.dropdown, focusedField === 'warehouse' && styles.activeBorder]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={wareHouseList}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Warehouse"
                    value={wareHouseValue}
                    onFocus={() => setFocusedField('warehouse')}
                    onBlur={() => setFocusedField(null)}
                    onChange={item => {
                        setWareHouseValue(item.value);
                        setFocusedField(null);
                    }}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name="store" size={18} color="#18b5a1" style={{ marginRight: 10 }} />
                    )}
                />

                {/* Names Row */}
                <View style={styles.row}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={styles.label}>First Name*</Text>
                        <View style={[styles.inputContainer, focusedField === 'fname' && styles.activeBorder]}>
                            <TextInput
                                style={styles.input}
                                placeholder="First"
                                value={firstName}
                                onChangeText={setFirstName}
                                onFocus={() => setFocusedField('fname')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>Last Name*</Text>
                        <View style={[styles.inputContainer, focusedField === 'lname' && styles.activeBorder]}>
                            <TextInput
                                style={styles.input}
                                placeholder="Last"
                                value={lastName}
                                onChangeText={setLastName}
                                onFocus={() => setFocusedField('lname')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </View>
                    </View>
                </View>

                {/* Email & Phone */}
                {renderInput('Email Address*', email, setEmail, 'example@mail.com', <Feather name="mail" size={16} color="#18b5a1" />, 'email-address')}
                {renderInput('Phone Number*', phoneNumber, setPhoneNumber, '03xx-xxxxxxx', <Feather name="phone" size={16} color="#18b5a1" />, 'phone-pad')}

                {/* Country & State */}
                <View style={styles.row}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={styles.label}>Country*</Text>
                        <Dropdown
                            style={[styles.dropdown, focusedField === 'country' && styles.activeBorder]}
                            data={countryList}
                            labelField="label"
                            valueField="value"
                            placeholder="Country"
                            value={countryValue}
                            onFocus={() => setFocusedField('country')}
                            onBlur={() => setFocusedField(null)}
                            onChange={item => setCountryValue(item.value)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>State*</Text>
                        <Dropdown
                            style={[styles.dropdown, focusedField === 'state' && styles.activeBorder]}
                            data={stateListData}
                            labelField="label"
                            valueField="value"
                            placeholder="State"
                            value={stateValue}
                            onFocus={() => setFocusedField('state')}
                            onBlur={() => setFocusedField(null)}
                            onChange={item => setStateValue(item.value)}
                        />
                    </View>
                </View>

                {/* City Dropdown */}
                <Text style={styles.label}>City*</Text>
                <Dropdown
                    style={[styles.dropdown, focusedField === 'city' && styles.activeBorder]}
                    data={cityListData}
                    labelField="label"
                    valueField="value"
                    placeholder="Select City"
                    value={cityValue}
                    onFocus={() => setFocusedField('city')}
                    onBlur={() => setFocusedField(null)}
                    onChange={item => setCityValue(item.value)}
                    renderLeftIcon={() => (
                        <Feather name="map" size={16} color="#18b5a1" style={{ marginRight: 10 }} />
                    )}
                />

                {/* Address */}
                {renderInput('Full Address*', address, setAddress, 'Enter street, building, etc.', <Feather name="map-pin" size={16} color="#18b5a1" />, 'default', true)}

                {/* Save Button */}
                <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 15 }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#18b5a1', '#128c7e']}
                        style={styles.confirmBtn}
                    >
                        <Text style={styles.btnText}>Save Customer</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </ScrollView>
            <View style={{ height: 30 }} />
        </View>
    );
};


export default AddCustomers;