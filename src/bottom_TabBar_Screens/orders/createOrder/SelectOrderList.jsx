
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './CreateOrderStyle'
import { Dropdown } from 'react-native-element-dropdown'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import CColors from '../../../constants/CColors'
import DatePicker from 'react-native-date-picker'
import { useNavigation } from '@react-navigation/native'

const SelectOrderList = () => {
    const navigation = useNavigation()
    // Items selection
    const [itemValue, setItemValue] = useState(null);
    const [isItemFocus, setItemFocus] = useState(false);
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
                        Select Order Items
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

                    {/* Items Select */}
                    <Text style={styles.textLabel}>Order Items</Text>
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
                                        <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#ff0000', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                            <MC name={'trash-can-outline'} size={20} color={'#fff'} />
                                        </TouchableOpacity>
                                    </View>
                                    {/*  */}
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        {/* Image */}
                                        <View style={[styles.container, { marginRight: 5, borderRadius: 8 }]}>
                                            <Image
                                                source={{ uri: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg', }}
                                                width={'100%'}
                                                height={'100%'}
                                                style={{ borderRadius: 8 }}
                                                resizeMode='cover' />
                                        </View>
                                        {/*  price */}
                                        <View style={[styles.container, { marginRight: 5 }]}>
                                            <Text style={[styles.cardtextLabel,]}>QTY</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholderTextColor={'#D9D9D9'}
                                                    placeholder="0"
                                                    keyboardType='number-pad'
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
                                            <Text style={[styles.cardtextLabel,]}>PRICE</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholderTextColor={'#D9D9D9'}
                                                    placeholder="0"
                                                    keyboardType='number-pad'
                                                    value={invoiceValue}
                                                    onChange={(value) => {
                                                        setInvioceValue(value)
                                                        console.log(invoiceValue)
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        {/*  */}
                                    </View>
                                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 8 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel,]}>VARIANT</Text>
                                            <Text style={styles.wrhListContentText}>3 X Monthly Packs</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel,]}>SKU</Text>
                                            <Text style={styles.wrhListContentText}>VC00090</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel,]}>Available QTY</Text>
                                            <Text style={styles.wrhListContentText}>434</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardtextLabel, { alignSelf: 'flex-end' }]}>SUBTOTAL</Text>
                                            <Text style={[styles.wrhListContentText, { alignSelf: 'flex-end' }]}>1000</Text>
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
                    <View style={{ flex: 1, }}>
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
                </View>
                {/*  */}
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <Text style={[styles.cardtextLabel,]}>SUBTOTAL: PKR</Text>
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
                        <Text style={[styles.cardtextLabel,]}>TOTAL: PKR</Text>
                        <View style={[styles.bottomIinputContainer, { justifyContent: 'center', padding: 5 }]}>
                            <Text style={[styles.cardtextLabel, { color: '#D9D9D9', fontSize: 14 }]}>0</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SelectOrderList