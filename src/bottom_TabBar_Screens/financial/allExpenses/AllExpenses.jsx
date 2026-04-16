import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './AllExpensesStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown'
import ImageViewerModal from '../../../widgets/imageViewModal/ImageViewModal'

const AllExpenses = () => {
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [catagoryValue, setCatagoryValue] = useState(null);
    const [isCatagoryFocus, setCatagoryFocus] = useState(false);
    const [durationValue, setDurationValue] = useState(null);
    const [isDurationFocus, setDurationFocus] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const [isModal2Visible, setModal2Visible] = useState(false);

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];

    const catagoryList = [
        { label: 'Today', value: '1' },
        { label: 'Yesterday', value: '2' },
        { label: 'This Week', value: '3' },
        { label: 'This Month', value: '4' },
        { label: 'Last Month', value: '5' },
        { label: 'Custom Range', value: '6' },
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
            comments: '',
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
            image: 'https://pandapaperroll.com/wp-content/uploads/2020/05/Receipt-paper-types-1.jpg'
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
    return (

        <View style={{ flex: 1 }} >
            <BackArrowAppBar title={'All Financial Expenses'} isAddButtonVisible={true} addNavigationRouteName={'add-FinancialExpense'} isDownloadButtonVisible={true} />
            {/* search  */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown, { marginBottom: 0, marginTop: 0, marginRight: 5 }, isCatagoryFocus && { borderColor: 'blue', }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={catagoryList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isCatagoryFocus ? 'Catagory' : ''}
                            searchPlaceholder="Search..."
                            value={catagoryValue}
                            onFocus={() => setCatagoryFocus(true)}
                            onBlur={() => setCatagoryFocus(false)}
                            onChange={item => {
                                setCatagoryValue(item.value);
                                setCatagoryFocus(false);
                            }}
                        />
                    </View>
                    <View style={[styles.wrhInputContainer, { flex: 0 }]}>
                        {/* <View style={styles.wrhVerticalDivider} /> */}
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
                <View style={[styles.body, { flexDirection: 'row' }]}>
                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown, { marginRight: 5, }, isWareHouseFocus && { borderColor: 'blue', }]}
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
                            style={[styles.dropdown, { marginLeft: 5 }, isDurationFocus && { borderColor: 'blue', }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={durationList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isDurationFocus ? catagoryList[0].label : ''}
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
            }
            {/* Item Cart */}
            <ScrollView>
                <View>
                    <FlatList
                        data={EXPENSE_DATA}
                        scrollEnabled={false}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.7} style={styles.wrhCard}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        {/* Details Section */}
                                        <View style={styles.detailsContainer}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <View style={{ justifyContent: 'center' }}>
                                                            <View style={styles.textContainer}>
                                                                <Text style={styles.labelText}>Category</Text>
                                                                <Text style={styles.valueText}>{item.category}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ justifyContent: 'center' }}>
                                                            <View style={styles.textContainer}>
                                                                <Text style={styles.labelText}>Amount</Text>
                                                                <Text style={styles.valueText}>{item.amount}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={styles.divider} />
                                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <View style={{ justifyContent: 'center' }}>
                                                            <View style={styles.textContainer}>
                                                                <Text style={styles.labelText}>Payment Mode</Text>
                                                                <Text style={styles.valueText}>{item.paymentMode}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ justifyContent: 'center' }}>
                                                            <View style={styles.textContainer}>
                                                                <Text style={styles.labelText}>Date</Text>
                                                                <Text style={styles.valueText}>{item.date}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={styles.divider} />
                                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <View style={{ justifyContent: 'center' }}>
                                                            <View style={styles.textContainer}>
                                                                <Text style={styles.labelText}>Comment</Text>
                                                                <Text style={styles.valueText}>{item.comments}</Text>
                                                            </View>
                                                        </View>
                                                        {/* <View style={{ justifyContent: 'center' }}>
                                                            <View style={styles.textContainer}>
                                                                <Text style={styles.labelText}>Date</Text>
                                                                <Text style={styles.valueText}>{item.date}</Text>
                                                            </View>
                                                        </View> */}
                                                    </View>

                                                </View>
                                                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                                                    <View style={styles.VerticalDivider} />
                                                    <View style={{ alignItems: 'center', justifyContent: 'space-between', }}>
                                                        <TouchableOpacity onPress={() => { setModal2Visible(true) }} style={{ flex: 1 }}>
                                                            <Image source={item.image === '' ? require('../../../assets/images/image.png') : { uri: item.image }} style={{ height: 60, width: 60 }} />
                                                        </TouchableOpacity>
                                                        <View style={[styles.bottomBtn, { backgroundColor: '#ff0000', }]}>
                                                            <MaterialCommunityIcons name={'trash-can-outline'} size={20} color={'#fff'} />
                                                        </View>
                                                    </View>

                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <ImageViewerModal visible={isModal2Visible} imageUrl={'https://pandapaperroll.com/wp-content/uploads/2020/05/Receipt-paper-types-1.jpg'} onClose={() => { setModal2Visible(false) }} />
            </ScrollView>
        </View>

    )
}

export default AllExpenses