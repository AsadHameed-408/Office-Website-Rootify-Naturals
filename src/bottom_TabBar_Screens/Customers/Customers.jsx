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
import styles from './CustomersStyle'

import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar';

const Customers = () => {
    const navigation = useNavigation();

    // State Management
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [countryValue, setCountryValue] = useState(null);
    const [stateValue, setStateValue] = useState(null);
    const [cityValue, setCityValue] = useState(null);
    const [filterVisible, setFilterVisible] = useState(false);

    const customerData = [
        {
            id: 1,
            warehouse: 'Warehouse 2',
            customerName: 'Muhammad Yaseen',
            address: '123 Street, Phase 5, DHA, Lahore, Punjab, Pakistan',
            phone: '0300-1234567',
            email: 'yaseen@example.com',
            city: 'Lahore',
            state: 'Punjab',
        },
        {
            id: 2,
            warehouse: 'Explore Traders',
            customerName: 'Shoaib Ghuman',
            address: 'Garden, office #10 First Floor Shan Arcade Plaza Barket Market, New town, Lahore, 54000',
            phone: '0321-7654321',
            email: 'shoaib@gmail.com',
            city: 'Lahore',
            state: 'Punjab',
        }
    ];

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL Traders', value: '2' },
        { label: 'Explore Traders', value: '3' },
    ];

    const renderCustomerCard = ({ item }) => (
        <View style={styles.custCard}>
            {/* Left Content Section */}
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>{item.customerName.charAt(0)}</Text>
                    </View>
                    <View style={styles.headerInfo}>
                        <Text style={styles.customerName} numberOfLines={1}>{item.customerName}</Text>
                        <View style={styles.subHeaderRow}>
                            <Text style={styles.warehouseBadge}>{item.warehouse}</Text>
                            <View style={styles.dot} />
                            <Text style={styles.locationSmall}>{item.city}, {item.state}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardBody}>
                    <View style={styles.infoRow}>
                        <Feather name="phone" size={13} color="#18b5a1" />
                        <Text style={styles.infoText}>{item.phone}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Feather name="mail" size={13} color="#18b5a1" />
                        <Text style={styles.infoText}>{item.email}</Text>
                    </View>

                    <View style={[styles.infoRow, { alignItems: 'flex-start' }]}>
                        <Feather name="map-pin" size={13} color="#18b5a1" style={{ marginTop: 2 }} />
                        <Text style={styles.addressText}>{item.address}</Text>
                    </View>
                </View>
            </View>

            {/* Right Action Section */}
            <View style={styles.actionSection}>
                <TouchableOpacity style={styles.actionBtn} onPress={() => { }}>
                    <Feather name="edit-3" size={18} color="#18b5a1" />
                </TouchableOpacity>
                <View style={styles.actionDivider} />
                <TouchableOpacity style={styles.actionBtn} onPress={() => { }}>
                    <Feather name="trash-2" size={18} color="#FF4D4D" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <BackArrowAppBar title={'Customers'} isAddButtonVisible={true} addNavigationRouteName={'add-customers'} />

            <View style={styles.searchWrapper}>
                <View style={styles.searchRow}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Search customers..."
                            placeholderTextColor="#94a3b8"
                            style={styles.searchField}
                        />
                        <View style={styles.divider} />
                        <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)} style={styles.filterToggle}>
                            <MaterialCommunityIcons
                                name={filterVisible ? "tune-vertical" : "tune"}
                                size={22}
                                color={filterVisible ? "#18b5a1" : "#94a3b8"}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Feather name="search" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>

                {filterVisible && (
                    <View style={styles.filterPanel}>
                        <View style={styles.filterRow}>
                            <View style={styles.dropWrap}>
                                <Text style={styles.dropLabel}>Warehouse</Text>
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.dropPlaceholder}
                                    selectedTextStyle={styles.dropSelected}
                                    data={wareHouseList}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select"
                                    value={wareHouseValue}
                                    onChange={item => setWareHouseValue(item.value)}
                                />
                            </View>
                            <View style={styles.dropWrap}>
                                <Text style={styles.dropLabel}>City</Text>
                                <Dropdown
                                    style={styles.dropdown}
                                    placeholderStyle={styles.dropPlaceholder}
                                    selectedTextStyle={styles.dropSelected}
                                    data={[{ label: 'Lahore', value: '1' }]}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select"
                                    value={cityValue}
                                    onChange={item => setCityValue(item.value)}
                                />
                            </View>
                        </View>
                    </View>
                )}
            </View>

            <FlatList
                data={customerData}
                renderItem={renderCustomerCard}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 20, paddingTop: 5 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};


export default Customers;