

import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './ItemsListStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const ItemsList = () => {
    const navigation = useNavigation();
    // dropdown
    const [filterVisible, setFilterVisible] = useState(false);
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [dateValue, setDateValue] = useState(null);
    const [isDateFocus, setDateFocus] = useState(false);
    // -----------
    const itemsData = [
        {
            id: '1', sku: '', name: '12 12 sale update', variant: '', brand: 'Brand', category: 'Laptop', price: 'PKR 600', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
        {
            id: '2', sku: 'AAA', name: '11 11 sale', variant: '', brand: 'Brand', category: 'Laptop', price: 'PKR 600', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
        {
            id: '3', sku: 'VC00090', name: 'VIROZEN | Permanent Solution For Mens', variant: '3 X Monthly Packs', brand: 'MEN\'S CURE', category: 'Health', price: 'PKR 8,999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
        {
            id: '4', sku: 'VC00060', name: 'VIROZEN | Permanent Solution For Mens', variant: '2 X Monthly Packs', brand: 'MEN\'S CURE', category: 'Health', price: 'PKR 6,499', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
    ];
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

    return (
        <View style={{ flex: 1 }}>
            <BackArrowAppBar title={'Items List'} addNavigationRouteName={'add-ItemsListScreen'} isAddButtonVisible={true} />
            {/* search field */}

            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Type here for search..."
                            placeholderTextColor="#9e9595"
                            style={styles.wrhInputField}
                        />
                        <View style={styles.wrhVerticalDivider} />
                        <TouchableOpacity activeOpacity={0.7} onPress={() => {
                            setFilterVisible(!filterVisible)
                        }}>
                            <MaterialCommunityIcons
                                name={'filter-outline'}
                                size={24}
                                color={'#9e9595'}
                                style={styles.wrhFilterIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.wrhAddBtn} activeOpacity={0.8} onPress={() => {
                        // navigation.navigate('add-ItemsListScreen')
                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* dropdown */}
            {
                filterVisible && <View style={[styles.body, { flexDirection: 'row' }]}>
                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={wareHouseList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isWareHouseFocus ? wareHouseList[0].label : ''}
                            searchPlaceholder="Search..."
                            value={wareHouseValue}
                            onFocus={() => setWareHouseFocus(true)}
                            onBlur={() => setWareHouseFocus(false)}
                            onChange={item => {
                                setWareHouseValue(item.value);
                                setWareHouseFocus(false);
                            }}
                        />
                    </View>
                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown, isDateFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={datesSelect}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isDateFocus ? datesSelect[0].label : ''}
                            searchPlaceholder="Search..."
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
            }
            <ScrollView>
                {/* store list */}
                <View style={{ marginBottom: 40 }}>
                    <FlatList
                        data={itemsData}
                        contentContainerStyle={styles.wrhListContent}
                        scrollEnabled={false}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.7} style={styles.wrhCard}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        {/* Image */}
                                        <View style={styles.imageWrapper}>
                                            <Image
                                                source={{ uri: item.image }}
                                                style={styles.productImage}
                                                resizeMode='cover'
                                            />
                                        </View>
                                        {/* Details Section */}
                                        <View style={styles.detailsContainer}>
                                            {/* Name and SKU */}
                                            <View style={styles.row}>
                                                <View style={{ width: '75%', }}>
                                                    <Text style={styles.itemName}>{item.name}</Text>
                                                </View>
                                                <Text style={styles.itemSku}>{item.sku}</Text>
                                            </View>

                                            {/* Category */}
                                            <View style={styles.row}>
                                                <Text style={styles.labelText}>Category</Text>
                                                <Text style={styles.valueText}>{item.category}</Text>
                                            </View>
                                            {/* Brand */}
                                            <View style={styles.row}>
                                                <Text style={styles.labelText}>Brand</Text>
                                                <Text style={styles.valueText}>{item.brand}</Text>
                                            </View>
                                            {/* Price */}
                                            <View style={styles.row}>
                                                <Text style={styles.labelText}>Price</Text>
                                                <Text style={styles.valueText}>{item.price}</Text>
                                            </View>
                                        </View>


                                    </View>
                                    {/* horizontal divider */}
                                    <View style={styles.divider} />
                                    {/* bottom */}
                                    <View style={styles.bottomContainer}>
                                        <View style={[styles.bottomBtn, { backgroundColor: '#18b5a1' }]}>
                                            <MaterialCommunityIcons name={'pencil-outline'} size={20} color={'white'} />
                                        </View>
                                        <View style={[styles.bottomBtn, { backgroundColor: '#ff0000', }]}>
                                            <MaterialCommunityIcons name={'trash-can-outline'} size={20} color={'#fff'} />
                                        </View>
                                    </View>


                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default ItemsList