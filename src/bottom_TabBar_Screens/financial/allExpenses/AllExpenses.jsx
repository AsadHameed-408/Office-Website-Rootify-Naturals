import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Dropdown } from 'react-native-element-dropdown'
import ImageViewerModal from '../../../widgets/imageViewModal/ImageViewModal'
import styles from './AllExpensesStyles'

const AllExpenses = () => {
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [catagoryValue, setCatagoryValue] = useState(null);
    const [isCatagoryFocus, setCatagoryFocus] = useState(false);
    const [durationValue, setDurationValue] = useState(null);
    const [isDurationFocus, setDurationFocus] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const [isModal2Visible, setModal2Visible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('https://pandapaperroll.com/wp-content/uploads/2020/05/Receipt-paper-types-1.jpg');

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];

    const catagoryList = [
        { label: 'All Categories', value: '1' },
        { label: 'Lunch & Tea', value: '2' },
        { label: 'Travel', value: '3' },
        { label: 'Office Supplies', value: '4' },
    ];

    const durationList = [
        { label: 'Today', value: '1' },
        { label: 'Yesterday', value: '2' },
        { label: 'This Week', value: '3' },
        { label: 'This Month', value: '4' },
        { label: 'Last Month', value: '5' },
        { label: 'Custom Range', value: '6' },
    ];

    const EXPENSE_DATA = [
        {
            id: '1',
            category: 'Test',
            paymentMode: 'Cash',
            amount: '600.00',
            comments: 'No comments',
            date: '2026-03-04',
            image: 'https://pandapaperroll.com/wp-content/uploads/2020/05/Receipt-paper-types-1.jpg'
        },
        {
            id: '2',
            category: 'Test',
            paymentMode: 'Cash',
            amount: '500.00',
            comments: 'Test',
            date: '2026-02-19',
            image: ''
        },
        {
            id: '3',
            category: 'Lunch & Tea Expenses',
            paymentMode: 'Online',
            amount: '500.00',
            comments: 'Lunch For Supplier Tasneem Haider from Faak',
            date: '2026-01-19',
            image: 'https://pandapaperroll.com/wp-content/uploads/2020/05/Receipt-paper-types-1.jpg'
        },
    ];

    const handleImagePreview = (imageUrl) => {
        setSelectedImage(imageUrl || 'https://pandapaperroll.com/wp-content/uploads/2020/05/Receipt-paper-types-1.jpg');
        setModal2Visible(true);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }} >
            <BackArrowAppBar
                title={'All Financial Expenses'}
                isAddButtonVisible={true}
                addNavigationRouteName={'add-FinancialExpense'}
                isDownloadButtonVisible={true}
            />

            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown, { marginBottom: 0, marginTop: 0, marginRight: 5 }, isCatagoryFocus && { borderColor: '#18b5a1' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={catagoryList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isCatagoryFocus ? 'Category' : ''}
                            value={catagoryValue}
                            onFocus={() => setCatagoryFocus(true)}
                            onBlur={() => setCatagoryFocus(false)}
                            onChange={item => {
                                setCatagoryValue(item.value);
                                setCatagoryFocus(false);
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.filterToggleBtn}
                        onPress={() => setFilterVisible(!filterVisible)}
                    >
                        <MaterialCommunityIcons
                            name={filterVisible ? 'filter' : 'filter-outline'}
                            size={24}
                            color={filterVisible ? '#18b5a1' : '#9e9595'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.wrhAddBtn} activeOpacity={0.8}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>

            {filterVisible && (
                <View style={[styles.body, { flexDirection: 'row' }]}>
                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown, { marginRight: 5 }, isWareHouseFocus && { borderColor: '#18b5a1' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={wareHouseList}
                            labelField="label"
                            valueField="value"
                            placeholder={'Warehouse'}
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
                            style={[styles.dropdown, { marginLeft: 5 }, isDurationFocus && { borderColor: '#18b5a1' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={durationList}
                            labelField="label"
                            valueField="value"
                            placeholder={'Duration'}
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
            )}

            <FlatList
                data={EXPENSE_DATA}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.9} style={styles.wrhCard}>
                        <View style={styles.detailsContainer}>
                            <View style={styles.cardHeader}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.labelText}>Category</Text>
                                    <Text style={styles.valueText}>{item.category}</Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.labelText}>Amount</Text>
                                    <Text style={[styles.valueText, { color: '#18b5a1', fontWeight: '700' }]}>Rs. {item.amount}</Text>
                                </View>
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.cardHeader}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.labelText}>Payment Mode</Text>
                                    <Text style={styles.valueText}>{item.paymentMode}</Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.labelText}>Date</Text>
                                    <Text style={styles.valueText}>{item.date}</Text>
                                </View>
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.textContainer}>
                                <Text style={styles.labelText}>Comment</Text>
                                <Text style={styles.valueText} numberOfLines={1}>{item.comments || 'N/A'}</Text>
                            </View>
                        </View>

                        <View style={styles.VerticalDivider} />

                        <View style={styles.actionContainer}>
                            <TouchableOpacity onPress={() => handleImagePreview(item.image)}>
                                <Image
                                    source={item.image ? { uri: item.image } : require('../../../assets/images/image.png')}
                                    style={styles.receiptThumb}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.bottomBtn, { backgroundColor: '#ffefef' }]}>
                                <MaterialCommunityIcons name={'trash-can-outline'} size={20} color={'#ff0000'} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <ImageViewerModal
                visible={isModal2Visible}
                imageUrl={selectedImage}
                onClose={() => setModal2Visible(false)}
            />
        </View>
    )
}

export default AllExpenses;