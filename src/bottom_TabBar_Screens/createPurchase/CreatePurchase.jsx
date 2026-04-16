import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './CreatePurchaseStyle'
import { Dropdown } from 'react-native-element-dropdown'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import CColors from '../../constants/CColors'
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native'

const CreatePurchase = () => {
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
    // Items selection
    const [itemValue, setItemValue] = useState(null);
    const [isItemFocus, setItemFocus] = useState(false);
    // invioce  no
    const [invoiceValue, setInvioceValue] = useState('')
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
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={CColors.gradient}
                style={[styles.HeaderContainer, {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15
                }]}
            >
                {/* Left Side */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.iconButton}
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialIcons name='arrow-back' size={24} color={'#ffffff'} />
                    </TouchableOpacity>
                    <Text style={[styles.headerTitle, { marginLeft: 10 }]}>
                        Create Purchase
                    </Text>
                </View>
                {/* Right Side */}
                <TouchableOpacity
                    style={styles.wrhAddBtn}
                    activeOpacity={0.8}
                    onPress={() => { }}
                >
                    <MC name={'content-save'} size={24} color={'#fff'} />
                </TouchableOpacity>
            </LinearGradient>
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
                    {/* Invioce No  & date picker */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.container, { marginRight: 5 }]}>
                            <Text style={styles.textLabel}>Invioce No</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#D9D9D9'}
                                    placeholder="Invioce No"
                                    value={invoiceValue}
                                    onChange={(value) => {
                                        setInvioceValue(value)
                                        console.log(invoiceValue)
                                    }}
                                />
                            </View>
                        </View>
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
                        <View style={[styles.container, { marginLeft: 5 }]}>
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

                    {/* Items Select */}
                    <Text style={styles.textLabel}>Items*</Text>
                    <Dropdown
                        style={[styles.dropdown, isItemFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderTextColor={'#D9D9D9'}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={wareHouseList}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isItemFocus ? 'Select Items' : ''}
                        searchPlaceholder="Search..."
                        value={itemValue}
                        onFocus={() => setItemFocus(true)}
                        onBlur={() => setItemFocus(false)}
                        onChange={item => {
                            setItemValue(item.value);
                            setItemFocus(false);
                        }}
                    />
                    {/* order items list display */}
                    <Text style={styles.textLabel}>Order Items*</Text>
                    <View>
                        <FlatList
                            data={purchaseItemList}
                            contentContainerStyle={styles.wrhListContent}
                            keyExtractor={item => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            scrollEnabled={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity activeOpacity={1} style={styles.wrhCard}>
                                    {/* item name */}
                                    <View style={styles.cardHeader}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.heading}>{item.itemName}</Text>
                                        </View>
                                        <View style={{ backgroundColor: '#ff0000', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                            <MC name={'trash-can-outline'} size={20} color={'#fff'} />
                                        </View>
                                    </View>
                                    {/*  */}
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        {/* parking */}
                                        <View style={[styles.container, { marginRight: 5 }]}>
                                            <Text style={[styles.cardtextLabel,]}>PACKING</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholderTextColor={'#D9D9D9'}
                                                    placeholder="Packing"
                                                    keyboardType='number-pad'
                                                    value={invoiceValue}
                                                    onChange={(value) => {
                                                        setInvioceValue(value)
                                                        console.log(invoiceValue)
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        {/* purchase price */}
                                        <View style={[styles.container, { marginRight: 5 }]}>
                                            <Text style={[styles.cardtextLabel,]}>PURCH PRICE</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholderTextColor={'#D9D9D9'}
                                                    placeholder="P-Price"
                                                    value={invoiceValue}
                                                    onChange={(value) => {
                                                        setInvioceValue(value)
                                                        console.log(invoiceValue)
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        {/* purchase qty */}
                                        <View style={[styles.container,]}>
                                            <Text style={[styles.cardtextLabel,]}>PURCH-QTY</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholderTextColor={'#D9D9D9'}
                                                    placeholder="P-Qty"
                                                    value={invoiceValue}
                                                    onChange={(value) => {
                                                        setInvioceValue(value)
                                                        console.log(invoiceValue)
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel,]}>UNIT PRICE</Text>
                                            <Text style={styles.wrhListContentText}>434</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel,]}>IN-STOCK</Text>
                                            <Text style={styles.wrhListContentText}>434</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel,]}>TOTAL PRICE</Text>
                                            <Text style={styles.wrhListContentText}>434</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
            {/* bottom card */}
            <TouchableOpacity activeOpacity={1} style={styles.bottomCard}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <Text style={[styles.cardtextLabel,]}>SUBTOTAL</Text>
                        <View style={[styles.bottomIinputContainer, { justifyContent: 'center', padding: 5 }]}>
                            <Text style={[styles.cardtextLabel, { color: '#D9D9D9', fontSize: 14 }]}>0</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <Text style={[styles.cardtextLabel,]}>DISCOUNT</Text>
                        <View style={styles.bottomIinputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#D9D9D9'}
                                placeholder="0"
                                value={invoiceValue}
                                onChange={(value) => {
                                    setInvioceValue(value)
                                    console.log(invoiceValue)
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.cardtextLabel,]}>GRAND TOTAL</Text>
                        <View style={[styles.bottomIinputContainer, { justifyContent: 'center', padding: 5 }]}>
                            <Text style={[styles.cardtextLabel, { color: '#D9D9D9', fontSize: 14 }]}>0</Text>
                        </View>
                    </View>
                </View>
                {/*  */}
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <Text style={[styles.cardtextLabel,]}>PAY</Text>
                        <View style={styles.bottomIinputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#D9D9D9'}
                                placeholder="0"
                                value={invoiceValue}
                                onChange={(value) => {
                                    setInvioceValue(value)
                                    console.log(invoiceValue)
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.cardtextLabel,]}>REMAINING</Text>
                        <View style={[styles.bottomIinputContainer, { justifyContent: 'center', padding: 5 }]}>
                            <Text style={[styles.cardtextLabel, { color: '#D9D9D9', fontSize: 14 }]}>0</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CreatePurchase