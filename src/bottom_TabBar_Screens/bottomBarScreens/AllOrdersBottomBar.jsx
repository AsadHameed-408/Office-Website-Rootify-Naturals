

import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from '../orders/AllOrdersStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import DatePicker from 'react-native-date-picker'
import { isTemplateMiddle } from 'typescript'
import DetailViewModal from '../orders/orderDetailView/OrderdetailView'
import { Dropdown } from 'react-native-element-dropdown'
import { useNavigation } from '@react-navigation/native'

const AllOrdersBottomBar = () => {
    const navigation = useNavigation();
    const [filterVisible, setFilterVisible] = useState(false)
    const [detailVisible, setDetailVisible] = useState(false)
    // dropdown warehouse
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    // dropdown duration
    const [durationValue, setDurationValue] = useState(null);
    const [isDurationFocus, setDurationFocus] = useState(false);
    // dropdown salesmen
    const [paymentValue, setPaymentStatusValue] = useState(null);
    const [isPaymentStatusFocus, setPaymentStatusFocus] = useState(false);
    // dropdown fulfillment status
    const [fulFillmentValue, setFulFillMentValue] = useState(null);
    const [isFulFillMentFocus, setFulFillMentFocus] = useState(false);
    // dropdown searchby
    const [searchByValue, setSearchByValue] = useState(null);
    const [isSearchByFocus, setSearchByFocus] = useState(false);
    // picked item from list
    const [DetrailData, setDetailData] = useState([])

    const AllOrders = [
        {
            id: "1",
            order: 'Shopify Store-411',
            order_id: "#ORD-9871",
            customer_name: "Ahmad Khan",
            phone: "+92 300 1234567",
            city_name: "Lahore",
            address: "Flat 4, Gulberg III, Lahore, Pakistan",
            product_info: "2x Wireless Headphones, 1x Charging Cable",
            discount: "50.00",
            total: "4550.00",
            financial_status: "Paid",
            status: "Delivered",
            salesman: "Ali Raza",
            created_at: "12 Oct, 2023 | 11:30 AM",
        },
        {
            id: "2",
            order: 'Shopify Store-412',
            order_id: "#ORD-9872",
            customer_name: "Sara Malik",
            phone: "+92 321 7654321",
            city_name: "Karachi",
            address: "House 12, DHA Phase 5, Karachi",
            product_info: "1x Mechanical Keyboard",
            discount: "0.00",
            total: "8200.00",
            financial_status: "Unpaid",
            status: "Pending",
            salesman: "Usman Shah",
            created_at: "14 Oct, 2023 | 02:15 PM",
        },
        {
            id: "3",
            order: 'Shopify Store-413',
            order_id: "#ORD-9873",
            customer_name: "Zubair Ahmed",
            phone: "+92 333 4455667",
            city_name: "Islamabad",
            address: "Sector F-10/2, Street 15, Islamabad",
            product_info: "3x Laptop Stand",
            discount: "120.00",
            total: "3600.00",
            financial_status: "Partial",
            status: "Shipped",
            salesman: "Ali Raza",
            created_at: "15 Oct, 2023 | 09:45 AM",
        },
        {
            id: "4",
            order: 'Shopify Store-413',
            order_id: "#ORD-9873",
            customer_name: "Zubair Ahmed",
            phone: "+92 333 4455667",
            city_name: "Islamabad",
            address: "Sector F-10/2, Street 15, Islamabad",
            product_info: "3x Laptop Stand",
            discount: "120.00",
            total: "3600.00",
            financial_status: "Partial",
            status: "Shipped",
            salesman: "Ali Raza",
            created_at: "15 Oct, 2023 | 09:45 AM",
        }
    ];
    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];

    const durationList = [
        { label: 'Today', value: '1' },
        { label: 'Yesterday', value: '2' },
        { label: 'This Week', value: '3' },
        { label: 'This Month', value: '4' },
        { label: 'Last Month', value: '5' },
        { label: 'Custom Range', value: '6' },
    ];

    const paymentStatusList = [
        { label: 'Today', value: '1' },
        { label: 'Yesterday', value: '2' },
        { label: 'This Week', value: '3' },
        { label: 'This Month', value: '4' },
        { label: 'Last Month', value: '5' },
        { label: 'Custom Range', value: '6' },
    ];
    const fulFillMentStatusList = [
        { label: 'Today', value: '1' },
        { label: 'Yesterday', value: '2' },
        { label: 'This Week', value: '3' },
        { label: 'This Month', value: '4' },
        { label: 'Last Month', value: '5' },
        { label: 'Custom Range', value: '6' },
    ];
    const searchByList = [
        { label: 'Today', value: '1' },
        { label: 'Yesterday', value: '2' },
        { label: 'This Week', value: '3' },
        { label: 'This Month', value: '4' },
        { label: 'Last Month', value: '5' },
        { label: 'Custom Range', value: '6' },
    ];
    return (

        <View style={{ flex: 1 }} >
            <BackArrowAppBar isBackarrowVisible={false} title={'All Orders'} isAddButtonVisible={true} addNavigationRouteName={'CreateOrderScreen'} isDownloadButtonVisible={true} />
            {/* search  */}
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
                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Dropdown */}
            {filterVisible &&
                <View>
                    <View style={[styles.body, { flexDirection: 'row' }]}>
                        <View style={[styles.container,]}>
                            <Dropdown
                                style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue', marginRight: 5 }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={wareHouseList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isWareHouseFocus ? 'warehouse' : ''}
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
                        <View style={[styles.container,]}>
                            <Dropdown
                                style={[styles.dropdown, isDurationFocus && { borderColor: 'blue', marginLeft: 5 }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={durationList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isDurationFocus ? 'Duration' : ''}
                                searchPlaceholder="Search..."
                                value={durationValue}
                                onFocus={() => setDurationFocus(true)}
                                onBlur={() => setDurationFocus(false)}
                                onChange={item => {
                                    setDurationValue(item.value);
                                    setDurationFocus(false);
                                }}
                            />
                        </View>
                    </View>
                    <View style={[styles.body, { flexDirection: 'row' }]}>
                        <View style={styles.container}>
                            <Dropdown
                                style={[styles.dropdown, isFulFillMentFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={fulFillMentStatusList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFulFillMentFocus ? 'warehouse' : ''}
                                searchPlaceholder="Search..."
                                value={fulFillmentValue}
                                onFocus={() => setFulFillMentFocus(true)}
                                onBlur={() => setFulFillMentFocus(false)}
                                onChange={item => {
                                    setFulFillMentValue(item.value);
                                    setFulFillMentFocus(false);
                                }}
                            />
                        </View>
                        <View style={styles.container}>
                            <Dropdown
                                style={[styles.dropdown, isPaymentStatusFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={paymentStatusList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isPaymentStatusFocus ? 'Duration' : ''}
                                searchPlaceholder="Search..."
                                value={paymentValue}
                                onFocus={() => setPaymentStatusFocus(true)}
                                onBlur={() => setPaymentStatusFocus(false)}
                                onChange={item => {
                                    setPaymentStatusValue(item.value);
                                    setPaymentStatusFocus(false);
                                }}
                            />
                        </View>
                    </View>
                    <View style={[styles.body, { flexDirection: 'row' }]}>
                        <View style={styles.container}>
                            <Dropdown
                                style={[styles.dropdown, isSearchByFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={searchByList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isSearchByFocus ? 'warehouse' : ''}
                                searchPlaceholder="Search..."
                                value={searchByValue}
                                onFocus={() => setSearchByFocus(true)}
                                onBlur={() => setSearchByFocus(false)}
                                onChange={item => {
                                    setSearchByValue(item.value);
                                    setSearchByFocus(false);
                                }}
                            />
                        </View>

                    </View>
                </View>
            }
            {/* Item Cart */}
            <ScrollView>
                <View>
                    <FlatList
                        data={AllOrders}
                        scrollEnabled={false}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('DetailViewModal', { data: item })
                            }} activeOpacity={0.7} style={styles.wrhCard}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        {/* Details Section */}
                                        <View style={styles.detailsContainer}>
                                            {/*  */}
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View>
                                                    <TouchableOpacity activeOpacity={0.4} onPress={() => {
                                                        navigation.navigate('ShopifyCardDetailView')
                                                    }}>
                                                        <Text style={[styles.labelText, { color: '#3f5189' }]}>{item.order}</Text>
                                                        <Text style={[styles.labelText, { color: '#18b5a1' }]}>{item.order_id}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <Text style={[styles.labelText, { color: '#555' }]}>{item.created_at}</Text>
                                            </View>
                                            {/* horizontal divider */}
                                            <View style={styles.divider} />
                                            {/*  */}
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Text style={[styles.labelText, { fontSize: 16 }]}>{item.customer_name}</Text>
                                                <View>
                                                    <Text style={[styles.labelText, { fontSize: 16, alignSelf: 'flex-end' }]}>{item.total}</Text>
                                                    <Text style={[styles.labelText, { color: item.financial_status === 'Paid' ? '#18b5a1' : '#f7b84b', alignSelf: 'flex-end' }]}>{item.financial_status}</Text>
                                                </View>
                                            </View>
                                            {/* horizontal divider */}
                                            <View style={styles.divider} />
                                            {/*  */}
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <MaterialCommunityIcons name='map-marker-outline' size={20} color={'#555'} />
                                                    <Text style={[styles.labelText, { color: '#555' }]}>{item.city_name}</Text>
                                                </View>
                                                <View style={{ padding: 5, backgroundColor: item.status === 'Delivered' ? '#18b5a1' : item.status === 'Pending' ? '#f7b84b' : isTemplateMiddle.status === 'Cancel' ? '#f06548' : 'blue', borderRadius: 8 }}>
                                                    <Text style={[styles.labelText, { color: '#fff' }]}>{item.status}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
            <View style={{ height: 110 }} />
        </View>

    )
}

export default AllOrdersBottomBar
