import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import CColors from '../../constants/CColors';
import style from './DashBoardStyle'

const DashBoardScreen = () => {
    const navigation = useNavigation();

    // States for Dropdowns
    const [wareHouseValue, setWareHouseValue] = useState('1'); // Default to 'All'
    const [dateValue, setDateValue] = useState('1'); // Default to 'Today'
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [isDateFocus, setDateFocus] = useState(false);

    const displayData = [
        { id: '1', title: 'Total Orders', value: '0', icon: 'shopping-bag', iconColor: '#3bb78f', bgColor: '#e3f7f1' },
        { id: '2', title: 'Fulfilled Orders', value: '0', icon: 'check-circle', iconColor: '#5da7db', bgColor: '#ebf4fa' },
        { id: '3', title: 'Unfulfilled Orders', value: '0', icon: 'access-time', iconColor: '#f7ad6d', bgColor: '#fff4ec' },
        { id: '4', title: 'Cancelled Orders', value: '0', icon: 'cancel', iconColor: '#eb7070', bgColor: '#fdeeee' },
        { id: '5', title: 'Total Sales', value: 'Rs 0.00', icon: 'monetization-on', iconColor: '#3bb78f', bgColor: '#e3f7f1' },
        { id: '6', title: 'Total Expenses', value: 'Rs 0.00', icon: 'account-balance-wallet', iconColor: '#eb7070', bgColor: '#fdeeee' },
        { id: '7', title: 'Gross Profit', value: 'Rs 0.00', icon: 'trending-up', iconColor: '#4f5e7b', bgColor: '#e8edf5' },
        { id: '8', title: 'Net Profit', value: 'Rs 0.00', icon: 'insert-chart', iconColor: '#3bb78f', bgColor: '#e3f7f1' },
        { id: '9', title: 'Total Items', value: '24', icon: 'layers', iconColor: '#5da7db', bgColor: '#ebf4fa' },
        { id: '10', title: 'Total Suppliers', value: '11', icon: 'people', iconColor: '#4f5e7b', bgColor: '#e8edf5' },
        { id: '11', title: 'Paid Amount', value: 'Rs 0.00', icon: 'done-all', iconColor: '#3bb78f', bgColor: '#e3f7f1' },
        { id: '12', title: 'Pending Amount', value: 'Rs 0.00', icon: 'schedule', iconColor: '#f7ad6d', bgColor: '#fff4ec' },
        { id: '13', title: 'Cash in Hand', value: 'Rs 2,600.00', icon: 'payments', iconColor: '#3bb78f', bgColor: '#e3f7f1' },
        { id: '14', title: 'Cash in Bank', value: 'Rs 58,500.00', icon: 'account-balance', iconColor: '#4f5e7b', bgColor: '#e8edf5' },
        { id: '15', title: 'Return Amount', value: 'Rs 0.00', icon: 'keyboard-return', iconColor: '#eb7070', bgColor: '#fdeeee' },
        { id: '16', title: 'Discount Amount', value: 'Rs 0.00', icon: 'redeem', iconColor: '#f7ad6d', bgColor: '#fff4ec' },
    ];

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'Explore Traders', value: '3' },
    ];

    const datesSelect = [
        { label: 'Today', value: '1' },
        { label: 'Yesterday', value: '2' },
        { label: 'This Month', value: '4' },
    ];

    return (
        <View style={style.mainContainer}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={CColors.gradient || ['#18b5a1', '#0ea5e9']}
                style={style.HeaderContainer}
            >
                <TouchableOpacity activeOpacity={0.7} style={style.iconButton} onPress={() => navigation.toggleDrawer()}>
                    <MaterialIcons name='menu' size={26} color={'#ffffff'} />
                </TouchableOpacity>

                <Text style={style.headerTitle}>Rootify Naturals</Text>

                <View style={style.rightIconsContainer}>
                    <TouchableOpacity activeOpacity={0.7} style={style.iconButton}>
                        <Ionicons name='notifications-outline' size={24} color={'#ffffff'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} activeOpacity={0.8} style={style.profileImageContainer}>
                        <Ionicons name='person-outline' size={20} color={'grey'} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Filters Section */}
                <View style={style.filterWrapper}>
                    <View style={style.dropdownBox}>
                        <Dropdown
                            style={[style.dropdown, isWareHouseFocus && { borderColor: '#18b5a1' }]}
                            placeholderStyle={style.placeholderStyle}
                            selectedTextStyle={style.selectedTextStyle}
                            data={wareHouseList}
                            labelField="label"
                            valueField="value"
                            placeholder="Warehouse"
                            value={wareHouseValue}
                            onFocus={() => setWareHouseFocus(true)}
                            onBlur={() => setWareHouseFocus(false)}
                            onChange={item => {
                                setWareHouseValue(item.value);
                                setWareHouseFocus(false);
                            }}
                        />
                    </View>
                    <View style={style.dropdownBox}>
                        <Dropdown
                            style={[style.dropdown, isDateFocus && { borderColor: '#18b5a1' }]}
                            placeholderStyle={style.placeholderStyle}
                            selectedTextStyle={style.selectedTextStyle}
                            data={datesSelect}
                            labelField="label"
                            valueField="value"
                            placeholder="Date"
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

                {/* Dashboard Cards Grid */}
                <View style={style.listWrapper}>
                    <FlatList
                        data={displayData}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <View style={style.cardContainer}>
                                <Text numberOfLines={1} style={style.cardTitle}>
                                    {item.title}
                                </Text>
                                <View style={style.cardBottomRow}>
                                    <Text style={style.cardValue}>{item.value}</Text>
                                    <View style={[style.cardIconContainer, { backgroundColor: item.bgColor }]}>
                                        <MaterialIcons name={item.icon} size={20} color={item.iconColor} />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={{ height: 120 }} />
            </ScrollView>
        </View>
    );
};


export default DashBoardScreen;