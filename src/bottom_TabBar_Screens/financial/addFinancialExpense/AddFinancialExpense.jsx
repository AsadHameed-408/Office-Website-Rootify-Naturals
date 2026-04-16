import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './addFinancialExpenseStyle'
import { Dropdown } from 'react-native-element-dropdown'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import CColors from '../../../constants/CColors'
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native'
import TransactionModal from './addMoreExpenseItems/Modal'

const AddFinancialExpense = () => {
    const navigation = useNavigation()
    // date picker
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    // warehouse selection
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    // Supplier selection
    const [supplierValue, setSupplierValue] = useState(null);
    const [isSuppllierFocus, setSupplierFocus] = useState(false);
    //  Pyee Type selection
    const [pyeeTypeValue, setPyeeTypeValue] = useState(null);
    const [isPyeeTypeFocus, setPyeeTypeFocus] = useState(false);
    //  Account selection
    const [paymentAccountValue, setPaymentAccountValue] = useState(null);
    const [isPaymentAccountFocus, setPaymentAccountFocus] = useState(false);
    // invioce  no
    const [invoiceValue, setInvioceValue] = useState('')
    const [isModal2Visible, setModal2Visible] = useState(false);

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];
    const purchaseItemList = [
        {
            id: 1,
            itemName: 'VIROZEN + DRIVEON | Permanent Solution + Instant Results',
            packing: 'bb',
            purchasePrice: 44,
            unitPrice: '4356',
            inStock: 34,
            purchaseQty: 34,
            totalPrice: '34324'
        },
        {
            id: 2,
            itemName: 'VIROZEN + DRIVEON | Permanent Solution + Instant Results',
            packing: 'bb',
            purchasePrice: 44,
            unitPrice: '4356',
            inStock: 34,
            purchaseQty: 34,
            totalPrice: '34324'
        }
    ]
    const DUMMY_TRANSACTIONS = [
        {
            id: '1',
            catagory: 'Central North Warehouse',
            paymentMode: 'Bank Transfer',
            amount: '1,250.00',
            comment: 'Stock replenishment for Q2 electronics. Verified by manager.',
            receiptImage: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=600',
        },
    ];
    return (
        <View style={{ flex: 1 }}>
            <BackArrowAppBar title={'Add Financial Expense'} />
            {/*  */}
            <ScrollView>
                <View style={styles.body}>
                    <View style={{ flexDirection: 'row' }}>
                        {/* warehouse dropdrown */}
                        <View style={[styles.container, { marginRight: 5 }]}>
                            <Text style={styles.textLabel}>Warehouse*</Text>
                            <Dropdown
                                style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#D9D9D9'}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={wareHouseList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isWareHouseFocus ? 'Warehouse' : ''}
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
                        {/* Supplier Dropdown */}
                        <View style={[styles.container, { marginLeft: 5 }]}>
                            <Text style={styles.textLabel}>Supplier*</Text>
                            <Dropdown
                                style={[styles.dropdown, isSuppllierFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#D9D9D9'}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={wareHouseList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isSuppllierFocus ? 'Supplier' : ''}
                                searchPlaceholder="Search..."
                                value={supplierValue}
                                onFocus={() => setSupplierFocus(true)}
                                onBlur={() => setSupplierFocus(false)}
                                onChange={item => {
                                    setSupplierValue(item.value);
                                    setSupplierFocus(false);
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* payee type dropdrown */}
                        <View style={[styles.container, { marginRight: 5 }]}>
                            <Text style={styles.textLabel}>Payee Type*</Text>
                            <Dropdown
                                style={[styles.dropdown, isPyeeTypeFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#D9D9D9'}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={wareHouseList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isPyeeTypeFocus ? 'Payee' : ''}
                                searchPlaceholder="Search..."
                                value={wareHouseValue}
                                onFocus={() => setPyeeTypeFocus(true)}
                                onBlur={() => setPyeeTypeFocus(false)}
                                onChange={item => {
                                    setPyeeTypeValue(item.value);
                                    setPyeeTypeFocus(false);
                                }}
                            />
                        </View>
                        {/* payment account Dropdown */}
                        <View style={[styles.container, { marginLeft: 5 }]}>
                            <Text style={styles.textLabel}>Payment Account*</Text>
                            <Dropdown
                                style={[styles.dropdown, isPaymentAccountFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#D9D9D9'}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={wareHouseList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isPaymentAccountFocus ? 'Account' : ''}
                                searchPlaceholder="Search..."
                                value={supplierValue}
                                onFocus={() => setPaymentAccountFocus(true)}
                                onBlur={() => setPaymentAccountFocus(false)}
                                onChange={item => {
                                    setPaymentAccountValue(item.value);
                                    setPaymentAccountFocus(false);
                                }}
                            />
                        </View>
                    </View>
                    {/* Invioce No  & date picker */}
                    <View style={{ flexDirection: 'row' }}>
                        {/* Date Piceker */}
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode='date'
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                        <View style={[styles.container,]}>
                            <Text style={styles.textLabel}>Date</Text>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={() => setOpen(true)}
                                style={[
                                    styles.inputContainer,
                                    {
                                        justifyContent: 'space-between',
                                        paddingHorizontal: 5,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }
                                ]}>
                                <Text>{date.toDateString()}</Text>
                                <MC name='calendar-outline' size={24} color={'#D9D9D9'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* current ballance and new ballance */}
                    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                        <View style={[styles.BallanceCard, { marginRight: 5 }]}>
                            <Text style={styles.textLabel}>Current Balance</Text>
                            <Text>0.00</Text>
                        </View>
                        <View style={[styles.BallanceCard, { marginLeft: 5 }]}>
                            <Text style={styles.textLabel}>New Balance</Text>
                            <Text>0.00</Text>
                        </View>
                    </View>
                    {/* Exenses items list display */}
                    <Text style={[styles.textLabel, { marginBottom: 10 }]}>Expense Items</Text>
                    <View>
                        <FlatList
                            data={purchaseItemList}
                            contentContainerStyle={styles.wrhListContent}
                            keyExtractor={item => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            scrollEnabled={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => { setModal2Visible(true) }} activeOpacity={0.7} style={styles.wrhCard}>
                                    {/* item name */}
                                    <View style={styles.cardHeader}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel,]}>Catagory</Text>
                                            <Text style={styles.wrhListContentText}>Insta Courier Service Charges. Menscure</Text>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.5} style={styles.deleteBtnContainer}>
                                            <MC name={'trash-can-outline'} size={20} color={'#fff'} />
                                        </TouchableOpacity>
                                    </View>
                                    {/*  */}
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel,]}>Payment Mode</Text>
                                            <Text style={styles.wrhListContentText}>Cash</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel,]}>Amount</Text>
                                            <Text style={styles.wrhListContentText}>434</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
            <TransactionModal data={DUMMY_TRANSACTIONS} visible={isModal2Visible} onClose={() => { setModal2Visible(!isModal2Visible) }} />
            {/* bottom card */}
            <View style={styles.bottomCard}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('add-MoreExpenseItems') }}
                    activeOpacity={0.7}
                    style={[styles.BottomBtn, { backgroundColor: '#3f5189' }]}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>ADD MORE</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={[styles.BottomBtn, , { backgroundColor: '#18b5a1' }]}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddFinancialExpense