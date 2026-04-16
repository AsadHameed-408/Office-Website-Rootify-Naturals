import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './CouriersCompaniesStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const CouriersCompanies = () => {
    const navigation = useNavigation();
    const CouriersCompaniesList = [
        {
            id: 1,
            companyName: 'TCS Logistics',
            code: 'tcs',
            contactPerson: 'Arsalan Ahmed',
            phone: '021-111-123-456',
            email: 'info@tcs-express.com',
            Website: 'https://www.tcs-express.com',
        },
        {
            id: 2,
            companyName: 'Leopard Couriers',
            code: 'lcs',
            contactPerson: 'Saima Khan',
            phone: '051-444-555-666',
            email: 'support@leopardscourier.com',
            Website: 'https://leopardscourier.com',
        },
        {
            id: 3,
            companyName: 'BlueEx Delivery',
            code: 'blueex',
            contactPerson: 'Zain Malik',
            phone: '0300-829-1234',
            email: 'ops@blueex.pk',
            Website: 'https://www.blueex.com',
        },
        {
            id: 4,
            companyName: 'Trax Online',
            code: 'trax',
            contactPerson: 'Hamza Sheikh',
            phone: '021-343-221-99',
            email: 'business@trax.pk',
            Website: 'https://trax.pk',
        },
        {
            id: 5,
            companyName: 'M&P Logistics',
            code: 'mnp',
            contactPerson: 'Fatima Noor',
            phone: '021-111-202-202',
            email: 'contact@mulphilog.com',
            Website: 'https://mulphilog.com',
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <BackArrowAppBar title={'Courier Companies'} addNavigationRouteName={'add-Couriers'} isAddButtonVisible={true} />
            {/* search field */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Search store..."
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
                        // navigation.navigate('add-Couriers')
                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* store list */}
            <ScrollView>
                <View style={{ marginBottom: 40 }}>
                    <FlatList
                        data={CouriersCompaniesList}
                        contentContainerStyle={styles.wrhListContent}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.9} style={styles.wrhCard}>
                                <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.companyName}</Text>
                                        <View style={{ alignItems: 'center', backgroundColor: '#3577f1cc', paddingHorizontal: 8, borderRadius: 4, alignSelf: 'flex-start', }}>
                                            <Text style={[styles.wrhListContentText, { fontWeight: 'bold', color: 'white' }]}>{item.code}</Text>
                                        </View>
                                        <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>{item.contactPerson}</Text>
                                        <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>{item.phone}</Text>
                                        <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>{item.email}</Text>
                                        <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>{item.Website}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 15 }}>
                                        <View style={{ backgroundColor: '#18b5a1', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', }}>
                                            <MaterialCommunityIcons name={'pencil-outline'} size={20} color={'white'} />
                                        </View>
                                        <View style={{ backgroundColor: '#ff0000', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                            <MaterialCommunityIcons name={'trash-can-outline'} size={20} color={'#fff'} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default CouriersCompanies