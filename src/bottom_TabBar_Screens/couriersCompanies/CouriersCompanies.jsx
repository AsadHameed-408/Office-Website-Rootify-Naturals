import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, Linking } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import styles from './CouriersCompaniesStyle'

const CouriersCompanies = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');

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
    ];

    const renderCourierItem = ({ item }) => (
        <View style={styles.courierCard}>
            <View style={styles.cardHeader}>
                <View style={styles.titleContainer}>
                    <Text style={styles.companyName}>{item.companyName}</Text>
                    <View style={styles.codeBadge}>
                        <Text style={styles.codeText}>{item.code.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.iconBtnEdit}>
                        <MaterialCommunityIcons name="pencil" size={18} color="#18b5a1" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBtnDelete}>
                        <MaterialCommunityIcons name="trash-can-outline" size={18} color="#E74C3C" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.cardBody}>
                {/* Contact Person */}
                <View style={styles.infoRow}>
                    <MaterialCommunityIcons name="account-tie" size={18} color="#7F8C8D" />
                    <Text style={styles.infoTextMain}>{item.contactPerson}</Text>
                </View>

                {/* Phone & Email Row */}
                <View style={styles.contactGrid}>
                    <TouchableOpacity
                        style={styles.gridItem}
                        onPress={() => Linking.openURL(`tel:${item.phone}`)}
                    >
                        <MaterialCommunityIcons name="phone" size={16} color="#18b5a1" />
                        <Text style={styles.gridText}>{item.phone}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.gridItem}
                        onPress={() => Linking.openURL(`mailto:${item.email}`)}
                    >
                        <MaterialCommunityIcons name="email-outline" size={16} color="#18b5a1" />
                        <Text style={styles.gridText} numberOfLines={1}>{item.email}</Text>
                    </TouchableOpacity>
                </View>

                {/* Website */}
                <TouchableOpacity
                    style={styles.websiteRow}
                    onPress={() => Linking.openURL(item.Website)}
                >
                    <MaterialCommunityIcons name="web" size={16} color="#3498DB" />
                    <Text style={styles.websiteText}>{item.Website}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <BackArrowAppBar
                title={'Courier Companies'}
                addNavigationRouteName={'add-Couriers'}
                isAddButtonVisible={true}
            />

            {/* Search Section */}
            <View style={styles.searchWrapper}>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search by company or code..."
                        placeholderTextColor="#95A5A6"
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    {/* <View style={styles.verticalDivider} />
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="filter-variant" size={22} color="#7F8C8D" />
                    </TouchableOpacity> */}
                </View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name="search" size={22} color="#fff" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={CouriersCompaniesList}
                renderItem={renderCourierItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
            <View style={{ height: 50 }} />

        </View>
    )
}


export default CouriersCompanies;