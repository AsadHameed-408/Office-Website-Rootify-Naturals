import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Modal, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../constants/CColors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AddCategoriesStyle'

const AddCategories = () => {
    const [warehouseValue, setWarehouseValue] = useState(null);
    const [isWarehouseFocus, setWarehouseFocus] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];

    return (
        <SafeAreaView style={styles.mainContainer}>
            <BackArrowAppBar title={'Add Category'} />

            <ScrollView contentContainerStyle={styles.scrollBody} showsVerticalScrollIndicator={false}>

                {/* 1. Image Picker Section */}
                <TouchableOpacity
                    style={styles.imagePickerContainer}
                    activeOpacity={0.7}
                    onPress={() => setModalVisible(true)}
                >
                    <View style={styles.imagePickerContent}>
                        <MaterialCommunityIcons name={'folder-image'} size={48} color={'#BDC3C7'} />
                        <Text style={styles.imagePickerText}>Upload Category Image</Text>
                        <Text style={styles.imagePickerSubText}>SVG, PNG or JPG (Max 1MB)</Text>
                    </View>
                </TouchableOpacity>

                {/* 2. Warehouse Dropdown */}
                <Text style={styles.label}>Warehouse <Text style={{ color: '#E74C3C' }}>*</Text></Text>
                <Dropdown
                    style={[styles.dropdown, isWarehouseFocus && { borderColor: '#1ABC9C' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    itemTextStyle={styles.itemTextStyle}
                    data={wareHouseList}
                    maxHeight={250}
                    labelField="label"
                    valueField="value"
                    placeholder="Assign to Warehouse"
                    value={warehouseValue}
                    onFocus={() => setWarehouseFocus(true)}
                    onBlur={() => setWarehouseFocus(false)}
                    onChange={item => {
                        setWarehouseValue(item.value);
                        setWarehouseFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name="home-group" size={20} color="#7F8C8D" style={{ marginRight: 10 }} />
                    )}
                />

                {/* 3. Category Name Input */}
                <Text style={styles.label}>Category Name <Text style={{ color: '#E74C3C' }}>*</Text></Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="shape-outline" size={20} color="#7F8C8D" style={{ marginLeft: 10 }} />
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Electronics, Fashion"
                        placeholderTextColor="#BDC3C7"
                        value={categoryName}
                        onChangeText={setCategoryName}
                    />
                </View>

                {/* Save Button */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient || ['#1ABC9C', '#16A085']}
                        style={styles.confirmBtn}
                    >
                        <Text style={styles.btnText}>Save Category</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ height: 50 }} />
            </ScrollView>

            {/* Photo Selection Modal */}
            <Modal visible={isModalVisible} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalOptionsWrapper}>
                            <TouchableOpacity style={styles.modalOption} onPress={() => { }}>
                                <MaterialCommunityIcons name="image-plus" size={22} color="#34495E" />
                                <Text style={styles.modalOptionText}>Upload from Gallery</Text>
                            </TouchableOpacity>
                            <View style={styles.modalDivider} />
                            <TouchableOpacity style={styles.modalOption} onPress={() => { }}>
                                <MaterialCommunityIcons name="camera-outline" size={22} color="#34495E" />
                                <Text style={styles.modalOptionText}>Capture from Camera</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={styles.modalCancelBtn}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.modalCancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};


export default AddCategories;