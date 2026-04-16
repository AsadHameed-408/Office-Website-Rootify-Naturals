import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CColors from '../constants/CColors';
import style from './CustomDrawerStyle';
import { useNavigation } from '@react-navigation/native';
import { DrawerItem } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown, FadeInUp, LinearTransition, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const CustomDrawerScreen = (props) => {
    const [expandedMenu, setExpandedMenu] = useState(false);
    const [nameMenu, setNameMenu] = useState("");
    const navigation = useNavigation()
    // animation and rotation
    const height = useSharedValue(0)
    const rotate = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: height.value
        }
    })
    const rotateStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotate.value}deg` }]
        }
    })



    const menuItems = [
        { name: 'Dashboard', icon: 'view-dashboard-outline', type: 'MC', screen: 'Dashboard' },
        { name: 'Warehouse', icon: 'warehouse', type: 'MC', screen: 'Warehouse' },
        { name: 'Suppliers', icon: 'truck', type: 'Feather', screen: 'Suppliers' },
        { name: 'Customers', icon: 'users', type: 'FA5', screen: 'Customers' },
        { name: 'Stores', icon: 'storefront-outline', type: 'MC', screen: 'Stores' },
        { name: 'Couriers Companies', icon: 'truck-delivery-outline', type: 'MC', screen: 'Couriers' },
        { name: 'Items', icon: 'package-variant-closed', type: 'MC', screen: 'Items' },
        { name: 'Purchases', icon: 'cart-arrow-down', type: 'MC', screen: 'Purchases' },
        { name: 'Financial', icon: 'finance', type: 'MC', screen: 'Financial' },
        { name: 'Orders', icon: 'cart-outline', type: 'MC', screen: 'Orders' },
        { name: 'Employees', icon: 'user-tie', type: 'FA5', screen: 'Employees' },
        { name: 'Reports', icon: 'chart-pie', type: 'MC', screen: 'Reports' },
        { name: 'Locations', icon: 'map-marker-radius-outline', type: 'MC', screen: 'Locations' },
        { name: 'Settings', icon: 'settings-outline', screen: 'Settings' },
    ];

    const Items = [
        { name: 'Units', icon: 'ruler', type: 'MC', screen: 'UnitsScreen' },
        { name: 'Brands', icon: 'tag', type: 'MC', screen: 'BrandsScreen' },
        { name: 'Categories', icon: 'format-list-bulleted', type: 'MC', screen: 'CategoriesScreen' },
        { name: 'Items List', icon: 'package-variant', type: 'MC', screen: 'ItemsListScreen' },
    ];

    const Purchases = [
        { name: 'Purchase List', icon: 'format-list-bulleted', type: 'MC', screen: 'PurchaseListScreen' },
        { name: 'Create Purchase', icon: 'plus', type: 'MC', screen: 'CreatePurchaseScreen' }
    ];

    const Financial = [
        { name: 'Chart of Accounts', icon: 'format-list-bulleted', type: 'MC', screen: 'COAScreen' },
        { name: 'Expense Categories', icon: 'tag', type: 'MC', screen: 'ExpenseCatScreen' },
        { name: 'Expenses', icon: 'cash-multiple', type: 'MC', screen: 'ExpensesScreen' },
        { name: 'All Expenses', icon: 'file-document-outline', type: 'MC', screen: 'AllExpensesScreen' }
    ];

    const Orders = [
        { name: 'All Orders', icon: 'playlist-check', type: 'MC', screen: 'AllOrdersScreen' },
        { name: 'Create Order', icon: 'plus', type: 'MC', screen: 'CreateOrderScreen' }
    ];

    const Employees = [
        { name: 'Roles', icon: 'playlist-check', type: 'MC', screen: 'RolesScreen' },
        { name: 'Employee List', icon: 'format-list-bulleted', type: 'MC', screen: 'EmployeeListScreen' },
        { name: 'Employees Salary', icon: 'cash-multiple', type: 'MC', screen: 'SalaryScreen' }
    ];

    const Reports = [
        { name: 'Profit & Loss Account', icon: 'file-chart-outline', type: 'MC', screen: 'PLAccountScreen' },
        { name: 'Product Report', icon: 'package-variant', type: 'MC', screen: 'ProductReportScreen' }
    ];

    const Locations = [
        { name: 'Countries', icon: 'flag-variant', type: 'MC', screen: 'CountriesScreen' },
        { name: 'States', icon: 'map-outline', type: 'MC', screen: 'StatesScreen' },
        { name: 'Citys', icon: 'city', type: 'MC', screen: 'CitiesScreen' }
    ];

    const renderIcon = (type, name) => {
        const commonProps = { name, size: 22, color: '#18b5a1' };
        switch (type) {
            case 'MC': return <MaterialCommunityIcons {...commonProps} />;
            case 'FA5': return <FontAwesome5 {...commonProps} />;
            case 'Feather': return <Feather {...commonProps} />;
            default: return <Ionicons {...commonProps} />;
        }
    };

    const getSubMenuData = (name) => {
        switch (name) {
            case 'Items': return Items;
            case 'Purchases': return Purchases;
            case 'Financial': return Financial;
            case 'Orders': return Orders;
            case 'Employees': return Employees;
            case 'Reports': return Reports;
            case 'Locations': return Locations;
            default: return [];
        }
    };

    const menufunction = (name, hasSubMenu) => {
        if (hasSubMenu) {
            // Agar wahi menu dobara click ho to band karde, warna naya open
            if (nameMenu === name) {
                setExpandedMenu(!expandedMenu);
                if (expandedMenu) {
                    height.value = withTiming(0, { duration: 200 })
                    rotate.value = withTiming(0, { duration: 100 })
                } else {
                    height.value = withSpring(50, { duration: 200 })
                    rotate.value = withTiming(90, { duration: 100 })
                }
            } else {
                setNameMenu(name);
                setExpandedMenu(true);
                height.value = withSpring(50, { duration: 200 })
                rotate.value = withTiming(90, { duration: 100 })
            }
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={CColors.gradient}
                style={style.drawerHeaderContainer}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <View style={style.userImageContainer}>
                        <Ionicons name='person' size={30} color={'#18b5a1'} />
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Muhammad Yaseen</Text>
                        <Text style={{ color: 'white', fontSize: 14 }}>Admin</Text>
                    </View>
                </View>
            </LinearGradient>
            <ScrollView>
                <View>
                    <FlatList
                        data={menuItems}
                        keyExtractor={(item, index) => item.name + index}
                        scrollEnabled={false}
                        ListFooterComponent={
                            // fotter

                            <LinearGradient
                                start={{ x: 0, y: 1 }}
                                end={{ x: 0, y: 0 }}
                                colors={CColors.gradient}
                                style={{ paddingBottom: 30 }}
                            >
                                <View>
                                    <TouchableOpacity
                                        style={style.itemContainer}
                                        onPress={() => {
                                            na
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: 30, alignItems: 'center', backgroundColor: '#f9e8b2', padding: 4, borderRadius: 4 }}>
                                                <MaterialIcons
                                                    name={'lock-outline'}
                                                    size={20}
                                                    color={'orange'}
                                                />
                                            </View>
                                            <Text style={[style.itemText, { marginLeft: 15 }]}>Logout</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={style.drawerHorizontalLine} />
                                    <View style={style.copyrightContainer}>
                                        <MaterialIcons name="copyright" size={20} color={'#e8eefab0'} />
                                        <Text style={{ color: '#e8eefab0', marginLeft: 4 }}>2026 Rootify Naturals</Text>
                                    </View>
                                    <Text style={[style.copyrightContainer, { color: '#e8eefab0' }]}>Designed & Developed by Explore Logics</Text>
                                    <View style={{ height: 20 }} />
                                </View>
                            </LinearGradient>
                        }
                        // drawer list
                        renderItem={({ item }) => {
                            const subMenuData = getSubMenuData(item.name);
                            const hasSubMenu = subMenuData.length > 0;
                            const isThisMenuExpanded = expandedMenu && nameMenu === item.name;
                            return (
                                <View>
                                    <TouchableOpacity
                                        style={style.itemContainer}
                                        onPress={() => {
                                            { hasSubMenu ? menufunction(item.name, hasSubMenu) : navigation.navigate(item.screen) }

                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            {renderIcon(item.type, item.icon)}
                                            <Text style={[style.itemText, { marginLeft: 15 }]}>{item.name}</Text>
                                        </View>
                                        {hasSubMenu && (
                                            isThisMenuExpanded ? <Animated.View
                                                style={[rotateStyle]}
                                            >
                                                <Ionicons
                                                    name='chevron-forward'
                                                    size={20}
                                                    color={'#18b5a1'}
                                                />
                                            </Animated.View> : <Ionicons
                                                name='chevron-forward'
                                                size={20}
                                                color={'#18b5a1'}
                                            />
                                        )}
                                    </TouchableOpacity>

                                    {
                                        hasSubMenu && isThisMenuExpanded && (
                                            <FlatList
                                                data={subMenuData}
                                                scrollEnabled={false}
                                                keyExtractor={(subItem, index) => "sub" + index}
                                                renderItem={({ item: subItem, index }) => (
                                                    <Animated.View
                                                        style={[animatedStyle, { overflow: 'hidden' }]}
                                                    >
                                                        <TouchableOpacity
                                                            style={style.itemMenuContainer}
                                                            onPress={() => { navigation.navigate(subItem.screen) }}
                                                        >
                                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                {renderIcon(subItem.type, subItem.icon)}
                                                                <Text style={[style.itemText, { marginLeft: 15 }]}>{subItem.name}</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </Animated.View>
                                                )}
                                            />)
                                    }
                                </View>
                            );
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default CustomDrawerScreen;