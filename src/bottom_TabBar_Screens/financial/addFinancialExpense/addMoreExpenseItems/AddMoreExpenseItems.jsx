import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';

// Custom Components & Styles
import BackArrowAppBar from '../../../../widgets/backarrow_appbar/BackArrowAppBar';
import styles from './AddMoreExpenseItemsStyle';
import CColors from '../../../../constants/CColors';
import LinearGradient from 'react-native-linear-gradient';
import TransactionModal from './Modal';

const AddMoreExpenseItems = () => {


    // Store/Warehouse States
    const [warehouseValue, setWarehouseValue] = useState(null);
    const [isWarehouseFocus, setWarehouseFocus] = useState(false);
    // Payment Mode
    const [paymentModeValue, setPaymentModeValue] = useState(null);
    const [isPaymentModeFocus, setPaymentModeFocus] = useState(false);

    // Form Inputs
    const [warehouseName, setWarehouseName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    // Modal Visibility States
    const [isModalVisible, setModalVisible] = useState(false);


    // --- 2. Data Lists ---
    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];
    const paymentModeList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];



    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackArrowAppBar title={'Add Expense Items'} />

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                {/* image picker */}
                <TouchableOpacity style={styles.imagePickerContainer} activeOpacity={0.7} onPress={() => {
                    setModalVisible(true)
                }}>
                    <MaterialCommunityIcons name={'plus'} size={60} color={'#D9D9D9'} />
                    <Text style={styles.imagePickerText}>Upload Receipt Image</Text>
                </TouchableOpacity>
                {/* 2. Shopify Store Dropdown */}
                <Text style={styles.label}>Warehouse*</Text>
                <Dropdown
                    style={[styles.dropdown, isWarehouseFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={wareHouseList}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isWarehouseFocus ? wareHouseList[0].label : wareHouseList[0].label}
                    value={warehouseValue}
                    onFocus={() => setWarehouseFocus(true)}
                    onBlur={() => setWarehouseFocus(false)}
                    onChange={item => {
                        setWarehouseValue(item.value);
                        setWarehouseFocus(false);
                    }}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <Text style={styles.label}>Payment Mode*</Text>
                        <Dropdown
                            style={[styles.dropdown, isPaymentModeFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={paymentModeList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isPaymentModeFocus ? 'Payment Mode' : ''}
                            value={warehouseValue}
                            onFocus={() => setPaymentModeFocus(true)}
                            onBlur={() => setPaymentModeFocus(false)}
                            onChange={item => {
                                setPaymentModeValue(item.value);
                                setPaymentModeFocus(false)
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <Text style={styles.label}>Amount*</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Amount"
                                placeholderTextColor={"#D9D9D9"}
                                value={warehouseName}
                                onChangeText={setWarehouseName}
                            />
                        </View>
                    </View>
                </View>
                {/* 3. Name Input */}
                <Text style={styles.label}>Comments</Text>
                <View style={[styles.inputContainer, { height: 100, alignItems: 'flex-start' }]}>
                    <TextInput
                        style={[styles.input, { textAlignVertical: 'top', }]}
                        placeholder="Comments"
                        placeholderTextColor={"#D9D9D9"}
                        multiline={true}
                        numberOfLines={4}
                        value={warehouseName}
                        onChangeText={setWarehouseName}
                    />
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient}
                        style={styles.confirmBtn}
                        onPress={() => { }}
                    >
                        <Text style={styles.btnText}>Save Brand</Text>
                    </LinearGradient>
                </TouchableOpacity>
                {/* Bottom Spacer */}
                <View style={{ height: 100 }} />
            </ScrollView>

            <View>
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="slide">
                    <View
                        style={styles.modalContainer}>
                        <View
                            style={styles.modalBotomContainer}>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={() => { }}
                                style={{
                                    width: '95%',
                                    borderRadius: 0,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    borderRadius: 5,
                                    bottom: 0,
                                    marginBottom: 10,
                                    marginTop: 10,
                                }}>
                                <Text style={{ margin: 10 }}>From Gallery</Text>
                            </TouchableOpacity>
                            <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '90%' }} />
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={() => { }}
                                style={{
                                    width: '95%',
                                    borderRadius: 0,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    borderRadius: 5,
                                    bottom: 0,
                                    marginBottom: 10,
                                    marginTop: 10,
                                }}>
                                <Text style={{ margin: 10 }}>Take Picture</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalBotomContainer}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => { setModalVisible(false) }}
                                style={{
                                    width: '95%',
                                    borderRadius: 0,
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    borderRadius: 5,
                                    bottom: 0,
                                    marginBottom: 10,
                                    marginTop: 10,
                                }}>
                                <Text style={{ margin: 5, fontWeight: 'bold' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

export default AddMoreExpenseItems
