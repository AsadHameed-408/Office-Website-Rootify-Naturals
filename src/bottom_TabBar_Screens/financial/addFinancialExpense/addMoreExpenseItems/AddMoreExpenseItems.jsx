import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet, // Import missing StyleSheet
    Modal
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AddMoreExpenseItemsStyle'

// Custom Components
import BackArrowAppBar from '../../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../../constants/CColors';

const AddMoreExpenseItems = () => {
    // States
    const [warehouseValue, setWarehouseValue] = useState(null);
    const [isWarehouseFocus, setWarehouseFocus] = useState(false);

    const [paymentModeValue, setPaymentModeValue] = useState(null);
    const [isPaymentModeFocus, setPaymentModeFocus] = useState(false);

    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    // Data Lists
    const wareHouseList = [
        { label: 'Explore Traders', value: '1' },
        { label: 'Falak Traders', value: '2' },
        { label: 'Taimoor Traders', value: '3' },
    ];

    const paymentModeList = [
        { label: 'Cash', value: 'cash' },
        { label: 'Bank Transfer', value: 'bank' },
        { label: 'Cheque', value: 'cheque' },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackArrowAppBar title={'Add Expense Items'} />

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>

                {/* Image Picker Placeholder */}
                <TouchableOpacity
                    style={styles.imagePickerContainer}
                    activeOpacity={0.7}
                    onPress={() => setModalVisible(true)}
                >
                    <MaterialCommunityIcons name={'plus'} size={60} color={'#D9D9D9'} />
                    <Text style={styles.imagePickerText}>Upload Receipt Image</Text>
                </TouchableOpacity>

                {/* Warehouse Dropdown */}
                <Text style={styles.label}>Warehouse*</Text>
                <Dropdown
                    style={[styles.dropdown, isWarehouseFocus && { borderColor: '#3f5189' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={wareHouseList}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Warehouse"
                    value={warehouseValue}
                    onFocus={() => setWarehouseFocus(true)}
                    onBlur={() => setWarehouseFocus(false)}
                    onChange={item => {
                        setWarehouseValue(item.value);
                        setWarehouseFocus(false);
                    }}
                />

                <View style={{ flexDirection: 'row', gap: 10 }}>
                    {/* Payment Mode */}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>Payment Mode*</Text>
                        <Dropdown
                            style={[styles.dropdown, isPaymentModeFocus && { borderColor: '#3f5189' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={paymentModeList}
                            labelField="label"
                            valueField="value"
                            placeholder="Mode"
                            value={paymentModeValue}
                            onFocus={() => setPaymentModeFocus(true)}
                            onBlur={() => setPaymentModeFocus(false)}
                            onChange={item => {
                                setPaymentModeValue(item.value);
                                setPaymentModeFocus(false);
                            }}
                        />
                    </View>

                    {/* Amount Input */}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>Amount*</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="0.00"
                                keyboardType="numeric"
                                placeholderTextColor={"#D9D9D9"}
                                value={amount}
                                onChangeText={setAmount}
                            />
                        </View>
                    </View>
                </View>

                {/* Comments Input */}
                <Text style={styles.label}>Comments</Text>
                <View style={[styles.inputContainer, { height: 100 }]}>
                    <TextInput
                        style={[styles.input, { textAlignVertical: 'top', padding: 10 }]}
                        placeholder="Add some notes..."
                        placeholderTextColor={"#D9D9D9"}
                        multiline={true}
                        numberOfLines={4}
                        value={comment}
                        onChangeText={setComment}
                    />
                </View>

                {/* Save Button */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => console.log('Saving...')}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient || ['#18b5a1', '#3f5189']}
                        style={styles.confirmBtn}
                    >
                        <Text style={styles.btnText}>Add Expense Item</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ height: 50 }} />
            </ScrollView>

            {/* Image Picker Modal */}
            <Modal visible={isModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalBottomContainer}>
                        <TouchableOpacity style={styles.modalOption} onPress={() => { }}>
                            <Text>From Gallery</Text>
                        </TouchableOpacity>
                        <View style={styles.separator} />
                        <TouchableOpacity style={styles.modalOption} onPress={() => { }}>
                            <Text>Take Picture</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.modalBottomContainer}>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={{ fontWeight: 'bold', color: 'red' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


export default AddMoreExpenseItems;