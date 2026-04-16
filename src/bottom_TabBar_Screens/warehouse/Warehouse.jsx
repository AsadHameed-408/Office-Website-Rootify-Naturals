import { View, TextInput, TouchableOpacity, FlatList, Text, Image, ScrollView } from 'react-native'; // Text add kiya
import React, { useState } from 'react';
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar';
import styles from './WarehouseStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const Warehouse = () => {
    const navigation = useNavigation()
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const warehouseData = [
        {
            id: 1,
            name: 'Store 1',
            warehouse: 'Warehouse 1',
            address: '123 Street, City, State',
            contact: 'John Doe',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            city: 'City',
        },
        {
            id: 2,
            name: 'Store 2',
            warehouse: 'Warehouse 2',
            address: '456 Street, City, State',
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

    return (
        <View style={styles.wrhMainContainer}>
            {/* app bar */}
            <BackArrowAppBar title={'Warehouse'} addNavigationRouteName={'add-warehouse'} isAddButtonVisible={true} />
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
                            // setFilterVisible(!filterVisible)
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
                        // navigation.navigate('')
                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* dropdown */}
            {filterVisible && <View style={[styles.body, { flexDirection: 'row' }]}>
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
                                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s' }}
                                    style={{ width: '30%', height: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                />
                                <View style={{ flex: 1, paddingLeft: 15 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
                                    <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>{item.warehouse}</Text>
                                    <Text style={styles.wrhListContentText}>{item.phone}</Text>
                                    <Text style={styles.wrhListContentText} numberOfLines={2}>
                                        {item.address}
                                    </Text>
                                    <Text style={styles.wrhListContentText}>{item.city}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Warehouse;