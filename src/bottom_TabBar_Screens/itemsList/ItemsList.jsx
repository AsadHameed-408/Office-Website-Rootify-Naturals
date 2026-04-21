import { View, Text, TouchableOpacity, TextInput, FlatList, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './ItemsListStyle'

const ItemsList = () => {
    const navigation = useNavigation();
    const [filterVisible, setFilterVisible] = useState(false);
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [dateValue, setDateValue] = useState(null);

    const itemsData = [
        { id: '1', sku: 'SKU-001', name: '12 12 sale update', brand: 'Brand', category: 'Laptop', price: 'PKR 600', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s' },
        { id: '2', sku: 'AAA', name: '11 11 sale', brand: 'Brand', category: 'Laptop', price: 'PKR 600', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s' },
        { id: '3', sku: 'VC00090', name: 'VIROZEN | Mens Solution', variant: '3 X Monthly Packs', brand: 'MEN\'S CURE', category: 'Health', price: 'PKR 8,999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s' },
    ];

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'Explore Traders', value: '3' },
    ];

    const datesSelect = [
        { label: 'Today', value: '1' },
        { label: 'This Month', value: '4' },
    ];

    // Filter Section UI
    const renderFilters = () => (
        <View style={styles.filterSection}>
            <View style={styles.dropdownWrapper}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={wareHouseList}
                    labelField="label"
                    valueField="value"
                    placeholder="Warehouse"
                    value={wareHouseValue}
                    onChange={item => setWareHouseValue(item.value)}
                />
            </View>
            <View style={styles.dropdownWrapper}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={datesSelect}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Date"
                    value={dateValue}
                    onChange={item => setDateValue(item.value)}
                />
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
            <BackArrowAppBar title={'Items List'} addNavigationRouteName={'add-ItemsListScreen'} isAddButtonVisible={true} />

            <FlatList
                data={itemsData}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        {/* Search Bar */}
                        <View style={styles.searchWrapper}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Search items..."
                                    placeholderTextColor="#9e9595"
                                    style={styles.inputField}
                                />
                                <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)}>
                                    <MaterialCommunityIcons name='filter-menu-outline' size={22} color='#18b5a1' style={{ marginRight: 10 }} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.searchBtn}>
                                <Feather name='search' size={20} color='#fff' />
                            </TouchableOpacity>
                        </View>

                        {/* Dropdowns */}
                        {filterVisible && renderFilters()}
                    </>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.9} style={styles.card}>
                        <View style={styles.cardMain}>
                            <Image source={{ uri: item.image }} style={styles.productImage} />
                            <View style={styles.details}>
                                <View style={styles.titleRow}>
                                    <Text numberOfLines={1} style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.skuText}>{item.sku}</Text>
                                </View>

                                <View style={styles.infoRow}>
                                    <Text style={styles.infoLabel}>Category:</Text>
                                    <Text style={styles.infoValue}>{item.category}</Text>
                                </View>
                                <View style={styles.infoRow}>
                                    <Text style={styles.infoLabel}>Brand:</Text>
                                    <Text style={styles.infoValue}>{item.brand}</Text>
                                </View>
                                <Text style={styles.priceText}>{item.price}</Text>
                            </View>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.cardActions}>
                            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#e8f7f5' }]}>
                                <MaterialCommunityIcons name="pencil" size={18} color="#18b5a1" />
                                <Text style={{ color: '#18b5a1', marginLeft: 5, fontWeight: '600' }}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#fff0f0' }]}>
                                <MaterialCommunityIcons name="trash-can" size={18} color="#ff4d4d" />
                                <Text style={{ color: '#ff4d4d', marginLeft: 5, fontWeight: '600' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
                ListFooterComponent={<View style={{ height: 20 }} />}
            />
        </View>
    )
}



export default ItemsList;