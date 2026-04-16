import { View, Text, TouchableOpacity, TextInput, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './SupplierStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const Suppliers = () => {
    const navigation = useNavigation();
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [dateValue, setDateValue] = useState(null);
    const [isDateFocus, setDateFocus] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const warehouseData = [
        {
            id: 1,
            name: 'Warehouse 1',
            warehouse: 'Supplier 1',
            address: '123 Street, City, State',
            contact: 'John Doe',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            city: 'City',
        }
        ,
        {
            id: 2,
            name: 'Warehouse 2',
            warehouse: 'Supplier 2',
            address: 'Garden, office #10 First Floor Shan Arcade Plaza Barket Market, New, town, Lahore, 54000',
            contact: 'Jane Doe',
            phone: '098-765-4321',
            email: 'jane.doe@example.com',
            city: 'City',
        }
        ,
        {
            id: 3,
            name: 'Warehouse 3',
            warehouse: 'Supplier 2',
            address: 'Garden, office #10 First Floor Shan Arcade Plaza Barket Market, New, town, Lahore, 54000',
            contact: 'Jane Doe',
            phone: '098-765-4321',
            email: 'jane.doe@example.com',
            city: 'City',
        }
        ,
        {
            id: 4,
            name: 'Warehouse 4',
            warehouse: 'Supplier 2',
            address: 'Garden, office #10 First Floor Shan Arcade Plaza Barket Market, New, town, Lahore, 54000',
            contact: 'Jane Doe',
            phone: '098-765-4321',
            email: 'jane.doe@example.com',
            city: 'City',
        }
        ,
        {
            id: 5,
            name: 'Warehouse 5',
            warehouse: 'Supplier 2',
            address: 'Garden, office #10 First Floor Shan Arcade Plaza Barket Market, New, town, Lahore, 54000',
            contact: 'Jane Doe',
            phone: '098-765-4321',
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
            <BackArrowAppBar title={'Suppliers'} isAddButtonVisible={true} addNavigationRouteName={'add-suppliers'} />
            {/* search field */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Search warehouse..."
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
                        // navigation.navigate('add-suppliers')
                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* dropdown */}
            {
                filterVisible &&
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
                            style={[styles.dropdown, isDateFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={datesSelect}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isDateFocus ? 'Choose a date' : 'Choose a date'}
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
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
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

export default Suppliers