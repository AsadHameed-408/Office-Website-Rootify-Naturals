import { View, Text, TouchableOpacity, TextInput, FlatList, ScrollView, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBarStyle from '../../../widgets/backarrow_appbar/BackArrowAppBarStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CColors from '../../../constants/CColors';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './StateStyleScreen'

const States = () => {
    const navigation = useNavigation();
    const [modalVisibility, setModalVisibility] = useState(false)
    const [filterVisible, setFilterVisible] = useState(false);
    const [cityValue, setModalCountryValue] = useState(null);
    const [isCityFocus, setCityFocus] = useState(false);

    const UnitsList = [
        { id: 1, stateName: 'Gujarat', country: 'India' },
        { id: 2, stateName: 'South Australia', country: 'Australia' },
        { id: 3, stateName: 'Azad Kashmir', country: 'Pakistan' },
    ];

    const countryList = [
        { value: '1', label: 'Pakistan' },
        { value: '2', label: 'India' },
        { value: '3', label: 'Australia' },
    ];

    // --- Modern Card Design ---
    const renderStateCard = ({ item }) => (
        <View style={styles.modernCard}>
            <View style={styles.cardAccent} />
            <View style={styles.cardContent}>
                <View style={styles.cardInfoSection}>
                    <View style={styles.iconCircle}>
                        <MaterialCommunityIcons name="map-marker-radius" size={22} color="#18b5a1" />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.cardStateTitle}>{item.stateName}</Text>
                        <View style={styles.countryBadge}>
                            <MaterialCommunityIcons name="earth" size={12} color="#64748b" />
                            <Text style={styles.countryBadgeText}>{item.country}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardActionsRow}>
                    <TouchableOpacity style={[styles.miniBtn, { backgroundColor: '#f0fdfa' }]}>
                        <Feather name="edit-3" size={16} color="#18b5a1" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.miniBtn, { backgroundColor: '#fef2f2', marginLeft: 8 }]}>
                        <Feather name="trash-2" size={16} color="#ef4444" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>
            {/* AppBar */}
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={CColors.gradient || ['#18b5a1', '#0ea5e9']}
                style={[BackArrowAppBarStyle.HeaderContainer, styles.appBarCustom]}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name='arrow-back' size={24} color={'#ffffff'} />
                    </TouchableOpacity>
                    <Text style={[BackArrowAppBarStyle.headerTitle, { marginLeft: 10 }]}>States</Text>
                </View>
                <TouchableOpacity style={styles.topAddBtn} onPress={() => setModalVisibility(true)}>
                    <MaterialCommunityIcons name={'plus'} size={26} color={'#fff'} />
                </TouchableOpacity>
            </LinearGradient>

            {/* Search Bar */}
            <View style={styles.searchSectionWrapper}>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder="Search state..."
                        placeholderTextColor="#94a3b8"
                        style={styles.searchInputField}
                    />
                    <View style={styles.vDivider} />
                    <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)}>
                        <MaterialCommunityIcons
                            name={filterVisible ? 'filter' : 'filter-outline'}
                            size={22} color={filterVisible ? '#18b5a1' : '#94a3b8'}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.mainSearchBtn}>
                    <Feather name="search" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Dropdown Filter */}
            {filterVisible && (
                <View style={{ paddingHorizontal: 15, marginBottom: 10 }}>
                    <Dropdown
                        style={styles.filterDropdown}
                        placeholderStyle={styles.dropPlaceholder}
                        selectedTextStyle={styles.dropSelectedText}
                        data={countryList}
                        labelField="label"
                        valueField="value"
                        placeholder="Filter by Country"
                        onChange={() => { }}
                    />
                </View>
            )}

            <FlatList
                data={UnitsList}
                renderItem={renderStateCard}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingVertical: 10, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            />

            {/* --- Refined Modal --- */}
            <Modal visible={modalVisibility} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modernModalBox}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={CColors.gradient || ['#18b5a1', '#0ea5e9']}
                            style={styles.modalHeader}
                        >
                            <Text style={styles.modalTitleText}>Create New State</Text>
                        </LinearGradient>

                        <View style={styles.modalPadding}>
                            <Text style={styles.inputLabel}>STATE NAME</Text>
                            <View style={styles.modalInputWrapper}>
                                <Feather name="map" size={18} color="#18b5a1" style={{ marginRight: 10 }} />
                                <TextInput style={styles.modalTextInput} placeholder="e.g. Sindh" placeholderTextColor="#cbd5e1" />
                            </View>

                            <Text style={styles.inputLabel}>SELECT COUNTRY</Text>
                            <Dropdown
                                style={styles.modalDropdown}
                                data={countryList}
                                labelField="label"
                                valueField="value"
                                placeholder="Choose Country"
                                placeholderStyle={{ color: '#cbd5e1', fontSize: 14 }}
                                onChange={item => setModalCountryValue(item.value)}
                            />

                            <View style={styles.modalActionsRow}>
                                <TouchableOpacity style={styles.modalCancelBtn} onPress={() => setModalVisibility(false)}>
                                    <Text style={styles.cancelText}>Discard</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.modalSubmitBtn} onPress={() => setModalVisibility(false)}>
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                        colors={CColors.gradient || ['#18b5a1', '#0ea5e9']}
                                        style={styles.submitGradient}
                                    >
                                        <Text style={styles.submitText}>Save State</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default States;