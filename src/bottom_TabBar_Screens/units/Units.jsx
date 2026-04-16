import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './UnitsStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

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
        <View style={{ flex: 1 }}>
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
                        // navigation.navigate('add-Units')
                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* store list */}
            <ScrollView>
                <View style={{ marginBottom: 40 }}>
                    <FlatList
                        data={UnitsList}
                        contentContainerStyle={styles.wrhListContent}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={1} style={styles.wrhCard}>
                                <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.unitName}</Text>
                                        <Text style={[styles.wrhListContentText,]}>{item.unitType}</Text>
                                        {/* <View style={{ alignItems: 'center', backgroundColor: '#3577f1cc', paddingHorizontal: 8, borderRadius: 4, alignSelf: 'flex-start', }}>
                                    <Text style={[styles.wrhListContentText, { fontWeight: 'bold', color: 'white' }]}>{item.shortName}</Text>
                                </View> */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>SHORT:</Text>
                                                <Text style={[styles.wrhListContentText,]}>{item.shortName}</Text>
                                            </View>
                                            <View>
                                                <Text style={[styles.wrhListContentText, { fontWeight: 'bold', }]}>CONVERSION</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={[styles.wrhListContentText, { fontWeight: 'bold', }]}>FACTOR:</Text>
                                                    <Text style={[styles.wrhListContentText,]}>{item.conversionFactor}</Text>
                                                </View>
                                            </View>
                                        </View>
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

export default Units