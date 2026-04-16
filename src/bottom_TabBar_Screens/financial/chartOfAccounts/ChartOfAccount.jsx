import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './ChartOfAccountStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const ChartOfAccount = () => {
    const navigation = useNavigation();
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [dateValue, setDateValue] = useState(null);
    const [isDateFocus, setDateFocus] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const UnitsList = [
        {
            id: 1,
            name: 'Other Expenses',
            warehouse: 'EL',
            discription: 'CASH IN BANK',
            amount: '2,600.00',
            type: 'Asset',
            isCash: 'YES',
            paymentMode: 'Cash',
            status: true,
        },
        {
            id: 2,
            name: 'Explore Logics IT Solutions',
            warehouse: 'Explore Traders',
            discription: 'CASH IN BANK',
            amount: '2,600.00',
            type: 'Income/Revenue',
            isCash: 'NO',
            paymentMode: 'Online',
            status: false,
        },
        {
            id: 3,
            name: 'Other Expenses',
            warehouse: 'Falak Traders',
            discription: 'CASH IN BANK',
            amount: '2,600.0000',
            type: 'Liability',
            isCash: 'NO',
            paymentMode: 'Online',
            status: false,
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
            <BackArrowAppBar title={'Chart Of Accounts'} addNavigationRouteName={'add-ChartOfAccounts'} isAddButtonVisible={true} />
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

            {/* store list */}
            <ScrollView>
                <View style={{ marginBottom: 40 }}>
                    <FlatList
                        data={UnitsList}
                        contentContainerStyle={styles.wrhListContent}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={1} style={styles.wrhCard}>
                                <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
                                        <Text style={[styles.wrhListContentText,]}>{item.warehouse}</Text>
                                        {/*  middle */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                            <View >
                                                <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>Type</Text>
                                                <Text style={[styles.wrhListContentText,]}>{item.type}</Text>
                                            </View>
                                            <View>

                                                <Text style={[styles.wrhListContentText, { fontWeight: 'bold', }]}>Is Cash:</Text>
                                                <Text style={[styles.wrhListContentText,]}>{item.isCash}</Text>

                                            </View>
                                            <View>
                                                <Text style={[styles.wrhListContentText, { fontWeight: 'bold', }]}>Payment Mode</Text>
                                                <Text style={[styles.wrhListContentText,]}>{item.paymentMode}</Text>

                                            </View>
                                        </View>
                                        {/* discription */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                            <View >
                                                <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>Discription</Text>
                                                <Text style={[styles.wrhListContentText,]}>{item.discription}</Text>
                                            </View>
                                            <View>
                                                <Text style={[styles.wrhListContentText, { fontWeight: 'bold', alignSelf: 'flex-end' }]}>Amount</Text>
                                                <Text style={[styles.wrhListContentText,]}>{item.amount}</Text>
                                            </View>
                                        </View>
                                        {/* divider */}
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
                                        {/* button */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            {/* Left */}
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <Text style={[styles.wrhListContentText, { fontWeight: 'bold', }]}>STATUS:</Text>
                                                <View style={{ backgroundColor: item.status === true ? '#18b5a1' : '#ff0000', paddingHorizontal: 8, borderRadius: 4, marginLeft: 5 }}>
                                                    <Text style={[styles.wrhListContentText, { color: 'white' }]}>{item.status === true ? 'Active' : 'Inactive'}</Text>
                                                </View>
                                                <Switch
                                                    trackColor={{ false: '#d1d1d1', true: '#a4e4dc' }}
                                                    thumbColor={item.status === true ? '#18b5a1' : '#f4f3f4'}
                                                    ios_backgroundColor="#d1d1d1"
                                                    value={item.status === true}
                                                    onValueChange={(value) => {
                                                        console.log("New Status:", value ? 'Active' : 'Inactive');
                                                    }}
                                                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginLeft: -5 }}
                                                />
                                            </View>
                                            {/* Right */}
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 15 }}>
                                                <View style={{ backgroundColor: '#18b5a1', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', }}>
                                                    <MaterialCommunityIcons name={'pencil-outline'} size={20} color={'white'} />
                                                </View>
                                                <View style={{ backgroundColor: '#ff0000', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                                    <MaterialCommunityIcons name={'trash-can-outline'} size={20} color={'#fff'} />
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
        </View>
    )
}

export default ChartOfAccount