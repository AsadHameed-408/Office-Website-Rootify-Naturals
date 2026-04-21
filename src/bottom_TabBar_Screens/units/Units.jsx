import { View, Text, TouchableOpacity, TextInput, FlatList, Switch, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import styles from './UnitsStyle'

const Units = () => {
    const navigation = useNavigation();
    const UnitsList = [
        {
            id: 1,
            unitName: 'Weight',
            unitType: 'Weight (Tola, Masha, Ounce, Pound, Gram, Milligram, Kilogram, Ton)',
            shortName: 'Wgt',
            conversionFactor: 1.00,
            status: 'Active',
        },
        {
            id: 2,
            unitName: 'Item',
            unitType: 'Piece (Item, Box, Packet, Dozen, Pair, Carton, Bundle, Unit, Bottle, Sack)',
            shortName: 'item',
            conversionFactor: 1.00,
            status: 'Inactive',
        },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
            <BackArrowAppBar title={'Units'} addNavigationRouteName={'add-Units'} isAddButtonVisible={true} />

            {/* search field */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Type here for search..."
                            placeholderTextColor="#9e9595"
                            style={styles.wrhInputField}
                        />
                        {/* Filter and Divider Removed from here */}
                    </View>

                    <TouchableOpacity style={styles.wrhAddBtn} activeOpacity={0.8}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Units list */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 40 }}>
                    <FlatList
                        data={UnitsList}
                        keyExtractor={item => item.id.toString()}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={1} style={styles.wrhCard}>
                                <View style={{ flex: 1, paddingLeft: 5 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>{item.unitName}</Text>
                                    </View>

                                    <Text style={styles.wrhListContentText}>{item.unitType}</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>SHORT: </Text>
                                            <Text style={styles.wrhListContentText}>{item.shortName}</Text>
                                        </View>

                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Text style={[styles.wrhListContentText, { fontWeight: 'bold', fontSize: 11 }]}>CONVERSION FACTOR</Text>
                                            <Text style={styles.wrhListContentText}>{item.conversionFactor}</Text>
                                        </View>
                                    </View>

                                    <View style={{ height: 1, backgroundColor: '#eee', marginVertical: 12 }} />

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>STATUS:</Text>
                                            <View style={{
                                                backgroundColor: item.status === 'Active' ? '#18b5a1' : '#ff4444',
                                                paddingHorizontal: 8,
                                                borderRadius: 4,
                                                marginLeft: 8
                                            }}>
                                                <Text style={{ color: 'white', fontSize: 12 }}>{item.status}</Text>
                                            </View>
                                            <Switch
                                                trackColor={{ false: '#d1d1d1', true: '#a4e4dc' }}
                                                thumbColor={item.status === 'Active' ? '#18b5a1' : '#f4f3f4'}
                                                value={item.status === 'Active'}
                                                style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                                            />
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity style={styles.actionIconBtn}>
                                                <MaterialCommunityIcons name={'pencil-outline'} size={18} color={'white'} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.actionIconBtn, { backgroundColor: '#ff4444', marginLeft: 8 }]}>
                                                <MaterialCommunityIcons name={'trash-can-outline'} size={18} color={'white'} />
                                            </TouchableOpacity>
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


export default Units;