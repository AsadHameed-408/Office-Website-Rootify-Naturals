import { View, Text, TouchableOpacity, TextInput, FlatList, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './ChartOfAccountStyle'

const ChartOfAccount = () => {
    const navigation = useNavigation();
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [dateValue, setDateValue] = useState(null);
    const [isDateFocus, setDateFocus] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);

    // Full Data List
    const [units, setUnits] = useState([
        {
            id: 1,
            name: 'Other Expenses',
            warehouse: 'EL',
            description: 'CASH IN BANK',
            amount: '2,600.00',
            type: 'Asset',
            isCash: 'YES',
            paymentMode: 'Cash',
            status: true
        },
        {
            id: 2,
            name: 'Explore Logics IT Solutions',
            warehouse: 'Explore Traders',
            description: 'CASH IN BANK',
            amount: '2,600.00',
            type: 'Income/Revenue',
            isCash: 'NO',
            paymentMode: 'Online',
            status: false
        },
        {
            id: 3,
            name: 'Other Expenses',
            warehouse: 'Falak Traders',
            description: 'CASH IN BANK',
            amount: '2,600.00',
            type: 'Liability',
            isCash: 'NO',
            paymentMode: 'Online',
            status: false
        },
    ]);

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];

    const datesSelect = [
        { label: 'Today', value: '1' },
        { label: 'Yesterday', value: '2' },
        { label: 'This Week', value: '3' },
        { label: 'This Month', value: '4' },
        { label: 'Last Month', value: '5' },
        { label: 'Custom Range', value: '6' },
    ];

    const toggleStatus = (id) => {
        setUnits(prev => prev.map(item => item.id === id ? { ...item, status: !item.status } : item));
    };

    return (
        <View style={styles.mainContainer}>
            {/* App Bar */}
            <BackArrowAppBar
                title={'Chart Of Accounts'}
                addNavigationRouteName={'add-ChartOfAccounts'}
                isAddButtonVisible={true}
            />

            {/* Search Field Wrapper */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Type here for search..."
                            placeholderTextColor="#9e9595"
                            style={styles.wrhInputField}
                        />
                        <View style={styles.wrhVerticalDivider} />
                        <TouchableOpacity activeOpacity={0.7} onPress={() => setFilterVisible(!filterVisible)}>
                            <MaterialCommunityIcons
                                name={filterVisible ? 'filter' : 'filter-outline'}
                                size={24}
                                color={filterVisible ? '#18b5a1' : '#9e9595'}
                                style={styles.wrhFilterIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.wrhSearchBtn} activeOpacity={0.8}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Dropdown Filters (Visible on Toggle) */}
            {filterVisible && (
                <View style={styles.filterRow}>
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            style={[styles.dropdown, isWareHouseFocus && { borderColor: '#18b5a1' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={wareHouseList}
                            labelField="label"
                            valueField="value"
                            placeholder="Warehouse"
                            value={wareHouseValue}
                            onFocus={() => setWareHouseFocus(true)}
                            onBlur={() => setWareHouseFocus(false)}
                            onChange={item => {
                                setWareHouseValue(item.value);
                                setWareHouseFocus(false);
                            }}
                        />
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            style={[styles.dropdown, isDateFocus && { borderColor: '#18b5a1' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={datesSelect}
                            labelField="label"
                            valueField="value"
                            placeholder="Date Range"
                            value={dateValue}
                            onFocus={() => setDateFocus(true)}
                            onBlur={() => setDateFocus(false)}
                            onChange={item => {
                                setDateValue(item.value);
                                setDateFocus(false);
                            }}
                        />
                    </View>
                </View>
            )}

            {/* Account List */}
            <FlatList
                data={units}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.wrhCard}>
                        {/* 1. Header: Name & Type */}
                        <View style={styles.cardHeader}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.cardTitle}>{item.name}</Text>
                                <Text style={styles.cardWarehouse}>{item.warehouse}</Text>
                            </View>
                            <View style={[styles.typeBadge, { backgroundColor: '#e8edf5' }]}>
                                <Text style={styles.typeText}>{item.type}</Text>
                            </View>
                        </View>

                        {/* 2. Middle Row: Is Cash, Mode, Status Toggle */}
                        <View style={styles.detailsGrid}>
                            <View style={styles.gridItem}>
                                <Text style={styles.gridLabel}>IS CASH</Text>
                                <Text style={styles.gridValue}>{item.isCash}</Text>
                            </View>
                            <View style={styles.gridItem}>
                                <Text style={styles.gridLabel}>MODE</Text>
                                <Text style={styles.gridValue}>{item.paymentMode}</Text>
                            </View>
                            <View style={styles.gridItem}>
                                <Text style={styles.gridLabel}>STATUS</Text>
                                <View style={styles.statusRow}>
                                    <Switch
                                        trackColor={{ false: '#d1d1d1', true: '#a4e4dc' }}
                                        thumbColor={item.status ? '#18b5a1' : '#f4f3f4'}
                                        value={item.status}
                                        onValueChange={() => toggleStatus(item.id)}
                                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginLeft: -8 }}
                                    />
                                    <Text style={[styles.statusText, { color: item.status ? '#18b5a1' : '#ff0000' }]}>
                                        {item.status ? 'Active' : 'Inactive'}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* 3. Description Section (Highlighted as requested) */}
                        <View style={styles.descriptionBox}>
                            <Text style={styles.gridLabel}>DESCRIPTION</Text>
                            <Text style={styles.descriptionText}>{item.description}</Text>
                        </View>

                        {/* 4. Bottom Row: Amount & Action Buttons */}
                        <View style={styles.cardFooter}>
                            <View>
                                <Text style={styles.gridLabel}>AMOUNT</Text>
                                <Text style={styles.amountText}>Rs {item.amount}</Text>
                            </View>
                            <View style={styles.actionButtons}>
                                <TouchableOpacity style={styles.editBtn}>
                                    <MaterialCommunityIcons name={'pencil-outline'} size={18} color={'white'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteBtn}>
                                    <MaterialCommunityIcons name={'trash-can-outline'} size={18} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}


export default ChartOfAccount;