import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import DashBoardScreen from '../bottom_TabBar_Screens/dashboard/DashBoardScreen'
import OrdersScreen from '../bottom_TabBar_Screens/orders/AllOrders'
import Items from '../bottom_TabBar_Screens/items/Items'
import Suppliers from '../bottom_TabBar_Screens/suppliers/Suppliers'
import Profile from '../bottom_TabBar_Screens/profile/Profile'

// Icons
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AllOrdersBottomBar from '../bottom_TabBar_Screens/bottomBarScreens/AllOrdersBottomBar'
import SuppliersBottomBar from '../bottom_TabBar_Screens/bottomBarScreens/SupplierBottomBar'

const Tab = createBottomTabNavigator()

const BottomTabsRoute = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#18b5a1',
                tabBarInactiveTintColor: '#999',
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.labelStyle,
                tabBarHideOnKeyboard: true,
                tabBarButton: (props) => (
                    <TouchableOpacity
                        {...props}
                        activeOpacity={1}
                        style={props.style}
                    />
                )

            }}
            ta
        >
            <Tab.Screen
                name='Dashboard'
                component={DashBoardScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ size, color, focused }) => (
                        <View style={focused && styles.activeIconContainer}>
                            <Entypo name='home' size={focused ? 22 : 20} color={color} />
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name='Orders'
                component={AllOrdersBottomBar}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused && styles.activeIconContainer}>
                            <MaterialCommunityIcons
                                name={focused ? 'shopping' : 'shopping-outline'}
                                size={focused ? 24 : 22}
                                color={color}
                            />
                        </View>
                    )
                }}
            />
            {/* 
            <Tab.Screen
                name='Items'
                component={Items}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused && styles.activeIconContainer}>
                            <MaterialCommunityIcons
                                name='package-variant-closed'
                                size={focused ? 24 : 22}
                                color={color}
                            />
                        </View>
                    )
                }}
            /> */}

            <Tab.Screen
                name='Suppliers'
                component={SuppliersBottomBar}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused && styles.activeIconContainer}>
                            <FontAwesome5 name='users' size={focused ? 18 : 18} color={color} />
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused && styles.activeIconContainer}>
                            <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} size={focused ? 26 : 24} color={color} />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        borderTopWidth: 0,
        elevation: 20, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        height: Platform.OS === 'ios' ? 85 : 110,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10,
        paddingTop: 10,
    },
    labelStyle: {
        fontSize: 11,
        fontWeight: '600',
        marginBottom: 2,
    },
    activeIconContainer: {
        backgroundColor: '#18b5a115', // Halka sa highlight background
        padding: 0,
        borderRadius: 12,
        marginBottom: 2,
    }
})

export default BottomTabsRoute