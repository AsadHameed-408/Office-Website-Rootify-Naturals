import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './BrandsStyle'

const Brands = () => {
    const [searchText, setSearchText] = useState('');

    const [brandsData, setBrandsData] = useState([
        {
            id: 1,
            brandName: 'Brand',
            warehouse: 'EL',
            status: 'Active',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
        {
            id: 2,
            brandName: 'AJWA DATES & POWDER',
            warehouse: 'Taimoor Traders',
            status: 'Active',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
        {
            id: 3,
            brandName: 'BRAVON',
            warehouse: 'Falak Traders',
            status: 'Inactive',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
    ]);

    // Switch toggle function
    const handleStatusToggle = (id) => {
        setBrandsData(currentData =>
            currentData.map(item =>
                item.id === id
                    ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' }
                    : item
            )
        );
    };

    const renderBrandItem = ({ item }) => (
        <View style={styles.wrhCard}>
            <View style={styles.cardMainContent}>
                <View style={{ flex: 1 }}>
                    <View style={styles.rowBetween}>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={styles.brandTitle}>{item.brandName}</Text>
                            <View style={styles.infoRow}>
                                <Text style={styles.labelTxt}>WAREHOUSE: </Text>
                                <Text style={styles.valueTxt}>{item.warehouse}</Text>
                            </View>
                        </View>
                        <Image source={{ uri: item.image }} style={styles.brandImage} resizeMode='contain' />
                    </View>

                    <View style={styles.horizontalDivider} />

                    <View style={styles.rowBetween}>
                        <View style={styles.statusSection}>
                            <Text style={styles.labelTxt}>STATUS: </Text>
                            <View style={[styles.statusBadge, { backgroundColor: item.status === 'Active' ? '#1ABC9C' : '#E74C3C' }]}>
                                <Text style={styles.statusTxt}>{item.status}</Text>
                            </View>
                            <Switch
                                trackColor={{ false: '#D1D1D1', true: '#A4E4DC' }}
                                thumbColor={item.status === 'Active' ? '#1ABC9C' : '#F4F3F4'}
                                value={item.status === 'Active'}
                                style={styles.switchStyle}
                                // Switch fix: Function call to update state
                                onValueChange={() => handleStatusToggle(item.id)}
                            />
                        </View>

                        <View style={styles.actionContainer}>
                            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#1ABC9C' }]}>
                                <MaterialCommunityIcons name="pencil" size={18} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#E74C3C' }]}>
                                <MaterialCommunityIcons name="trash-can-outline" size={18} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.wrhMainContainer}>
            <BackArrowAppBar title={'Brands'} addNavigationRouteName={'add-Brands'} isAddButtonVisible={true} />

            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Type here for search..."
                            placeholderTextColor="#9e9595"
                            style={styles.wrhInputField}
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                    </View>

                    {/* Search Button Retained */}
                    <TouchableOpacity style={styles.wrhSearchBtn} activeOpacity={0.8}>
                        <Feather name='search' size={20} color='#fff' />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={brandsData.filter(b => b.brandName.toLowerCase().includes(searchText.toLowerCase()))}
                renderItem={renderBrandItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.wrhListContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};



export default Brands;