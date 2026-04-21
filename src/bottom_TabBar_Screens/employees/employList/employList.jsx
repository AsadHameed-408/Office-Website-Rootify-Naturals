import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Switch
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import styles from './employListStyle'
import { useNavigation } from '@react-navigation/native';

const EM_DATA = [
    {
        id: '1',
        name: 'Shamas',
        username: 'shamas1221',
        email: 'vekeg89904@dretnar.com',
        phone: '+92 333 2323 233',
        warehouse: 'Explore Traders',
        CNIC: '31101 0112121 2',
        role: 'Sale Men',
        salary: '$25000.00',
        active: true,
    },
    {
        id: '2',
        name: 'Nawaz Sharif',
        username: 'nawazsharif',
        email: 'duvu@mailinator.com',
        phone: '+92 345 5454 852',
        warehouse: 'Explore Traders',
        CNIC: '98857 5896545 8',
        role: 'Sale Men',
        salary: '$15000.00',
        active: true,
    }
];

const CompactEmployeeList = () => {
    const [search, setSearch] = useState('');
    const navigation = useNavigation()

    const EmployeeCard = ({ item }) => {
        const [isEnabled, setIsEnabled] = useState(item.active);


        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate('EmployDetailView') }}>
                <View style={styles.card}>
                    {/* Header: Name, Role & Action Icons */}
                    <View style={styles.cardHeader}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.roleText}>{item.role} • @{item.username}</Text>
                        </View>
                        <View style={styles.actionGroup}>
                            <TouchableOpacity style={[styles.miniBtn, { backgroundColor: '#1ABC9C' }]}>
                                <MCIcon name="pencil" size={14} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.miniBtn, { backgroundColor: '#e74c3c' }]}>
                                <MCIcon name="trash-can" size={14} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Details Section */}
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailRow}>
                            <MCIcon name="email-outline" size={13} color="#7f8c8d" />
                            <Text style={styles.detailText} numberOfLines={1}>{item.email}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <MCIcon name="phone-outline" size={13} color="#7f8c8d" />
                            <Text style={styles.detailText}>{item.phone}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <MCIcon name="warehouse" size={13} color="#7f8c8d" />
                            <Text style={styles.detailText}>{item.warehouse}</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <MCIcon name="card-account-details-outline" size={13} color="#7f8c8d" />
                            <Text style={styles.detailText}>{item.CNIC}</Text>
                        </View>
                    </View>

                    {/* Footer: Salary & Status Toggle */}
                    <View style={styles.cardFooter}>
                        <Text style={styles.salaryValue}>{item.salary}</Text>
                        <View style={styles.statusBox}>
                            <Text style={[styles.statusLabel, { color: isEnabled ? '#1ABC9C' : '#e74c3c' }]}>
                                {isEnabled ? 'Active' : 'Inactive'}
                            </Text>
                            <Switch
                                value={isEnabled}
                                onValueChange={setIsEnabled}
                                trackColor={{ false: '#eee', true: '#a4e4dc' }}
                                thumbColor={isEnabled ? '#1ABC9C' : '#f4f3f4'}
                                style={{ transform: [{ scaleX: 0.65 }, { scaleY: 0.65 }], marginRight: -8 }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <BackArrowAppBar title={'Employees'} isAddButtonVisible={true} addNavigationRouteName={'AddEmployeeScreen'} />
            {/* Search Section only */}
            <View style={styles.searchWrapper}>
                <View style={styles.searchBar}>
                    <MCIcon name="magnify" size={20} color="#95a5a6" style={{ marginLeft: 10 }} />
                    <TextInput
                        placeholder="Search records..."
                        style={styles.searchInput}
                        value={search}
                        onChangeText={setSearch}
                        placeholderTextColor="#95a5a6"
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} activeOpacity={0.7}>
                    <MCIcon name="magnify" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={EM_DATA}
                renderItem={({ item }) => <EmployeeCard item={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listPadding}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};


export default CompactEmployeeList;