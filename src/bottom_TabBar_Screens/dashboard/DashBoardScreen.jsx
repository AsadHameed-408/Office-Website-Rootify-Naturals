import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import style from './DashBoardStyle'
//  icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CColors from '../../constants/CColors'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Dropdown } from 'react-native-element-dropdown'

const DashBoardScreen = () => {
    const navigation = useNavigation()
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    const [dateValue, setDateValue] = useState(null);
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
        <View>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={CColors.gradient}
                style={style.HeaderContainer}
            >
                {/* Left Side: Menu */}
                <TouchableOpacity activeOpacity={0.7} style={style.iconButton} onPress={() => navigation.toggleDrawer()}>
                    <MaterialIcons name='menu' size={26} color={'#ffffff'} />
                </TouchableOpacity>

                {/* Center: Title */}
                <Text style={style.headerTitle}>Rootify Naturals</Text>

                {/* Right Side: Notification & Profile */}
                <View style={style.rightIconsContainer}>
                    <TouchableOpacity activeOpacity={0.7} style={style.iconButton}>
                        <Ionicons name='notifications-outline' size={24} color={'#ffffff'} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} style={style.profileImageContainer}>
                        <Ionicons name='person-outline' size={20} color={'grey'} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <ScrollView>
                <View style={[style.body, { flexDirection: 'row' }]}>
                    <View style={style.container}>
                        <Dropdown
                            style={[style.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                            placeholderStyle={style.placeholderStyle}
                            selectedTextStyle={style.selectedTextStyle}
                            inputSearchStyle={style.inputSearchStyle}
                            iconStyle={style.iconStyle}
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
                    <View style={style.container}>
                        <Dropdown
                            style={[style.dropdown, isDateFocus && { borderColor: 'blue' }]}
                            placeholderStyle={style.placeholderStyle}
                            selectedTextStyle={style.selectedTextStyle}
                            inputSearchStyle={style.inputSearchStyle}
                            iconStyle={style.iconStyle}
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
                <View style={[style.body, { paddingBottom: 100, }]}>
                    <FlatList
                        data={displayData}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <View style={style.cardContainer}>
                                {/* Text ko wrap karne ke liye numberOfLines use karein */}
                                <Text numberOfLines={1} style={{ fontSize: 14, fontWeight: '600', marginBottom: 8, overflow: 'scroll' }}>
                                    {item.title}
                                </Text>

                                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.value}</Text>
                                    <View style={[style.cardIconContainer, { backgroundColor: item.bgColor, }]}>
                                        <MaterialIcons name={item.icon} size={22} color={item.iconColor} />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default DashBoardScreen


