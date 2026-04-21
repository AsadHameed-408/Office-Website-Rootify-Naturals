import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import CColors from '../../constants/CColors'
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native'
import styles from './CreatePurchaseStyle'

const CreatePurchase = () => {
    const navigation = useNavigation()

    // States
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [supplierValue, setSupplierValue] = useState(null);
    const [itemValue, setItemValue] = useState(null);
    const [invoiceNo, setInvoiceNo] = useState('')
    const [discount, setDiscount] = useState('0')
    const [payAmount, setPayAmount] = useState('0')

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'Main Store', value: '2' },
    ];

    const purchaseItemList = [
        {
            id: 1,
            itemName: 'VIROZEN + DRIVEON | Permanent Solution',
            packing: '12x1',
            purchasePrice: 44,
            unitPrice: '4356',
            inStock: 34,
            purchaseQty: 10,
            totalPrice: '440'
        }
    ]

    return (
        <View style={{ flex: 1, backgroundColor: '#F5F7FA' }}>
            {/* Header */}
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={CColors.gradient}
                style={styles.HeaderContainer}
            >
                <View style={styles.leftSection}>
                    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='arrow-back' size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Create Purchase</Text>
                </View>
                <TouchableOpacity style={styles.wrhAddBtn}>
                    <MC name={'content-save'} size={24} color={'#fff'} />
                </TouchableOpacity>
            </LinearGradient>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    {/* Warehouse & Supplier Row */}
                    <View style={styles.row}>
                        <View style={styles.flex1}>
                            <Text style={styles.textLabel}>Warehouse*</Text>
                            <Dropdown
                                style={styles.dropdown}
                                data={wareHouseList}
                                labelField="label"
                                valueField="value"
                                placeholder="Select Warehouse"
                                value={wareHouseValue}
                                onChange={item => setWareHouseValue(item.value)}
                            />
                        </View>
                        <View style={[styles.flex1, { marginLeft: 10 }]}>
                            <Text style={styles.textLabel}>Supplier*</Text>
                            <Dropdown
                                style={styles.dropdown}
                                data={wareHouseList}
                                labelField="label"
                                valueField="value"
                                placeholder="Select Supplier"
                                value={supplierValue}
                                onChange={item => setSupplierValue(item.value)}
                            />
                        </View>
                    </View>

                    {/* Invoice & Date Row */}
                    <View style={styles.row}>
                        <View style={styles.flex1}>
                            <Text style={styles.textLabel}>Invoice No</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter No"
                                    value={invoiceNo}
                                    onChangeText={setInvoiceNo}
                                />
                            </View>
                        </View>
                        <View style={[styles.flex1, { marginLeft: 10 }]}>
                            <Text style={styles.textLabel}>Date</Text>
                            <TouchableOpacity
                                onPress={() => setOpen(true)}
                                style={[styles.inputContainer, styles.dateSelector]}>
                                <Text style={{ fontSize: 13 }}>{date.toLocaleDateString()}</Text>
                                <MC name='calendar-outline' size={20} color={CColors.gradient[0]} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Items Dropdown */}
                    <Text style={styles.textLabel}>Select Items*</Text>
                    <Dropdown
                        style={styles.dropdown}
                        data={wareHouseList}
                        search
                        labelField="label"
                        valueField="value"
                        placeholder="Search & Add Items"
                        value={itemValue}
                        onChange={item => setItemValue(item.value)}
                    />

                    {/* Order Items List */}
                    <Text style={[styles.textLabel, { marginTop: 10 }]}>Order Items ({purchaseItemList.length})</Text>
                    {purchaseItemList.map((item) => (
                        <View key={item.id} style={styles.wrhCard}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.heading}>{item.itemName}</Text>
                                <TouchableOpacity style={styles.deleteBtn}>
                                    <MC name={'trash-can-outline'} size={18} color={'#fff'} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.flex1}>
                                    <Text style={styles.cardtextLabel}>PACKING</Text>
                                    <TextInput style={styles.cardInput} value={item.packing} editable={false} />
                                </View>
                                <View style={[styles.flex1, { marginHorizontal: 8 }]}>
                                    <Text style={styles.cardtextLabel}>P-PRICE</Text>
                                    <TextInput style={styles.cardInput} keyboardType="numeric" defaultValue={item.purchasePrice.toString()} />
                                </View>
                                <View style={styles.flex1}>
                                    <Text style={styles.cardtextLabel}>QTY</Text>
                                    <TextInput style={styles.cardInput} keyboardType="numeric" defaultValue={item.purchaseQty.toString()} />
                                </View>
                            </View>

                            <View style={[styles.row, { marginTop: 10, borderTopWidth: 0.5, borderColor: '#eee', paddingTop: 8 }]}>
                                <View style={styles.flex1}>
                                    <Text style={styles.cardtextLabel}>UNIT PRICE</Text>
                                    <Text style={styles.valText}>{item.unitPrice}</Text>
                                </View>
                                <View style={styles.flex1}>
                                    <Text style={styles.cardtextLabel}>IN-STOCK</Text>
                                    <Text style={styles.valText}>{item.inStock}</Text>
                                </View>
                                <View style={styles.flex1}>
                                    <Text style={styles.cardtextLabel}>TOTAL</Text>
                                    <Text style={[styles.valText, { color: 'green', fontWeight: 'bold' }]}>{item.totalPrice}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{ height: 250 }} />
            </ScrollView>

            {/* Bottom Summary Card */}
            <View style={styles.bottomCard}>
                <View style={styles.row}>
                    <SummaryItem label="SUBTOTAL" value="1200" />
                    <View style={styles.flex1}>
                        <Text style={styles.cardtextLabel}>DISCOUNT</Text>
                        <TextInput
                            style={styles.bottomInput}
                            keyboardType="numeric"
                            value={discount}
                            onChangeText={setDiscount}
                        />
                    </View>
                    <SummaryItem label="GRAND TOTAL" value="1150" highlight />
                </View>

                <View style={[styles.row, { marginTop: 10 }]}>
                    <View style={styles.flex1}>
                        <Text style={styles.cardtextLabel}>PAY AMOUNT</Text>
                        <TextInput
                            style={styles.bottomInput}
                            keyboardType="numeric"
                            value={payAmount}
                            onChangeText={setPayAmount}
                        />
                    </View>
                    <SummaryItem label="REMAINING" value="150" isWarning />
                </View>
            </View>

            <DatePicker
                modal
                open={open}
                date={date}
                mode='date'
                onConfirm={(date) => { setOpen(false); setDate(date); }}
                onCancel={() => setOpen(false)}
            />
        </View>
    )
}

// Reusable Summary Component
const SummaryItem = ({ label, value, highlight, isWarning }) => (
    <View style={styles.flex1}>
        <Text style={styles.cardtextLabel}>{label}</Text>
        <View style={[styles.bottomDisplay, highlight && { backgroundColor: '#E8F5E9' }]}>
            <Text style={[styles.valText, highlight && { color: 'green' }, isWarning && { color: 'red' }]}>{value}</Text>
        </View>
    </View>
);


export default CreatePurchase;