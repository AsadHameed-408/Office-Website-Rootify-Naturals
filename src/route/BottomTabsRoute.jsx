import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// screens
import DashBoardScreen from '../bottom_TabBar_Screens/dashboard/DashBoardScreen'
import OrdersScreen from '../bottom_TabBar_Screens/orders/AllOrders'
import Items from '../bottom_TabBar_Screens/items/Items'
import Suppliers from '../bottom_TabBar_Screens/suppliers/Suppliers'
import More from '../bottom_TabBar_Screens/more/More'
import DrawerTabRoutes from './DrawerTabRoutes'
//  Icons
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const BottomTabsRoute = () => {
    const bottomTabs = createBottomTabNavigator()
    return (
        <bottomTabs.Navigator screenOptions={{ headerShown: false, }}>
            <bottomTabs.Screen name='Dashboard' component={DashBoardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) =>
                        <Entypo name='home' size={size} color={color} />
                }}
            />
            <bottomTabs.Screen name='Orders' component={OrdersScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) =>
                        <MaterialCommunityIcons name='shopping-outline' size={size} color={color} />
                }}
            />
            <bottomTabs.Screen name='Items' component={Items}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) =>
                        <MaterialCommunityIcons name='package-variant-closed' size={size} color={color} />
                }}
            />
            <bottomTabs.Screen name='Suppliers' component={Suppliers}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) =>
                        <FontAwesome5 name='users' size={size} color={color} />
                }}
            />
            <bottomTabs.Screen name='More' component={More}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused, color }) =>
                        <MaterialCommunityIcons name='dots-horizontal' size={size} color={color} />
                }}
            />
        </bottomTabs.Navigator>
    )
}

export default BottomTabsRoute