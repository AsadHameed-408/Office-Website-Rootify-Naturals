

import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './AllOrdersStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import DatePicker from 'react-native-date-picker'
import { isTemplateMiddle } from 'typescript'
import DetailViewModal from './orderDetailView/OrderdetailView'

const AllOrders = () => {
    const [filterVisible, setFilterVisible] = useState(false)
    const [detailVisible, setDetailVisible] = useState(false)
    const [DetrailData, setDetailData] = useState()

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
        }
    ];
    return (

        <View style={{ flex: 1 }} >
            <BackArrowAppBar title={'All Orders'} isAddButtonVisible={true} addNavigationRouteName={'add-FinancialExpense'} />
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
                                setDetailData(item)
                                setDetailVisible(true)
                            }} activeOpacity={0.7} style={styles.wrhCard}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        {/* Details Section */}
                                        <View style={styles.detailsContainer}>
                                            {/*  */}
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View>
                                                    <Text style={[styles.labelText, { color: '#3f5189' }]}>{item.o}</Text>
                                                    <Text style={[styles.labelText, { color: '#18b5a1' }]}>{item.orderId}</Text>
                                                </View>
                                                <Text style={[styles.labelText, { color: '#555' }]}>{item.date}</Text>
                                            </View>
                                            {/* horizontal divider */}
                                            <View style={styles.divider} />
                                            {/*  */}
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Text style={[styles.labelText, { fontSize: 16 }]}>{item.customerName}</Text>
                                                <View>
                                                    <Text style={[styles.labelText, { fontSize: 16, alignSelf: 'flex-end' }]}>{item.total}</Text>
                                                    <Text style={[styles.labelText, { color: item.finnancialStatus === 'Paid' ? '#18b5a1' : '#f7b84b', alignSelf: 'flex-end' }]}>{item.finnancialStatus}</Text>
                                                </View>
                                            </View>
                                            {/* horizontal divider */}
                                            <View style={styles.divider} />
                                            {/*  */}
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <MaterialCommunityIcons name='map-marker-outline' size={20} color={'#555'} />
                                                    <Text style={[styles.labelText, { color: '#555' }]}>{item.city}</Text>
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
            <DetailViewModal data={DetrailData} onClose={() => { setDetailVisible(false) }} visible={detailVisible} />
        </View>

    )
}

export default AllOrders