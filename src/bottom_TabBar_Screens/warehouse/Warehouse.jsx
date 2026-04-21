import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Icons & Components
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar';
import styles from './WarehouseStyle'

const Warehouse = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');

    // Static Data
    const warehouseData = [
        {
            id: 1,
            name: 'Store 1',
            warehouse: 'Warehouse 1',
            address: '123 Street, City, State',
            contact: 'John Doe',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            city: 'Lahore',
        },
        {
            id: 2,
            name: 'Store 2',
            warehouse: 'Warehouse 2',
            address: '456 Street, City, State',
            contact: 'Jane Doe',
            phone: '098-765-4321',
            email: 'jane.doe@example.com',
            city: 'Karachi',
        }
    ];

    // --- Modern Warehouse Card ---
    const renderWarehouseItem = ({ item }) => (
        <View style={styles.wrhCard}>
            <View style={styles.cardMainContent}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7-RFA1xE4wTSP0DZJSJ1AJ8TitBYtkmEYA&s' }}
                        style={styles.cardImage}
                    />
                </View>

                <View style={styles.cardInfo}>
                    <View style={styles.titleRow}>
                        <Text style={styles.cardTitleText}>{item.name}</Text>
                        {/* Active Badge Removed */}
                    </View>

                    <Text style={styles.warehouseLabel}>{item.warehouse}</Text>

                    <View style={styles.infoRow}>
                        <Feather name="phone" size={12} color="#18b5a1" />
                        <Text style={styles.infoText}>{item.phone}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Ionicons name="location-outline" size={13} color="#18b5a1" />
                        <Text style={styles.infoText} numberOfLines={1}>{item.address}</Text>
                    </View>

                    <View style={styles.cityWrapper}>
                        <Text style={styles.cityText}>{item.city}</Text>
                    </View>
                </View>
            </View>

            {/* --- Edit & Delete Buttons Section --- */}
            <View style={styles.actionSection}>
                <TouchableOpacity
                    style={styles.actionBtn}
                    onPress={() => console.log('Edit', item.id)}
                >
                    <Feather name="edit-3" size={18} color="#18b5a1" />
                </TouchableOpacity>

                <View style={styles.actionDivider} />

                <TouchableOpacity
                    style={styles.actionBtn}
                    onPress={() => console.log('Delete', item.id)}
                >
                    <Feather name="trash-2" size={18} color="#FF4D4D" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.wrhMainContainer}>
            <BackArrowAppBar
                title={'Warehouse'}
                addNavigationRouteName={'add-warehouse'}
                isAddButtonVisible={true}
            />

            {/* Search Bar */}
            <View style={styles.headerSection}>
                <View style={styles.searchRow}>
                    <View style={styles.searchContainer}>
                        <Feather name="search" size={18} color="#999" />
                        <TextInput
                            placeholder="Search warehouse..."
                            placeholderTextColor="#999"
                            style={styles.searchInput}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>

                    <TouchableOpacity style={styles.searchBtn} activeOpacity={0.8}>
                        <Feather name="search" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={warehouseData}
                renderItem={renderWarehouseItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listPadding}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No warehouses found</Text>
                }
            />
        </View>
    );
};



export default Warehouse;