import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import CColors from '../../../constants/CColors'
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'

const CreateOrder = () => {
    const navigation = useNavigation()
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [customerValue, setCustomerValue] = useState(null);
    const [salesmanValue, setSalesmanValue] = useState(null);

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: '#F8FAFB' }}>
            <StatusBar barStyle="light-content" />
            {/* Aapki apni AppBar */}
            <BackArrowAppBar title={'Create Order'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                <View style={styles.body}>

                    {/* Section 1: Logistics */}
                    <View style={styles.formCard}>
                        <View style={styles.inputGroup}>
                            <View style={styles.labelRow}>
                                <MC name="store-outline" size={18} color="#18b5a1" />
                                <Text style={styles.textLabel}>Warehouse*</Text>
                            </View>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={wareHouseList}
                                labelField="label"
                                valueField="value"
                                placeholder={'Select Warehouse'}
                                value={wareHouseValue}
                                onChange={item => setWareHouseValue(item.value)}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.labelRow}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MC name="account-outline" size={18} color="#18b5a1" />
                                    <Text style={styles.textLabel}>Customer*</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.7} style={styles.createNewBtn}>
                                    <MC name="plus" size={14} color="#fff" />
                                    <Text style={styles.createNewText}>New</Text>
                                </TouchableOpacity>
                            </View>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={wareHouseList} // Using same list for demo
                                labelField="label"
                                valueField="value"
                                placeholder={'Select Customer'}
                                value={customerValue}
                                onChange={item => setCustomerValue(item.value)}
                            />
                        </View>
                    </View>

                    {/* Section 2: Personal & Time */}
                    <View style={styles.formCard}>
                        <View style={styles.inputGroup}>
                            <View style={styles.labelRow}>
                                <MC name="account-tie-outline" size={18} color="#18b5a1" />
                                <Text style={styles.textLabel}>Salesman*</Text>
                            </View>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={wareHouseList}
                                labelField="label"
                                valueField="value"
                                placeholder={'Select Salesman'}
                                value={salesmanValue}
                                onChange={item => setSalesmanValue(item.value)}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.labelRow}>
                                <MC name="calendar-month-outline" size={18} color="#18b5a1" />
                                <Text style={styles.textLabel}>Order Date*</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setOpen(true)}
                                style={styles.datePickerContainer}
                            >
                                <Text style={styles.dateText}>{date.toDateString()}</Text>
                                <MC name='chevron-down' size={20} color={'#9e9595'} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Next Button Section */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { navigation.navigate('SelectOrderList') }}
                        style={styles.nextBtnWrapper}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={CColors.gradient}
                            style={styles.nextBtn}
                        >
                            <Text style={styles.nextBtnText}>Next Step</Text>
                            <MaterialIcons name="arrow-forward" size={20} color="#fff" />
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <DatePicker
                modal
                open={open}
                date={date}
                mode='date'
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => setOpen(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: { padding: 20 },
    formCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    inputGroup: { marginBottom: 15 },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    textLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#444',
        marginLeft: 8
    },
    dropdown: {
        height: 50,
        borderColor: '#E8ECEF',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#FBFBFC',
    },
    placeholderStyle: { fontSize: 14, color: '#A0AABF' },
    selectedTextStyle: { fontSize: 15, color: '#333' },

    createNewBtn: {
        flexDirection: 'row',
        backgroundColor: '#1fbba6',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        alignItems: 'center',
    },
    createNewText: { color: '#fff', fontSize: 11, fontWeight: 'bold', marginLeft: 4 },

    datePickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderColor: '#E8ECEF',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#FBFBFC',
    },
    dateText: { fontSize: 15, color: '#333' },

    nextBtnWrapper: { marginTop: 10 },
    nextBtn: {
        height: 55,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight: 10 },
});

export default CreateOrder;