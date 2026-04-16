import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './CategoriesStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
    const navigation = useNavigation();
    const BrandsList = [
        {
            id: 1,
            categoriesName: '	Laptop',
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
            status: 'Active',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEjIx7gaLtsy5Xo2JnyeqU3JZd-Z3zvqSTw&s'
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <BackArrowAppBar title={'Categories'} addNavigationRouteName={'add-Categories'} isAddButtonVisible={true} />
            {/* search field */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Type here for search..."
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
                        // navigation.navigate('add-Categories')
                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* store list */}
            <ScrollView>
                <View style={{ marginBottom: 40 }}>
                    <FlatList
                        data={BrandsList}
                        contentContainerStyle={styles.wrhListContent}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={1} style={styles.wrhCard}>
                                <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <View>
                                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.categoriesName}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>WAREHOUSE:</Text>
                                                        <Text style={[styles.wrhListContentText,]}>{item.warehouse}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View>
                                                <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginTop: 10, backgroundColor: 'orange' }} resizeMode='cover' />
                                            </View>
                                        </View>
                                        {/* horizontal divider */}
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            {/* Left */}
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                <Text style={[styles.wrhListContentText, { fontWeight: 'bold', }]}>STATUS:</Text>
                                                <View style={{ backgroundColor: item.status === 'Active' ? '#18b5a1' : '#ff0000', paddingHorizontal: 8, borderRadius: 4, marginLeft: 5 }}>
                                                    <Text style={[styles.wrhListContentText, { color: 'white' }]}>{item.status}</Text>
                                                </View>
                                                <Switch
                                                    trackColor={{ false: '#d1d1d1', true: '#a4e4dc' }}
                                                    thumbColor={item.status === 'Active' ? '#18b5a1' : '#f4f3f4'}
                                                    ios_backgroundColor="#d1d1d1"
                                                    value={item.status === 'Active'}
                                                    onValueChange={(value) => {
                                                        console.log("New Status:", value ? 'Active' : 'Inactive');
                                                    }}
                                                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginLeft: -5 }}
                                                />
                                            </View>
                                            {/* Right */}
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 15 }}>
                                                <View style={{ backgroundColor: '#18b5a1', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', }}>
                                                    <MaterialCommunityIcons name={'pencil-outline'} size={20} color={'white'} />
                                                </View>
                                                <View style={{ backgroundColor: '#ff0000', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                                    <MaterialCommunityIcons name={'trash-can-outline'} size={20} color={'#fff'} />
                                                </View>
                                            </View>
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

export default Categories