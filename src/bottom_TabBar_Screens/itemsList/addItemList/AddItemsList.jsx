import { View, Text, TextInput, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './AddItemListStyle'
import { Dropdown } from 'react-native-element-dropdown'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import CColors from '../../../constants/CColors'

const AddItemsList = () => {
    const [warehouseName, setWarehouseName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    // dropdown
    const [wareHouseValue, setWareHouseValue] = useState(null);
    const [isWareHouseFocus, setWareHouseFocus] = useState(false);
    // Modal Visibility States
    const [isModalVisible, setModalVisible] = useState(false);
    const wareHouseList = [
        { label: 'All Warehouses', value: '1' },
        { label: 'EL', value: '2' },
        { label: 'Explore Traders', value: '3' },
        { label: 'Falak Traders', value: '4' },
        { label: 'Taimoor Traders', value: '5' },
    ];
    return (
        <View style={{ flex: 1 }}>
            <BackArrowAppBar title={'Items List'} />
            <ScrollView>
                <View style={styles.body}>
                    <Text style={styles.heading}>Product Basics</Text>
                    {/* 3. First Name Input */}
                    <Text style={styles.textLabel}>First Name*</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter First Name"
                            placeholderTextColor={'#D9D9D9'}
                            value={warehouseName}
                            onChangeText={setWarehouseName}
                        />
                    </View>
                    {/* 3. Sku Input */}
                    <Text style={styles.textLabel}>SKU (Optional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={'#D9D9D9'}
                            placeholder="Item SKU"
                            value={warehouseName}
                            onChangeText={setWarehouseName}
                        />
                    </View>
                    {/* 3. Purchase Unit Input */}
                    <Text style={styles.heading}>Pricing & Units</Text>
                    <View style={[{ flexDirection: 'row' }]}>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Purchase Unit*</Text>
                            <Dropdown
                                style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#D9D9D9'}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={wareHouseList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isWareHouseFocus ? 'Choose Purchase Unit' : ''}
                                searchPlaceholder="Search..."
                                value={wareHouseValue}
                                onFocus={() => setWareHouseFocus(true)}
                                onBlur={() => setWareHouseFocus(false)}
                                onChange={item => {
                                    setWareHouseValue(item.value);
                                    setWareHouseFocus(false);
                                }}
                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Cost Price*</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#D9D9D9'}
                                    placeholder="0.00"
                                    value={warehouseName}
                                    onChangeText={setWarehouseName}
                                />
                            </View>
                        </View>
                    </View>
                    {/* 3. Selling Unit Input */}
                    <View style={[{ flexDirection: 'row' }]}>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Selling Unit*</Text>
                            <Dropdown
                                style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeholderTextColor={'#D9D9D9'}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={wareHouseList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isWareHouseFocus ? 'Choose Selling Unit' : ''}
                                searchPlaceholder="Search..."
                                value={wareHouseValue}
                                onFocus={() => setWareHouseFocus(true)}
                                onBlur={() => setWareHouseFocus(false)}
                                onChange={item => {
                                    setWareHouseValue(item.value);
                                    setWareHouseFocus(false);
                                }}
                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Selling Price*</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#D9D9D9'}
                                    placeholder="0.00"
                                    value={warehouseName}
                                    onChangeText={setWarehouseName}
                                />
                            </View>
                        </View>
                    </View>
                    {/* 3. Logistics & Categorization */}
                    <View style={styles.container}>
                        <Text style={styles.textLabel}>Warehouse*</Text>
                        <Dropdown
                            style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholderTextColor={'#D9D9D9'}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={wareHouseList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isWareHouseFocus ? 'Select' : ''}
                            searchPlaceholder="Search..."
                            value={wareHouseValue}
                            onFocus={() => setWareHouseFocus(true)}
                            onBlur={() => setWareHouseFocus(false)}
                            onChange={item => {
                                setWareHouseValue(item.value);
                                setWareHouseFocus(false);
                            }}
                        />
                    </View>
                    {/* Category */}
                    <View style={styles.container}>
                        <Text style={styles.textLabel}>Category*</Text>
                        <Dropdown
                            style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholderTextColor={'#D9D9D9'}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={wareHouseList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isWareHouseFocus ? 'Select' : ''}
                            searchPlaceholder="Search..."
                            value={wareHouseValue}
                            onFocus={() => setWareHouseFocus(true)}
                            onBlur={() => setWareHouseFocus(false)}
                            onChange={item => {
                                setWareHouseValue(item.value);
                                setWareHouseFocus(false);
                            }}
                        />
                    </View>
                    {/* Brand */}
                    <View style={styles.container}>
                        <Text style={styles.textLabel}>Brand*</Text>
                        <Dropdown
                            style={[styles.dropdown, isWareHouseFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            placeholderTextColor={'#D9D9D9'}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={wareHouseList}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isWareHouseFocus ? 'Select' : ''}
                            searchPlaceholder="Search..."
                            value={wareHouseValue}
                            onFocus={() => setWareHouseFocus(true)}
                            onBlur={() => setWareHouseFocus(false)}
                            onChange={item => {
                                setWareHouseValue(item.value);
                                setWareHouseFocus(false);
                            }}
                        />
                    </View>
                    {/* Quantities & Alert */}
                    <Text style={styles.heading}>Quantities & Alerts</Text>
                    {/* Packs Input */}
                    <Text style={styles.textLabel}>Pack (Optional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Pack"
                            placeholderTextColor={'#D9D9D9'}
                            value={warehouseName}
                            onChangeText={setWarehouseName}
                        />
                    </View>
                    {/* Stock Alert */}
                    <Text style={styles.textLabel}>Stock Alert (Optional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Stock Alert"
                            placeholderTextColor={'#D9D9D9'}
                            value={warehouseName}
                            onChangeText={setWarehouseName}
                        />
                    </View>
                    {/* Re Order (Optional) */}
                    <Text style={styles.textLabel}>Re Order (Optional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Re Order"
                            placeholderTextColor={'#D9D9D9'}
                            value={warehouseName}
                            onChangeText={setWarehouseName}
                        />
                    </View>
                    {/* 3. Purchase Unit Input */}
                    <Text style={styles.heading}>Media & Action</Text>
                    {/* Item Thumbnail */}
                    <Text style={styles.textLabel}>Item Thumbnail</Text>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => {
                        setModalVisible(!isModalVisible)
                    }}>
                        <MC name='plus' size={40} color={'grey'} />
                    </TouchableOpacity>
                    {/* Image picker Modal */}
                    <View>
                        <Modal
                            visible={isModalVisible}
                            transparent={true}
                            animationType="slide">
                            <View
                                style={styles.modalContainer}>
                                <View
                                    style={styles.modalBotomContainer}>
                                    <TouchableOpacity
                                        activeOpacity={0.4}
                                        onPress={() => { }}
                                        style={{
                                            width: '95%',
                                            borderRadius: 0,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderColor: '#ddd',
                                            borderBottomWidth: 0,
                                            borderRadius: 5,
                                            bottom: 0,
                                            marginBottom: 10,
                                            marginTop: 10,
                                        }}>
                                        <Text style={{ margin: 10 }}>From Gallery</Text>
                                    </TouchableOpacity>
                                    <View style={{ backgroundColor: '#D9D9D9', height: 1, width: '90%' }} />
                                    <TouchableOpacity
                                        activeOpacity={0.4}
                                        onPress={() => { }}
                                        style={{
                                            width: '95%',
                                            borderRadius: 0,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderColor: '#ddd',
                                            borderBottomWidth: 0,
                                            borderRadius: 5,
                                            bottom: 0,
                                            marginBottom: 10,
                                            marginTop: 10,
                                        }}>
                                        <Text style={{ margin: 10 }}>Take Picture</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.modalBotomContainer}>
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={() => { setModalVisible(false) }}
                                        style={{
                                            width: '95%',
                                            borderRadius: 0,
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            justifyContent: 'center',
                                            borderColor: '#ddd',
                                            borderBottomWidth: 0,
                                            borderRadius: 5,
                                            bottom: 0,
                                            marginBottom: 10,
                                            marginTop: 10,
                                        }}>
                                        <Text style={{ margin: 5, fontWeight: 'bold' }}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient}
                        style={styles.confirmBtn}
                        onPress={() => { }}
                    >
                        <Text style={styles.btnText}>Save Item</Text>
                    </LinearGradient>

                    <View style={{ height: 40 }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default AddItemsList
