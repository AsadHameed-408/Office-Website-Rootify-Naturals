import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native'
import TransactionModal from './addMoreExpenseItems/Modal'
import styles from './addFinancialExpenseStyle'

const AddFinancialExpense = () => {
    const navigation = useNavigation()
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    // Safety: Initialized with empty string instead of null to prevent dropdown object errors
    const [wareHouseValue, setWareHouseValue] = useState("");
    const [supplierValue, setSupplierValue] = useState("");
    const [pyeeTypeValue, setPyeeTypeValue] = useState("");
    const [paymentAccountValue, setPaymentAccountValue] = useState("");

    const [isWHFocus, setWHFocus] = useState(false);
    const [isSupFocus, setSupFocus] = useState(false);
    const [isPyFocus, setPyFocus] = useState(false);
    const [isAccFocus, setAccFocus] = useState(false);

    const [isModal2Visible, setModal2Visible] = useState(false);

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
    ];

    const purchaseItemList = [
        { id: 1, category: 'Courier Charges', mode: 'Cash', amount: '434' },
        { id: 2, category: 'Office Rent', mode: 'Bank', amount: '5000' }
    ];

    const DUMMY_TRANSACTIONS = [
        {
            id: '1',
            catagory: 'Central North Warehouse',
            paymentMode: 'Bank Transfer',
            amount: '1,250.00',
            comment: 'Verified by manager.',
            receiptImage: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=600',
        },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <BackArrowAppBar title={'Add Financial Expense'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <View style={styles.row}>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Warehouse*</Text>
                            <Dropdown
                                style={[styles.dropdown, isWHFocus && { borderColor: '#3f5189' }]}
                                data={wareHouseList}
                                labelField="label"
                                valueField="value"
                                placeholder="Select"
                                value={wareHouseValue}
                                onFocus={() => setWHFocus(true)}
                                onBlur={() => setWHFocus(false)}
                                onChange={item => { setWareHouseValue(item.value); setWHFocus(false); }}
                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Supplier*</Text>
                            <Dropdown
                                style={[styles.dropdown, isSupFocus && { borderColor: '#3f5189' }]}
                                data={wareHouseList}
                                labelField="label"
                                valueField="value"
                                placeholder="Select"
                                value={supplierValue}
                                onFocus={() => setSupFocus(true)}
                                onBlur={() => setSupFocus(false)}
                                onChange={item => { setSupplierValue(item.value); setSupFocus(false); }}
                            />
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Payee Type*</Text>
                            <Dropdown
                                style={[styles.dropdown, isPyFocus && { borderColor: '#3f5189' }]}
                                data={wareHouseList}
                                labelField="label"
                                valueField="value"
                                placeholder="Select"
                                value={pyeeTypeValue}
                                onFocus={() => setPyFocus(true)}
                                onBlur={() => setPyFocus(false)}
                                onChange={item => { setPyeeTypeValue(item.value); setPyFocus(false); }}
                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Payment Account*</Text>
                            <Dropdown
                                style={[styles.dropdown, isAccFocus && { borderColor: '#3f5189' }]}
                                data={wareHouseList}
                                labelField="label"
                                valueField="value"
                                placeholder="Select"
                                value={paymentAccountValue}
                                onFocus={() => setAccFocus(true)}
                                onBlur={() => setAccFocus(false)}
                                onChange={item => { setPaymentAccountValue(item.value); setAccFocus(false); }}
                            />
                        </View>
                    </View>

                    <Text style={styles.textLabel}>Date</Text>
                    <TouchableOpacity onPress={() => setOpen(true)} style={styles.datePickerInput}>
                        <Text>{date?.toDateString()}</Text>
                        <MC name='calendar-outline' size={22} color={'#3f5189'} />
                    </TouchableOpacity>

                    <DatePicker
                        modal
                        open={open}
                        date={date || new Date()}
                        mode='date'
                        onConfirm={(d) => { setOpen(false); setDate(d); }}
                        onCancel={() => setOpen(false)}
                    />

                    <View style={styles.row}>
                        <View style={styles.BallanceCard}><Text style={styles.cardtextLabel}>Current Balance</Text><Text>0.00</Text></View>
                        <View style={styles.BallanceCard}><Text style={styles.cardtextLabel}>New Balance</Text><Text>0.00</Text></View>
                    </View>

                    <Text style={[styles.textLabel, { marginBottom: 10 }]}>Expense Items</Text>
                    <FlatList
                        data={purchaseItemList}
                        keyExtractor={item => item?.id?.toString() || Math.random().toString()}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setModal2Visible(true)} style={styles.wrhCard}>
                                <View style={styles.cardHeader}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.cardtextLabel}>Category</Text>
                                        <Text style={styles.wrhListContentText}>{item?.category || "N/A"}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.deleteBtnContainer}>
                                        <MC name={'trash-can-outline'} size={18} color={'#fff'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 5 }}>
                                    <View style={{ flex: 1 }}><Text style={styles.cardtextLabel}>Mode</Text><Text style={styles.wrhListContentText}>{item?.mode}</Text></View>
                                    <View style={{ flex: 1 }}><Text style={styles.cardtextLabel}>Amount</Text><Text style={styles.wrhListContentText}>{item?.amount}</Text></View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>

            <TransactionModal data={DUMMY_TRANSACTIONS} visible={isModal2Visible} onClose={() => setModal2Visible(false)} />

            <View style={styles.bottomCard}>
                <TouchableOpacity onPress={() => navigation.navigate('add-MoreExpenseItems')} style={[styles.BottomBtn, { backgroundColor: '#3f5189' }]}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>ADD MORE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.BottomBtn, { backgroundColor: '#18b5a1' }]}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default AddFinancialExpense;