import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../../../widgets/backarrow_appbar/BackArrowAppBar'
import { Dropdown } from 'react-native-element-dropdown'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import CColors from '../../../../constants/CColors'
import styles from './AddChartOfAccountsStyle'

const AddChartOfAccounts = () => {
    // Input States
    const [accountName, setAccountName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    // Dropdown States
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);

    const [accountTypeValue, setAccountTypeValue] = useState(null);
    const [isAccountTypeFocus, setAccountTypeFocus] = useState(false);

    const [paymentModeValue, setPaymentModeValue] = useState(null);
    const [isPaymentModeFocus, setPaymentModeFocus] = useState(false);

    // Checkbox State
    const [checkedBox, setCheckedBox] = useState(false);

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
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackArrowAppBar title={'Add Chart Of Account'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>

                    <Text style={styles.heading}>General Details</Text>

                    {/* Warehouse Dropdown */}
                    <View style={styles.container}>
                        <Text style={styles.textLabel}>Warehouse*</Text>
                        <Dropdown
                            style={[styles.dropdown, isWareHouseFocus && { borderColor: '#18b5a1' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={wareHouseList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isWareHouseFocus ? 'Select Warehouse' : '...'}
                            value={wareHouseValue}
                            onFocus={() => setWareHouseFocus(true)}
                            onBlur={() => setWareHouseFocus(false)}
                            onChange={item => {
                                setWareHouseValue(item.value);
                                setWareHouseFocus(false);
                            }}
                        />
                    </View>

                    {/* Name & Type Row */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={[styles.container, { marginRight: 10 }]}>
                            <Text style={styles.textLabel}>Name*</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#D9D9D9'}
                                    placeholder="Account Name"
                                    value={accountName}
                                    onChangeText={setAccountName}
                                />
                            </View>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Type*</Text>
                            <Dropdown
                                style={[styles.dropdown, isAccountTypeFocus && { borderColor: '#18b5a1' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={accountType}
                                labelField="label"
                                valueField="value"
                                placeholder={!isAccountTypeFocus ? 'Type' : '...'}
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

                    {/* Is Cash Checkbox */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.checkboxRow}
                        onPress={() => setCheckedBox(!checkedBox)}
                    >
                        <MC
                            name={checkedBox ? 'checkbox-marked' : 'checkbox-blank-outline'}
                            size={24}
                            color={checkedBox ? '#18b5a1' : '#b4b4b4'}
                        />
                        <Text style={[styles.textLabel, { marginLeft: 8 }]}>Is Cash Account</Text>
                    </TouchableOpacity>

                    <Text style={styles.heading}>Opening Balance</Text>

                    {/* Payment Mode & Amount Row */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={[styles.container, { marginRight: 10 }]}>
                            <Text style={styles.textLabel}>Payment Mode*</Text>
                            <Dropdown
                                style={[styles.dropdown, isPaymentModeFocus && { borderColor: '#18b5a1' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={paymentMode}
                                labelField="label"
                                valueField="value"
                                placeholder={!isPaymentModeFocus ? 'Payment' : '...'}
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
                                    keyboardType="numeric"
                                    value={amount}
                                    onChangeText={setAmount}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Description Section */}
                    <Text style={styles.heading}>Description</Text>
                    <View style={[styles.inputContainer, { height: 100, alignItems: 'flex-start' }]}>
                        <TextInput
                            style={[styles.input, { textAlignVertical: 'top', paddingTop: 10 }]}
                            placeholder="Account Description (Optional)"
                            placeholderTextColor={'#D9D9D9'}
                            multiline={true}
                            numberOfLines={4}
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>

                    {/* Save Button */}
                    <TouchableOpacity activeOpacity={0.9} onPress={() => console.log('Saved')}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={CColors.gradient || ['#18b5a1', '#0fa391']}
                            style={styles.confirmBtn}
                        >
                            <Text style={styles.btnText}>Save Chart Account</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={{ height: 40 }} />
                </View>
            </ScrollView>
        </View>
    )
}


export default AddChartOfAccounts;