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
import { Dropdown } from 'react-native-element-dropdown'; // Ensure this is installed
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './SupplierStyle'

import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar';

const Suppliers = () => {
    const navigation = useNavigation();

    // States for Filters
    const [filterVisible, setFilterVisible] = useState(false);
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [dateValue, setDateValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [isDateFocus, setDateFocus] = useState(false);

    const supplierData = [
        {
            id: 1,
            name: 'Main Distribution Center South Lahore Branch',
            supplierType: 'Primary Supplier',
            address: '123 Industrial Way, North Phase near General Hospital, Sector D, Lahore, Punjab',
            city: 'Lahore',
            state: 'Punjab',
            phone: '+92 300 1234567',
            enteredBy: 'Muhammad Yaseen'
        },
        {
            id: 2,
            name: 'Awan & Sons',
            supplierType: 'Logistics Partner',
            address: 'Office #10 First Floor Shan Arcade Plaza Barket Market, Garden Town',
            city: 'Lahore',
            state: 'Punjab',
            phone: '+92 321 7654321',
            enteredBy: 'Admin'
        },
    ];

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL Traders', value: '2' },
        { label: 'Explore Traders', value: '3' },
    ];

    const datesSelect = [
        { label: 'Today', value: '1' },
        { label: 'This Week', value: '3' },
        { label: 'This Month', value: '4' },
    ];

    const renderSupplierCard = ({ item }) => (
        <View style={styles.wrhCard}>
            <View style={styles.cardMainContent}>
                <View style={styles.cardHeader}>
                    <View style={styles.iconCircle}>
                        <MaterialCommunityIcons name="office-building" size={22} color="#18b5a1" />
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                        <Text style={styles.supplierName}>{item.name}</Text>
                        <View style={styles.locationRow}>
                            <Text style={styles.locationText}>{item.city}, {item.state}</Text>
                            <View style={styles.dotSeparator} />
                            <Text style={styles.typeText}>{item.supplierType}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardBody}>
                    <View style={styles.infoRow}>
                        <Feather name="phone" size={12} color="#18b5a1" />
                        <Text style={styles.infoText}>{item.phone}</Text>
                    </View>

                    <View style={[styles.infoRow, { alignItems: 'flex-start' }]}>
                        <Feather name="map-pin" size={12} color="#18b5a1" style={{ marginTop: 2 }} />
                        <Text style={styles.addressText}>{item.address}</Text>
                    </View>
                </View>

                <View style={styles.cardFooter}>
                    <Text style={styles.enteredByText}>Added by: {item.enteredBy}</Text>
                </View>
            </View>

            {/* Warehouse Style Actions */}
            <View style={styles.actionSection}>
                <TouchableOpacity style={styles.actionBtn} onPress={() => console.log('Edit', item.id)}>
                    <Feather name="edit-3" size={18} color="#18b5a1" />
                </TouchableOpacity>
                <View style={styles.actionDivider} />
                <TouchableOpacity style={styles.actionBtn} onPress={() => console.log('Delete', item.id)}>
                    <Feather name="trash-2" size={18} color="#FF4D4D" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.wrhMainContainer}>
            <BackArrowAppBar title={'Suppliers'} isAddButtonVisible={true} addNavigationRouteName={'add-suppliers'} />

            {/* Search Section */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput placeholder="Search suppliers..." placeholderTextColor="#9e9595" style={styles.wrhInputField} />
                        <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)} style={styles.filterBtn}>
                            <MaterialCommunityIcons name="tune" size={20} color={filterVisible ? '#18b5a1' : '#9e9595'} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.wrhSearchBtn}>
                        <Feather name={'search'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Filter Dropdowns */}
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

            <FlatList
                data={supplierData}
                renderItem={renderSupplierCard}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listPadding}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};


export default Suppliers;