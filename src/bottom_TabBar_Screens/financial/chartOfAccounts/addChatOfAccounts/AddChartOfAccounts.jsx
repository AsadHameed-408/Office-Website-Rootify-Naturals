
import { View, Text, TextInput, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './AddChartOfAccountsStyle'
import { Dropdown } from 'react-native-element-dropdown'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import CColors from '../../../../constants/CColors'

const AddChartOfAccounts = () => {
    const [warehouseName, setWarehouseName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    // dropdown
    // warehouse selection
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    // Account type selection
    const [accountTypeValue, setAccountTypeValue] = useState(null);
    const [isAccountTypeFocus, setAccountTypeFocus] = useState(false);
    // payment mode selection
    const [paymentModeValue, setPaymentModeValue] = useState(null);
    const [isPaymentModeFocus, setPaymentModeFocus] = useState(false);

    // check box
    const [checkedBox, setCheckedBox] = useState(false);
    // Modal Visibility States
    const [isModalVisible, setModalVisible] = useState(false);
    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];
    const paymentMode = [
        { value: '1', label: 'Cash' },
        { value: '2', label: 'Card' },
        { value: '3', label: 'Online' },
    ];

    const accountType = [
        { value: '1', label: 'Assets' },
        { value: '2', label: 'Liability' },
        { value: '3', label: 'Income/Revenue' },
        { value: '4', label: 'Equity/Capital' },
    ];
    return (
        <View style={{ flex: 1 }}>
            <BackArrowAppBar title={'Add Chart Of Account'} />
            <ScrollView>
                <View style={styles.body}>
                    <Text style={styles.heading}>General Details</Text>
                    {/* 3. First Name Input */}
                    <View style={styles.container}>
                        <Text style={styles.textLabel}>Warehouse*</Text>
                        <Dropdown
                            style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholderTextColor={'#D9D9D9'}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={wareHouseList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isWareHouseFocus ? 'Select Warehouse' : ''}
                            searchPlaceholder="Search..."
                            value={wareHouseValue}
                            onFocus={() => setWareHouseFocus(true)}
                            onBlur={() => setWareHouseFocus(false)}
                            onChange={item => {
                                setWareHouseValue(item.value);
                                setWareHouseFocus(false);
                            }}
                        />
                    </View>
                    {/* Name & type */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={[styles.container, { marginRight: 10, }]}>
                            <Text style={styles.textLabel}>Name*</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#D9D9D9'}
                                    placeholder=" Account Name"
                                />
                            </View>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Type*</Text>
                            <Dropdown
                                style={[styles.dropdown, isAccountTypeFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#D9D9D9'}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={accountType}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isAccountTypeFocus ? 'Account Type' : ''}
                                searchPlaceholder="Search..."
                                value={accountTypeValue}
                                onFocus={() => setAccountTypeFocus(true)}
                                onBlur={() => setAccountTypeFocus(false)}
                                onChange={item => {
                                    setAccountTypeValue(item.value);
                                    setAccountTypeFocus(false);
                                }}
                            />
                        </View>
                    </View>
                    {/*  */}
                    <View >
                        <TouchableOpacity activeOpacity={0.8}
                            style={{ alignItems: "center", flexDirection: "row", marginTop: 10, marginBottom: 20, alignSelf: 'flex-start' }}
                            onPress={() => {
                                setCheckedBox(!checkedBox)
                            }}>
                            <MC
                                name={checkedBox ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                size={24}
                                color={checkedBox ? '#18b5a1' : '#b4b4b4'}
                            />
                            <Text style={[styles.textLabel, { marginHorizontal: 5 }]}>Is Cash Account</Text>
                        </TouchableOpacity>
                    </View>
                    {/* opening balance */}
                    <Text style={styles.heading}>Opening Balance</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Payment Mode*</Text>
                            <Dropdown
                                style={[styles.dropdown, isPaymentModeFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#D9D9D9'}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={paymentMode}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isPaymentModeFocus ? 'Select Payment' : ''}
                                searchPlaceholder="Search..."
                                value={paymentModeValue}
                                onFocus={() => setPaymentModeFocus(true)}
                                onBlur={() => setPaymentModeFocus(false)}
                                onChange={item => {
                                    setPaymentModeValue(item.value);
                                    setPaymentModeFocus(false);
                                }}
                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Amount*</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#D9D9D9'}
                                    placeholder="0"
                                />
                            </View>
                        </View>
                    </View>
                    {/* 8. Full Address Input (Multiline) */}
                    <Text style={styles.heading}>Description</Text>
                    <View style={[styles.inputContainer, { height: 100, alignItems: 'flex-start' }]}>
                        <TextInput
                            style={[styles.input, { textAlignVertical: 'top', paddingTop: 10 }]}
                            placeholder="Account Discription (Optional)"
                            placeholderTextColor={'#D9D9D9'}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient}
                        style={styles.confirmBtn}
                        onPress={() => { }}
                    >
                        <Text style={styles.btnText}>Save Chart Account</Text>
                    </LinearGradient>

                    <View style={{ height: 40 }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default AddChartOfAccounts
