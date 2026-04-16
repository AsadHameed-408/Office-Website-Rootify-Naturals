import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBarStyle from '../../../widgets/backarrow_appbar/BackArrowAppBarStyle'
import styles from './countrysStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CColors from '../../../constants/CColors';
import { Dropdown } from 'react-native-element-dropdown';

const Country = () => {
    const navigation = useNavigation();
    const [modalVisibility, setModalVisibility] = useState(false)
    const UnitsList = [
        {
            id: 1,
            country: 'India',
            countryCode: 'IND',
        },
        {
            id: 2,
            country: 'Australia',
            countryCode: 'AUS',
        },
        {
            id: 3,
            country: 'Pakistan',
            countryCode: 'PK',
        },
    ];


    return (
        <View style={{ flex: 1 }}>
            {/* back arrow  */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={CColors.gradient}
                style={[BackArrowAppBarStyle.HeaderContainer, {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15
                }]}
            >
                {/* Left Side */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={BackArrowAppBarStyle.iconButton}
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialIcons name='arrow-back' size={24} color={'#ffffff'} />
                    </TouchableOpacity>
                    <Text style={[BackArrowAppBarStyle.headerTitle, { marginLeft: 10 }]}>Countries</Text>
                </View>

                {/* Right Side */}
                <TouchableOpacity
                    style={BackArrowAppBarStyle.wrhAddBtn}
                    activeOpacity={0.8}
                    onPress={() => { setModalVisibility(!modalVisibility) }}
                >
                    <MaterialCommunityIcons name={'plus'} size={24} color={'#fff'} />
                </TouchableOpacity>
            </LinearGradient>
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
                        }}>
                            <MaterialCommunityIcons
                                name={'filter-outline'}
                                size={24}
                                color={'#9e9595'}
                                style={styles.wrhFilterIcon}
                                onPress={() => { }}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.wrhAddBtn} activeOpacity={0.8} onPress={() => {

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
                                    <View style={{ flex: 1 }}>
                                        {/* <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text> */}
                                        {/*  middle */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                            <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>Name:</Text>
                                            <Text style={[styles.wrhListContentText,]}>{item.country}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                            <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>Code:</Text>
                                            <Text style={[styles.wrhListContentText,]}>{item.countryCode}</Text>
                                        </View>
                                        {/* divider */}
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
                                        {/* button */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            {/* Right */}
                                            <View style={{ flex: 1, backgroundColor: '#18b5a1', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', }}>
                                                <MaterialCommunityIcons name={'pencil-outline'} size={20} color={'white'} />
                                            </View>
                                            <View style={{ flex: 1, backgroundColor: '#ff0000', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                                <MaterialCommunityIcons name={'trash-can-outline'} size={20} color={'#fff'} />
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
            {/* modal */}
            <View>
                <Modal
                    visible={modalVisibility}
                    transparent={true}
                    animationType="slide">
                    <View
                        style={styles.modalBackGroundContainer}>
                        <View style={styles.modelContainer}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={CColors.gradient}
                                style={{ alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderTopRightRadius: 8, borderTopLeftRadius: 8 }}>
                                <Text style={[styles.heading, { color: '#fff' }]}>Create Country</Text>
                            </LinearGradient>
                            <View style={{ marginTop: 10, marginBottom: 15, marginHorizontal: 12 }}>
                                <Text style={styles.textLabel}>Name*</Text>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholderTextColor={'#D9D9D9'}
                                        placeholder="Cpuntry Name"
                                    />
                                </View>
                                <Text style={styles.textLabel}>Code*</Text>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholderTextColor={'#D9D9D9'}
                                        placeholder="Country Code"
                                    />
                                </View>

                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={CColors.gradient}
                                    style={{ alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderRadius: 30, }}>
                                    <Text style={[{
                                        color: '#fff', fontSize: 16, fontWeight: 'bold',
                                    }]}>Add Country</Text>
                                </LinearGradient>
                                <TouchableOpacity onPress={() => { setModalVisibility(false) }}
                                    style={styles.closeBtn}>
                                    <Text style={styles.textLabel}>Close</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
        </View >
    )
}

export default Country