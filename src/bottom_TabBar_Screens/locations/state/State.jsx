

import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBarStyle from '../../../widgets/backarrow_appbar/BackArrowAppBarStyle'
import styles from './StateStyleScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CColors from '../../../constants/CColors';
import { Dropdown } from 'react-native-element-dropdown';

const States = () => {
    const navigation = useNavigation();
    const [modalVisibility, setModalVisibility] = useState(false)
    const [filterVisible, setFilterVisible] = useState(false);
    // city  selection
    const [cityValue, setCityValue] = useState(null);
    const [isCityFocus, setCityFocus] = useState(false);
    const UnitsList = [
        {
            id: 1,
            stateName: 'Gujarat',
            country: 'India',
        },
        {
            id: 2,
            stateName: 'South Australia',
            country: 'Australia',
        },
        {
            id: 3,
            stateName: 'Azad Kashmir',
            country: 'Pakistan',
        },
    ];
    const cityList = [
        { value: '1', label: 'Cash' },
        { value: '2', label: 'Card' },
        { value: '3', label: 'Online' },
    ];
    const stateList = [
        { value: '1', label: 'Assets' },
        { value: '2', label: 'Liability' },
        { value: '3', label: 'Income/Revenue' },
        { value: '4', label: 'Equity/Capital' },
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
                    <Text style={[BackArrowAppBarStyle.headerTitle, { marginLeft: 10 }]}>States</Text>
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
                                onPress={() => { setFilterVisible(!filterVisible) }}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.wrhAddBtn} activeOpacity={0.8} onPress={() => {

                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* dropdown */}
            {filterVisible &&
                <View style={styles.wrhBodyWrapper}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Dropdown
                                style={[styles.dropdown, isCityFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#D9D9D9'}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={cityList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isCityFocus ? 'City' : ''}
                                searchPlaceholder="Search..."
                                value={cityValue}
                                onFocus={() => setCityFocus(true)}
                                onBlur={() => setCityFocus(false)}
                                onChange={item => {
                                    setCityValue(item.value);
                                    setCityFocus(false);
                                }}
                            />
                        </View>


                    </View>
                </View>
            }

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

                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                            <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>Name:</Text>
                                            <Text style={[styles.wrhListContentText,]}>{item.stateName}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                            <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>Country:</Text>
                                            <Text style={[styles.wrhListContentText,]}>{item.country}</Text>
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
                                <Text style={[styles.heading, { color: '#fff' }]}>Create States</Text>
                            </LinearGradient>
                            <View style={{ marginTop: 10, marginBottom: 15, marginHorizontal: 12 }}>
                                <Text style={styles.textLabel}>Name*</Text>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholderTextColor={'#D9D9D9'}
                                        placeholder=" Account Name"
                                    />
                                </View>
                                <View style={{}}>
                                    <Text style={styles.textLabel}>Country*</Text>
                                    <Dropdown
                                        style={[styles.dropdown, isCityFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        placeholderTextColor={'#D9D9D9'}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={cityList}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isCityFocus ? 'Account Type' : ''}
                                        searchPlaceholder="Search..."
                                        value={cityValue}
                                        onFocus={() => setCityFocus(true)}
                                        onBlur={() => setCityFocus(false)}
                                        onChange={item => {
                                            setCityValue(item.value);
                                            setCityFocus(false);
                                        }}
                                    />
                                </View>

                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={CColors.gradient}
                                    style={{ alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderRadius: 30, }}>
                                    <Text style={[{
                                        color: '#fff', fontSize: 16, fontWeight: 'bold',
                                    }]}>Add State</Text>
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

export default States