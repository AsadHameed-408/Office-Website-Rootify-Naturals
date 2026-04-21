import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../constants/CColors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AddBrandsStyle';

const AddBrands = () => {
    const [warehouseValue, setWarehouseValue] = useState(null);
    const [isWarehouseFocus, setWarehouseFocus] = useState(false);
    const [warehouseName, setWarehouseName] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];

    return (
        <View style={styles.mainContainer}>
            <BackArrowAppBar title={'Add Brand'} />

            <ScrollView contentContainerStyle={styles.scrollBody} showsVerticalScrollIndicator={false}>

                {/* 1. Image Picker Section */}
                <TouchableOpacity
                    style={styles.imagePickerContainer}
                    activeOpacity={0.7}
                    onPress={() => setModalVisible(true)}
                >
                    <View style={styles.imagePickerContent}>
                        <MaterialCommunityIcons name={'camera-plus-outline'} size={48} color={'#BDC3C7'} />
                        <Text style={styles.imagePickerText}>Upload Brand Image</Text>
                        <Text style={styles.imagePickerSubText}>PNG, JPG (Max 2MB)</Text>
                    </View>
                </TouchableOpacity>

                {/* 2. Warehouse Dropdown */}
                <Text style={styles.label}>Warehouse <Text style={{ color: 'red' }}>*</Text></Text>
                <Dropdown
                    style={[styles.dropdown, isWarehouseFocus && { borderColor: '#1ABC9C' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    itemTextStyle={styles.itemTextStyle}
                    data={wareHouseList}
                    maxHeight={250}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Warehouse"
                    value={warehouseValue}
                    onFocus={() => setWarehouseFocus(true)}
                    onBlur={() => setWarehouseFocus(false)}
                    onChange={item => {
                        setWarehouseValue(item.value);
                        setWarehouseFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <MaterialCommunityIcons name="office-building-marker-outline" size={20} color="#7F8C8D" style={{ marginRight: 10 }} />
                    )}
                />

                {/* 3. Brand Name Input */}
                <Text style={styles.label}>Brand Name <Text style={{ color: 'red' }}>*</Text></Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="tag-outline" size={20} color="#7F8C8D" style={{ marginLeft: 10 }} />
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Samsung, Nike"
                        placeholderTextColor="#BDC3C7"
                        value={warehouseName}
                        onChangeText={setWarehouseName}
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
                        <Text style={styles.btnText}>Save Brand</Text>
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
                                <MaterialCommunityIcons name="image-multiple" size={22} color="#34495E" />
                                <Text style={styles.modalOptionText}>Choose from Gallery</Text>
                            </TouchableOpacity>
                            <View style={styles.modalDivider} />
                            <TouchableOpacity style={styles.modalOption} onPress={() => { }}>
                                <MaterialCommunityIcons name="camera" size={22} color="#34495E" />
                                <Text style={styles.modalOptionText}>Take a Photo</Text>
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
        </View>
    );
};


export default AddBrands;