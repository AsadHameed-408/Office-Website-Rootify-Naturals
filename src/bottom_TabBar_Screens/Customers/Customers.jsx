import { View, Text, TouchableOpacity, TextInput, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './CustomersStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const Customers = () => {
    const navigation = useNavigation();
    // 1
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    // 2
    const [countryValue, setCountryValue] = useState(null);
    const [isCountryFocus, setCountryFocus] = useState(false);
    // 3
    const [stateValue, setStateValue] = useState(null);
    const [isStateFocus, setStateFocus] = useState(false);
    // 4
    const [cityValue, setCityValue] = useState(null);
    const [isCityFocus, setCityFocus] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const warehouseData = [
        {
            id: 1,
            warehouse: 'Warehouse 2',
            customerName: 'Customer 2',
            address: '123 Street, City, State',
            contact: 'John Doe',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            city: 'City',
        },
        {
            id: 2,
            warehouse: 'Warehouse 2',
            customerName: 'Customer 2',
            address: 'Garden, office #10 First Floor Shan Arcade Plaza Barket Market, New, town, Lahore, 54000',
            contact: 'Jane Doe',
            phone: 'ghumanshoaib16@gmail.com',
            email: 'jane.doe@example.com',
            city: 'City',

        }
    ];
    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];
    const CountryList = [
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'United Kingdom', value: 'GB' },
    ];

    const StateList = [
        { label: 'California', value: 'CA' },
        { label: 'Texas', value: 'TX' },
        { label: 'New York', value: 'NY' },
    ];

    const CityList = [
        { label: 'Los Angeles', value: 'LA' },
        { label: 'Houston', value: 'HOU' },
        { label: 'New York City', value: 'NYC' },
    ];

    return (
        <View>
            <BackArrowAppBar title={'Customers'} isAddButtonVisible={true} addNavigationRouteName={'add-customers'} />
            {/* search field */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Search customers..."
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
                        // navigation.navigate('add-customers')
                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* dropdown */}
            {
                filterVisible &&
                <View>
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
                                placeholder={!isWareHouseFocus ? wareHouseList[0].label : wareHouseList[0].label}
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
                                style={[styles.dropdown, isCountryFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={CountryList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isCountryFocus ? 'Choose country' : 'Choose country'}
                                searchPlaceholder="Search..."
                                value={countryValue}
                                onFocus={() => setCountryFocus(true)}
                                onBlur={() => setCountryFocus(false)}
                                onChange={item => {
                                    setCountryValue(item.value);
                                    setCountryFocus(false);
                                }}
                            />
                        </View>
                    </View>
                    <View style={[styles.body, { flexDirection: 'row' }]}>
                        <View style={styles.container}>
                            <Dropdown
                                style={[styles.dropdown, isStateFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={StateList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isStateFocus ? "Choose State" : 'ChooseState'}
                                searchPlaceholder="Search..."
                                value={stateValue}
                                onFocus={() => setStateFocus(true)}
                                onBlur={() => setStateFocus(false)}
                                onChange={item => {
                                    setStateValue(item.value);
                                    setStateFocus(false);
                                }}
                            />
                        </View>
                        <View style={styles.container}>
                            <Dropdown
                                style={[styles.dropdown, isCityFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={CityList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isCityFocus ? 'Choose city' : 'Choose city'}
                                searchPlaceholder="Search..."
                                value={cityValue}
                                onFocus={() => setCityFocus(true)}
                                onBlur={() => setCityFocus(false)}
                                onChange={item => {
                                    setCityValue(item.value);
                                    setCityFocus(false);
                                }}
                            />
                        </View>
                    </View>
                </View>
            }
            {/* warehouse list */}
            <ScrollView>
                <View style={{ marginBottom: 40 }}>
                    <FlatList
                        data={warehouseData}
                        contentContainerStyle={styles.wrhListContent}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.9} style={styles.wrhCard}>
                                {/* <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s' }}
                            style={{ width: '30%', height: '100%', borderRadius: 8, resizeMode: 'cover' }}
                        /> */}
                                <View style={{ flex: 1, paddingLeft: 15 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.customerName}</Text>
                                    <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>{item.warehouse}</Text>
                                    <Text style={styles.wrhListContentText}>{item.phone}</Text>
                                    <Text style={styles.wrhListContentText} numberOfLines={2}>{item.address}</Text>
                                    <Text style={styles.wrhListContentText}>{item.city}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Customers
