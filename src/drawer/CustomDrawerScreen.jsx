import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown, FadeInUp, Layout } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import styles from './CustomDrawerStyle'

import CColors from '../constants/CColors';

const { width } = Dimensions.get('window');

const CustomDrawerScreen = () => {
    const navigation = useNavigation();
    const [expandedMenu, setExpandedMenu] = useState(null);

    // --- FULL DATA STRUCTURE (No Missing Screens) ---
    const menuConfig = [
        { name: 'Dashboard', icon: 'view-dashboard-outline', type: 'MC', screen: 'Dashboard' },
        { name: 'Warehouse', icon: 'warehouse', type: 'MC', screen: 'Warehouse' },
        { name: 'Suppliers', icon: 'truck', type: 'Feather', screen: 'Suppliers' },
        { name: 'Customers', icon: 'users', type: 'FA5', screen: 'Customers' },
        { name: 'Stores', icon: 'storefront-outline', type: 'MC', screen: 'Stores' },
        { name: 'Couriers Companies', icon: 'truck-delivery-outline', type: 'MC', screen: 'Couriers' },
        {
            name: 'Items', icon: 'package-variant-closed', type: 'MC',
            subMenu: [
                { name: 'Units', icon: 'ruler', type: 'MC', screen: 'UnitsScreen' },
                { name: 'Brands', icon: 'tag', type: 'MC', screen: 'BrandsScreen' },
                { name: 'Categories', icon: 'format-list-bulleted', type: 'MC', screen: 'CategoriesScreen' },
                { name: 'Items List', icon: 'package-variant', type: 'MC', screen: 'ItemsListScreen' },
            ]
        },
        {
            name: 'Purchases', icon: 'cart-arrow-down', type: 'MC',
            subMenu: [
                { name: 'Purchase List', icon: 'format-list-bulleted', type: 'MC', screen: 'PurchaseListScreen' },
                { name: 'Create Purchase', icon: 'plus', type: 'MC', screen: 'CreatePurchaseScreen' }
            ]
        },
        {
            name: 'Financial', icon: 'finance', type: 'MC',
            subMenu: [
                { name: 'Chart of Accounts', icon: 'format-list-bulleted', type: 'MC', screen: 'COAScreen' },
                { name: 'Expense Categories', icon: 'tag', type: 'MC', screen: 'ExpenseCatScreen' },
                { name: 'Expenses', icon: 'cash-multiple', type: 'MC', screen: 'ExpensesScreen' },
                { name: 'All Expenses', icon: 'file-document-outline', type: 'MC', screen: 'AllExpensesScreen' }
            ]
        },
        {
            name: 'Orders', icon: 'cart-outline', type: 'MC',
            subMenu: [
                { name: 'All Orders', icon: 'playlist-check', type: 'MC', screen: 'AllOrdersScreen' },
                { name: 'Create Order', icon: 'plus', type: 'MC', screen: 'CreateOrderScreen' }
            ]
        },
        {
            name: 'Employees', icon: 'user-tie', type: 'FA5',
            subMenu: [
                { name: 'Roles', icon: 'playlist-check', type: 'MC', screen: 'RolesScreen' },
                { name: 'Employee List', icon: 'format-list-bulleted', type: 'MC', screen: 'EmployeeListScreen' },
                { name: 'Employees Salary', icon: 'cash-multiple', type: 'MC', screen: 'SalaryScreen' }
            ]
        },
        {
            name: 'Reports', icon: 'chart-pie', type: 'MC',
            subMenu: [
                { name: 'Profit & Loss Account', icon: 'file-chart-outline', type: 'MC', screen: 'PLAccountScreen' },
                { name: 'Product Report', icon: 'package-variant', type: 'MC', screen: 'ProductReportScreen' }
            ]
        },
        {
            name: 'Locations', icon: 'map-marker-radius-outline', type: 'MC',
            subMenu: [
                { name: 'Countries', icon: 'flag-variant', type: 'MC', screen: 'CountriesScreen' },
                { name: 'States', icon: 'map-outline', type: 'MC', screen: 'StatesScreen' },
                { name: 'Citys', icon: 'city', type: 'MC', screen: 'CitiesScreen' }
            ]
        },
        // { name: 'Settings', icon: 'settings-outline', type: 'Ionicons', screen: 'Settings' },
    ];

    const renderIcon = (type, name, color = '#18b5a1') => {
        const props = { name, size: 20, color };
        switch (type) {
            case 'MC': return <MaterialCommunityIcons {...props} />;
            case 'FA5': return <FontAwesome5 {...props} size={18} />;
            case 'Feather': return <Feather {...props} />;
            case 'Ionicons': return <Ionicons {...props} />;
            default: return <MaterialIcons {...props} />;
        }
    };

    return (
        <View style={styles.mainContainer}>
            {/* User Profile Header */}
            <LinearGradient colors={CColors.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.header}>
                <View style={styles.profileRow}>
                    <View style={styles.avatarCircle}>
                        <Ionicons name='person' size={30} color={'#18b5a1'} />
                    </View>
                    <View>
                        <Text style={styles.nameText}>Muhammad Yaseen</Text>
                        <View style={styles.roleBadge}>
                            <Text style={styles.roleText}>Admin</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>

            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <View style={styles.menuList}>
                    {menuConfig.map((item, index) => {
                        const isExpanded = expandedMenu === item.name;
                        const hasSub = !!item.subMenu;

                        return (
                            <View key={index}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[styles.menuItem, isExpanded && styles.activeMenuItem]}
                                    onPress={() => {
                                        if (hasSub) {
                                            setExpandedMenu(isExpanded ? null : item.name);
                                        } else if (item.screen === 'Dashboard') {
                                            navigation.navigate('drawer')
                                        } else {
                                            navigation.navigate(item.screen);
                                        }
                                    }}
                                >
                                    <View style={styles.row}>
                                        <View style={[styles.iconBox, isExpanded && { backgroundColor: '#18b5a120' }]}>
                                            {renderIcon(item.type, item.icon, isExpanded ? '#18b5a1' : '#555')}
                                        </View>
                                        <Text style={[styles.menuLabel, isExpanded && { color: '#18b5a1', fontWeight: 'bold' }]}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    {hasSub && (
                                        <Ionicons
                                            name={isExpanded ? 'chevron-down' : 'chevron-forward'}
                                            size={16}
                                            color={isExpanded ? '#18b5a1' : '#ccc'}
                                        />
                                    )}
                                </TouchableOpacity>

                                {/* Sub Menu with Animation */}
                                {hasSub && isExpanded && (
                                    <Animated.View entering={FadeInDown.duration(200)} layout={Layout.springify()} style={styles.subMenuContainer}>
                                        {item.subMenu.map((sub, sIdx) => (
                                            <TouchableOpacity
                                                key={sIdx}
                                                style={styles.subItem}
                                                onPress={() => navigation.navigate(sub.screen)}
                                            >
                                                <View style={styles.subDot} />
                                                <Text style={styles.subLabel}>{sub.name}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </Animated.View>
                                )}
                            </View>
                        );
                    })}
                </View>
            </ScrollView>

            {/* Footer Section */}
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.logoutBtn}>
                    <LinearGradient colors={['#FF9800', '#F44336']} style={styles.logoutIcon}>
                        <MaterialIcons name="power-settings-new" size={18} color="white" />
                    </LinearGradient>
                    <Text style={styles.logoutText}>Sign Out</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <View style={styles.copyrightBox}>
                    <Text style={styles.footerBrand}>Rootify Naturals</Text>
                    <Text style={styles.footerDev}>Developed by Explore Logics</Text>
                </View>
            </View>
        </View>
    );
};


export default CustomDrawerScreen;