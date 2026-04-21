import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    Modal,
    StyleSheet,
    StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './CitiesStyle'

// Constants
import CColors from '../../../constants/CColors';

const Cities = () => {
    const navigation = useNavigation();

    // Data States
    const initialData = [
        { id: 1, cityName: 'Karachi', state: 'Sindh', country: 'Pakistan' },
        { id: 2, cityName: 'Lahore', state: 'Punjab', country: 'Pakistan' },
        { id: 3, cityName: 'Ahmedabad', state: 'Gujarat', country: 'India' },
        { id: 4, cityName: 'Adelaide', state: 'South Australia', country: 'Australia' },
        { id: 5, cityName: 'Islamabad', state: 'Federal', country: 'Pakistan' },
    ];

    const [filteredData, setFilteredData] = useState(initialData);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);

    // Logic States
    const [searchText, setSearchText] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    // Dropdown Data
    const countryOptions = [
        { label: 'All Countries', value: null },
        { label: 'Pakistan', value: 'Pakistan' },
        { label: 'India', value: 'India' },
        { label: 'Australia', value: 'Australia' },
    ];

    // Filter Logic: Jab bhi search ya dropdown change ho, ye chale
    useEffect(() => {
        let data = initialData;

        // Search text se filter
        if (searchText) {
            data = data.filter(item =>
                item.cityName.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        // Country dropdown se filter
        if (selectedCountry) {
            data = data.filter(item => item.country === selectedCountry);
        }

        setFilteredData(data);
    }, [searchText, selectedCountry]);

    const renderCityCard = ({ item }) => (
        <View style={styles.professionalCard}>
            <View style={styles.cardMainSection}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="office-building-marker" size={24} color="#18b5a1" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.cityNameLabel}>{item.cityName}</Text>
                    <View style={styles.locationBadgeRow}>
                        <View style={styles.subBadge}><Text style={styles.subBadgeText}>{item.state}</Text></View>
                        <View style={[styles.subBadge, { backgroundColor: '#f0fdf4' }]}><Text style={[styles.subBadgeText, { color: '#16a34a' }]}>{item.country}</Text></View>
                    </View>
                </View>
                <View style={styles.cardActionsColumn}>
                    <TouchableOpacity style={styles.miniActionBtn}><Feather name="edit" size={16} color="#18b5a1" /></TouchableOpacity>
                    <TouchableOpacity style={[styles.miniActionBtn, { marginTop: 8 }]}><Feather name="trash-2" size={16} color="#ff4d4d" /></TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* App Bar */}
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={CColors.gradient || ['#18b5a1', '#0ea5e9']} style={styles.headerGradient}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><MaterialIcons name="arrow-back" size={24} color="#fff" /></TouchableOpacity>
                    <Text style={styles.headerTitle}>Cities</Text>
                </View>
                <TouchableOpacity style={styles.addIconBtn} onPress={() => setModalVisibility(true)}>
                    <MaterialCommunityIcons name="plus" size={28} color="#fff" />
                </TouchableOpacity>
            </LinearGradient>

            {/* Search Section */}
            <View style={styles.searchSection}>
                <View style={styles.wrhInputContainer}>
                    <TextInput
                        placeholder="Search city..."
                        placeholderTextColor="#9e9595"
                        style={styles.wrhInputField}
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                    />
                    <View style={styles.wrhVerticalDivider} />
                    <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)}>
                        <MaterialCommunityIcons name={filterVisible ? "filter" : "filter-outline"} size={24} color={filterVisible ? "#18b5a1" : "#9e9595"} style={styles.wrhFilterIcon} />
                    </TouchableOpacity>
                </View>
                {/* Search Button (Functional) */}
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name="search" size={22} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Collapsible Filter Dropdown */}
            {filterVisible && (
                <View style={styles.filterDropdownRow}>
                    <Dropdown
                        style={styles.dropdownFullWidth}
                        data={countryOptions}
                        labelField="label"
                        valueField="value"
                        placeholder="Filter by Country"
                        value={selectedCountry}
                        onChange={item => setSelectedCountry(item.value)}
                        placeholderStyle={{ color: '#9e9595', fontSize: 14 }}
                    />
                </View>
            )}

            <FlatList
                data={filteredData}
                renderItem={renderCityCard}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20, color: '#94a3b8' }}>No cities found</Text>}
            />

            {/* Modal - Same as before but teeno fields k sath */}
            <Modal visible={modalVisibility} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.modernModalContent}>
                        <View style={styles.modalHandle} />
                        <View style={styles.modalHeaderContainer}>
                            <Text style={styles.modernModalTitle}>Add New City</Text>
                        </View>
                        <View style={styles.modalBody}>
                            <Text style={styles.newInputLabel}>City Name*</Text>
                            <View style={styles.iconicInputContainer}>
                                <MaterialCommunityIcons name="city-variant-outline" size={20} color="#18b5a1" style={styles.inputIcon} />
                                <TextInput style={styles.iconicInputField} placeholder="City name" />
                            </View>
                            <Text style={styles.newInputLabel}>State*</Text>
                            <View style={styles.iconicInputContainer}>
                                <MaterialCommunityIcons name="map-marker-outline" size={20} color="#18b5a1" style={styles.inputIcon} />
                                <TextInput style={styles.iconicInputField} placeholder="State" />
                            </View>
                            <Text style={styles.newInputLabel}>Country*</Text>
                            <Dropdown
                                style={styles.modernDropdownFull}
                                data={countryOptions.filter(o => o.value !== null)}
                                labelField="label"
                                valueField="value"
                                placeholder="Select Country"
                                onChange={() => { }}
                            />
                            <View style={styles.modalActionRow}>
                                <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisibility(false)}><Text style={styles.cancelBtnText}>Cancel</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.confirmBtn} onPress={() => setModalVisibility(false)}>
                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={CColors.gradient || ['#18b5a1', '#0ea5e9']} style={styles.confirmGradient}>
                                        <Text style={styles.confirmText}>Save City</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};



export default Cities;