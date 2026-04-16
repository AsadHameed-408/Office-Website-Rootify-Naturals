import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './StoresStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const Stores = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([
        {
            id: 1,
            storeName: 'Digital Edge',
            storeUrl: 'digital-edge.com',
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIi...', // JWT style
            instaKey: 3,
            webHookSecretCode: 'WH_live_8k2m9PqR5zLwX1vN',
            status: false,
        },
        {
            id: 2,
            storeName: 'Cloud Nine',
            storeUrl: 'cloud-nine.io',
            accessToken: '9f82d5b6e4a1c3f0b8d2e9a7c4f1b0d3e6a9c2f5b1d4e7a0c8f3',
            instaKey: 0,
            webHookSecretCode: 'sec_77af0db24ce511eda1eb02',
            status: false,
        },
        {
            id: 3,
            storeName: 'Velocity Retail',
            storeUrl: 'velocity.net',
            accessToken: 'at_live_88294nkL0293jsmALPQ928374nkzLA0912jksmALPQ',
            instaKey: 0,
            webHookSecretCode: '0',
            status: false,
        },
        {
            id: 4,
            storeName: 'Neon Supply',
            storeUrl: 'neon-supply.com',
            accessToken: 'sk_test_51MzS2hLpYt3GfX9v6aR8zQ2wB4nK7mJ1pL9sT0vX4zC8',
            instaKey: 4,
            webHookSecretCode: '0',
            status: false,
        },
        {
            id: 5,
            storeName: 'Zenith Labs',
            storeUrl: 'zenith-labs.co',
            accessToken: '7b3d9f1a-5c2e-4b8a-9d6f-0e1c2a3b4d5e',
            instaKey: 0,
            webHookSecretCode: 'v3_signing_key_9xTzQ4pLmB',
            status: false,
        }
    ]);

    const toggleSwitch = (id) => {
        setData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, status: !item.status } : item
            )
        );
    };

    return (
        <View>
            <BackArrowAppBar title={'Store'} addNavigationRouteName={'add-stores'} isAddButtonVisible={true} />
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
                        // navigation.navigate('add-stores')
                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* store list */}
            <ScrollView>
                <View style={{ marginBottom: 40 }}>
                    <FlatList
                        data={data}
                        contentContainerStyle={styles.wrhListContent}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        extraData={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.9} style={styles.wrhCard}>
                                <View style={{ flex: 1, paddingLeft: 15, flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.storeName}</Text>
                                        <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>{item.storeUrl}</Text>
                                    </View>
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'flex-start'
                                    }}>
                                        {/* switch */}
                                        <Switch
                                            trackColor={item.status === true ? '#a4e4dc' : '#d1d1d1'}
                                            thumbColor={item.status === true ? '#18b5a1' : '#f4f3f4'}
                                            ios_backgroundColor="#d1d1d1"
                                            value={item.status}
                                            onValueChange={() => toggleSwitch(item.id)}
                                            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginLeft: -5 }}
                                        />

                                        <Text style={[
                                            styles.wrhListContentText,
                                            {
                                                fontWeight: 'bold',
                                                fontSize: 14,
                                                marginLeft: 4,
                                                color: item.status === true ? '#18b5a1' : '#767577'
                                            }
                                        ]}>
                                            {item.status === true ? 'Active' : 'Inactive'}
                                        </Text>
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

export default Stores