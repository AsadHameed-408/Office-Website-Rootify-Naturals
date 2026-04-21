import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../suppliers/SupplierStyle'

// Custom Widgets (Assumed path based on your code)
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar';

const SuppliersBottomBar = () => {
    const navigation = useNavigation();
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [dateValue, setDateValue] = useState(null);
    const [isDateFocus, setDateFocus] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);

    const warehouseData = [
        {
            id: 1,
            name: 'Main Distribution Center',
            supplierType: 'Primary Supplier',
            address: '123 Industrial Way, North Phase, Lahore',
            contact: 'John Doe',
            phone: '+92 300 1234567',
            email: 'john.doe@example.com',
            city: 'Lahore',
        },
        {
            id: 2,
            name: 'Awan & Sons Warehouse',
            supplierType: 'Logistics Partner',
            address: 'Garden, office #10 First Floor Shan Arcade Plaza Barket Market, New Town, Lahore',
            contact: 'Jane Doe',
            phone: '+92 321 7654321',
            email: 'jane.doe@example.com',
            city: 'Lahore',
        },
        {
            id: 3,
            name: 'Central Hub Tech',
            supplierType: 'Local Vendor',
            address: 'Peco Road, Township Area, Block D',
            contact: 'Ali Khan',
            phone: '+92 333 9876543',
            email: 'ali.tech@example.com',
            city: 'Lahore',
        },
        // ... add more as needed
    ];

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL Traders', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
    ];

    const datesSelect = [
        { label: 'Today', value: '1' },
        { label: 'This Week', value: '3' },
        { label: 'This Month', value: '4' },
        { label: 'Custom Range', value: '6' },
    ];

    const renderSupplierCard = ({ item }) => (
        <TouchableOpacity activeOpacity={0.9} style={styles.wrhCard}>
            <View style={styles.cardHeader}>
                <View style={styles.iconCircle}>
                    <MaterialCommunityIcons name="office-building" size={24} color="#18b5a1" />
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.supplierName}>{item.name}</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{item.supplierType}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardDivider} />

            <View style={styles.cardBody}>
                <View style={styles.infoRow}>
                    <Feather name="phone" size={14} color="#666" />
                    <Text style={styles.infoText}>{item.phone}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Feather name="map-pin" size={14} color="#666" />
                    <Text style={styles.infoText} numberOfLines={1}>{item.city}</Text>
                </View>
                <View style={[styles.infoRow, { alignItems: 'flex-start' }]}>
                    <MaterialCommunityIcons name="map-marker-radius-outline" size={16} color="#666" />
                    <Text style={styles.addressText} numberOfLines={2}>{item.address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.wrhMainContainer}>
            <BackArrowAppBar
                isBackarrowVisible={false}
                title={'Suppliers'}
                isAddButtonVisible={true}
                addNavigationRouteName={'add-suppliers'}
            />

            {/* Search Section */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Search suppliers..."
                            placeholderTextColor="#9e9595"
                            style={styles.wrhInputField}
                        />
                        <View style={styles.wrhVerticalDivider} />
                        <TouchableOpacity
                            onPress={() => setFilterVisible(!filterVisible)}
                            style={styles.filterBtn}
                        >
                            <MaterialCommunityIcons
                                name={filterVisible ? 'filter' : 'filter-outline'}
                                size={22}
                                color={filterVisible ? '#18b5a1' : '#9e9595'}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.wrhSearchBtn} activeOpacity={0.8}>
                        <Feather name={'search'} size={22} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Dropdown Filters */}
            {filterVisible && (
                <View style={styles.filterSection}>
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            style={[styles.dropdown, isWareHouseFocus && { borderColor: '#18b5a1' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={wareHouseList}
                            maxHeight={300}
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
                            maxHeight={300}
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

            {/* Main List */}
            <FlatList
                data={warehouseData}
                renderItem={renderSupplierCard}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listPadding}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 20 }} />}
            />
            <View style={{ height: 100 }} />
        </View>
    );
};


export default SuppliersBottomBar;