import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';

// Custom Components & Constants
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../constants/CColors';
import styles from './AddWareHouseStyle'

const AddWareHouse = () => {
    // --- 1. States ---
    const [isModalVisible, setModalVisible] = useState(false);

    // Dropdown States
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [countryValue, setCountryValue] = useState(null);
    const [stateValue, setStateValue] = useState(null);
    const [cityValue, setCityValue] = useState(null);

    // Focus States (For styling)
    const [focusState, setFocusState] = useState({ store: false, country: false, state: false, city: false });

    // Form Inputs
    const [warehouseName, setWarehouseName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    // --- 2. Data Lists ---
    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
    ];

    const countryList = [{ label: 'Pakistan', value: '1' }, { label: 'India', value: '2' }];
    const stateListData = [{ label: 'Punjab', value: '1' }, { label: 'Sindh', value: '2' }];
    const cityListData = [{ label: 'Lahore', value: '1' }, { label: 'Karachi', value: '2' }];

    return (
        <View style={styles.mainContainer}>
            <BackArrowAppBar title={'Add Warehouse'} />

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>

                {/* 1. Image Picker */}
                <TouchableOpacity
                    style={styles.imagePickerContainer}
                    activeOpacity={0.7}
                    onPress={() => setModalVisible(true)}
                >
                    <MaterialCommunityIcons name={'camera-plus-outline'} size={50} color={'#D9D9D9'} />
                    <Text style={styles.imagePickerText}>Upload Brand Image</Text>
                </TouchableOpacity>

                {/* 2. Shopify Store Dropdown */}
                <Text style={styles.label}>Shopify Store</Text>
                <Dropdown
                    style={[styles.dropdown, focusState.store && styles.inputFocus]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={wareHouseList}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Store"
                    value={wareHouseValue}
                    onFocus={() => setFocusState({ ...focusState, store: true })}
                    onBlur={() => setFocusState({ ...focusState, store: false })}
                    onChange={item => setWareHouseValue(item.value)}
                />

                {/* 3. Warehouse Name */}
                <Text style={styles.label}>Warehouse Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Warehouse Name"
                        placeholderTextColor="#ababab"
                        value={warehouseName}
                        onChangeText={setWarehouseName}
                    />
                </View>

                {/* 4. Phone Number */}
                <Text style={styles.label}>Phone Number*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Phone"
                        placeholderTextColor="#ababab"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>

                {/* 5. Country Dropdown */}
                <Text style={styles.label}>Country*</Text>
                <Dropdown
                    style={[styles.dropdown, focusState.country && styles.inputFocus]}
                    placeholderStyle={styles.placeholderStyle}
                    data={countryList}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Country"
                    value={countryValue}
                    onFocus={() => setFocusState({ ...focusState, country: true })}
                    onBlur={() => setFocusState({ ...focusState, country: false })}
                    onChange={item => setCountryValue(item.value)}
                />

                {/* 6. State Dropdown */}
                <Text style={styles.label}>State*</Text>
                <Dropdown
                    style={[styles.dropdown, focusState.state && styles.inputFocus]}
                    placeholderStyle={styles.placeholderStyle}
                    data={stateListData}
                    labelField="label"
                    valueField="value"
                    placeholder="Select State"
                    value={stateValue}
                    onFocus={() => setFocusState({ ...focusState, state: true })}
                    onBlur={() => setFocusState({ ...focusState, state: false })}
                    onChange={item => setStateValue(item.value)}
                />

                {/* 7. City Dropdown */}
                <Text style={styles.label}>City*</Text>
                <Dropdown
                    style={[styles.dropdown, focusState.city && styles.inputFocus]}
                    placeholderStyle={styles.placeholderStyle}
                    data={cityListData}
                    labelField="label"
                    valueField="value"
                    placeholder="Select City"
                    value={cityValue}
                    onFocus={() => setFocusState({ ...focusState, city: true })}
                    onBlur={() => setFocusState({ ...focusState, city: false })}
                    onChange={item => setCityValue(item.value)}
                />

                {/* 8. Full Address */}
                <Text style={styles.label}>Full Address*</Text>
                <View style={[styles.inputContainer, styles.multilineInput]}>
                    <TextInput
                        style={[styles.input, { textAlignVertical: 'top' }]}
                        placeholder="Enter Complete Address"
                        placeholderTextColor="#ababab"
                        multiline={true}
                        numberOfLines={4}
                        value={address}
                        onChangeText={setAddress}
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient || ['#18b5a1', '#0fa391']}
                        style={styles.confirmBtn}
                    >
                        <Text style={styles.btnText}>Save Warehouse</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ height: 50 }} />
            </ScrollView>
            <View style={{ height: 30 }} />

            {/* Image Picker Modal */}
            <Modal visible={isModalVisible} transparent animationType="fade">
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Choose Option</Text>
                        <TouchableOpacity style={styles.modalOption} onPress={() => { }}>
                            <MaterialCommunityIcons name="image-outline" size={24} color="#555" />
                            <Text style={styles.optionText}>From Gallery</Text>
                        </TouchableOpacity>
                        <View style={styles.divider} />
                        <TouchableOpacity style={styles.modalOption} onPress={() => { }}>
                            <MaterialCommunityIcons name="camera-outline" size={24} color="#555" />
                            <Text style={styles.optionText}>Take Picture</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cancelBtn}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};



export default AddWareHouse;