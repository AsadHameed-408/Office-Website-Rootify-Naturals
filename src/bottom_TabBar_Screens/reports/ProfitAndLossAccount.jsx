

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, } from 'react-native';
import styles from './ProfitAndLossAccountStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

const ProfitAndLossAccount = () => {
    // date picker
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    // warehouse selection
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    // Data Structure
    const summaryData = [
        { label: 'NET SALES', value: '$0.00', color: '#10b981' },
        { label: 'GROSS PROFIT', value: '$0.00', color: '#0ea5e9' },
        { label: 'NET PROFIT', value: '$0.00', color: '#059669' },
    ];
    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];

    const DataRow = ({ label, value, isNegative }) => (
        <View style={styles.dataRow}>
            <Text style={styles.rowLabel}>{label}</Text>
            <Text style={[styles.rowValue, isNegative && { color: '#ef4444' }]}>
                {isNegative ? `-$${value}` : `$${value}`}
            </Text>
        </View>
    );

    return (
        <View style={styles.box}>
            <BackArrowAppBar title={'P&L Statement '} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>


                {/* Dropdowns Placeholder */}
                <View style={styles.dropdownContainer}>
                    <Dropdown
                        style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue', marginRight: 5 }]}
                        placeholderStyle={styles.dropdownText}
                        selectedTextStyle={styles.dropdownText}
                        iconStyle={styles.iconStyle}
                        data={wareHouseList}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isWareHouseFocus ? 'warehouse' : ''}
                        value={wareHouseValue}
                        onFocus={() => setWareHouseFocus(true)}
                        onBlur={() => setWareHouseFocus(false)}
                        onChange={item => {
                            setWareHouseValue(item.value);
                            setWareHouseFocus(false);
                        }}
                    />
                    {/* Date Piceker */}
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode='date'
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <TouchableOpacity style={styles.dropdown}>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => setOpen(true)}
                            style={[
                                {
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    flex: 1
                                }
                            ]}>
                            <View>
                                <Text style={styles.dropdownText}>{date.toDateString()}</Text>
                            </View>
                            <View>
                                <MaterialCommunityIcons name='calendar-outline' size={24} color={'#D9D9D9'} />
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                {/* Overall Summary Card */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Overall Summary</Text>
                    <View style={styles.summaryRow}>
                        {summaryData.map((item, index) => (
                            <View key={index} style={styles.summaryItem}>
                                <Text style={styles.summaryLabel}>{item.label}</Text>
                                <Text style={[styles.summaryValue, { color: item.color }]}>{item.value}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Sales Details Section */}
                <View style={[styles.sectionCard, { borderTopColor: '#2dd4bf' }]}>
                    <View style={[styles.sectionHeader, { backgroundColor: '#f0fdfa' }]}>
                        <Text style={styles.sectionHeaderText}>Sales Details</Text>
                    </View>
                    <DataRow label="FULFILLED" value="0.00" />
                    <DataRow label="UNFULFILLED" value="0.00" />
                </View>

                {/* Goods Details Section */}
                <View style={[styles.sectionCard, { borderTopColor: '#f87171' }]}>
                    <View style={[styles.sectionHeader, { backgroundColor: '#fef2f2' }]}>
                        <Text style={styles.sectionHeaderText}>Goods Details</Text>
                    </View>
                    <DataRow label="RETURNED" value="0.00" isNegative />
                    <DataRow label="CANCELLED" value="0.00" isNegative />
                </View>

                {/* Cost of Goods Section */}
                <View style={[styles.sectionCard, { borderTopColor: '#fbbf24' }]}>
                    <View style={[styles.sectionHeader, { backgroundColor: '#fffbeb' }]}>
                        <Text style={styles.sectionHeaderText}>Cost of Goods Details</Text>
                    </View>
                    <DataRow label="COST OF GOODS" value="0.00" />
                    <DataRow label="TOTAL COST OF GOODS SOLD" value="0.00" />
                </View>
            </ScrollView>
            {/* Footer Buttons */}
            <View style={styles.scrollContent}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#3b82f6' }]}>
                        <MaterialCommunityIcons name="file-excel" size={20} color="white" />
                        <Text style={styles.buttonText}>Export to Excel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#18b5a1' }]}>
                        <MaterialCommunityIcons name="file-pdf-box" size={20} color="white" />
                        <Text style={styles.buttonText}>Export to PDF</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProfitAndLossAccount;