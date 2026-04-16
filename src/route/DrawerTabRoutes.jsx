import { View, Text } from 'react-native'
import React from 'react'
import Items from '../bottom_TabBar_Screens/items/Items'
import Orders from '../bottom_TabBar_Screens/orders/AllOrders'
import DashBoardScreen from '../bottom_TabBar_Screens/dashboard/DashBoardScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerScreen from '../drawer/CustomDrawerScreen'
import BottomTabsRoute from '../route/BottomTabsRoute'

const DrawerTabRoutes = () => {
    const DrawerTabRoutes = createDrawerNavigator()
    return (
        <DrawerTabRoutes.Navigator
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={props => <CustomDrawerScreen {...props} />}
        >
            <DrawerTabRoutes.Screen name='bottombar' component={BottomTabsRoute} options={{
                headerShown: false,
                drawerIcon: (size, focused, color) => <Ionicons name='home' size={30} color={color} />
            }} />
            <DrawerTabRoutes.Screen name='Items' component={Items} options={{
                headerShown: false,
                drawerIcon: (size, focused, color) => <Ionicons name='grid' size={30} color={color} />
            }} />
            <DrawerTabRoutes.Screen name='Orders' component={Orders} options={{
                headerShown: false,
                drawerIcon: (size, focused, color) => <Ionicons name='list' size={30} color={color} />
            }} />
        </DrawerTabRoutes.Navigator>
    )
}

export default DrawerTabRoutes