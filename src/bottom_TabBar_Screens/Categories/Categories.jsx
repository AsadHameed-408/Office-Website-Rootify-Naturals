import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import styles from './CategoriesStyle'

const Categories = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');

    const BrandsList = [
        {
            id: 1,
            categoriesName: 'Laptop',
            warehouse: 'EL',
            status: 'Active',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
        {
            id: 2,
            categoriesName: 'AJWA DATES & POWDER',
            warehouse: 'Taimoor Traders',
            status: 'Active',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
        {
            id: 3,
            categoriesName: 'MENs WEAR',
            warehouse: 'Falak Traders',
            status: 'Inactive',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
    ];

    const renderCategoryItem = ({ item }) => (
        <View style={styles.wrhCard}>
            {/* Left: Image */}
            <Image source={{ uri: item.image }} style={styles.categoryImage} resizeMode='cover' />

            {/* Middle: Content */}
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <Text style={styles.categoryTitle} numberOfLines={1}>{item.categoriesName.trim()}</Text>
                    <View style={[styles.statusBadge, { backgroundColor: item.status === 'Active' ? '#E8F8F5' : '#FDEDEC' }]}>
                        <Text style={[styles.statusText, { color: item.status === 'Active' ? '#18b5a1' : '#E74C3C' }]}>{item.status}</Text>
                    </View>
                </View>

                <View style={styles.infoRow}>
                    <MaterialCommunityIcons name="office-building" size={14} color="#7F8C8D" />
                    <Text style={styles.warehouseText}>{item.warehouse}</Text>
                </View>

                <View style={styles.actionRow}>
                    <View style={styles.switchContainer}>
                        <Switch
                            trackColor={{ false: '#D5D8DC', true: '#A4E4DC' }}
                            thumbColor={item.status === 'Active' ? '#18b5a1' : '#F4F6F7'}
                            value={item.status === 'Active'}
                            style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                        />
                    </View>

                    <View style={styles.buttonGroup}>
                        <TouchableOpacity style={styles.editBtn}>
                            <MaterialCommunityIcons name="pencil" size={18} color="#18b5a1" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteBtn}>
                            <MaterialCommunityIcons name="trash-can-outline" size={18} color="#E74C3C" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <BackArrowAppBar title={'Categories'} addNavigationRouteName={'add-Categories'} isAddButtonVisible={true} />

            {/* Search Header */}
            <View style={styles.headerWrapper}>
                <View style={styles.searchBox}>
                    <TextInput
                        placeholder="Search category..."
                        placeholderTextColor="#95A5A6"
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.filterBtn}>
                        <MaterialCommunityIcons name="filter-variant" size={22} color="#7F8C8D" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.searchSubmitBtn}>
                    <Feather name="search" size={22} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* List */}
            <FlatList
                data={BrandsList}
                keyExtractor={item => item.id.toString()}
                renderItem={renderCategoryItem}
                contentContainerStyle={styles.listPadding}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}


export default Categories;