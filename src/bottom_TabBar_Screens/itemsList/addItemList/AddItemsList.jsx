import { View, Text, TextInput, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import { Dropdown } from 'react-native-element-dropdown'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import CColors from '../../../constants/CColors'
import styles from './AddItemListStyle'

const AddItemsList = () => {
    // Input States
    const [firstName, setFirstName] = useState('');
    const [sku, setSku] = useState('');
    const [costPrice, setCostPrice] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [pack, setPack] = useState('');
    const [stockAlert, setStockAlert] = useState('');
    const [reOrder, setReOrder] = useState('');

    // Dropdown States
    const [purchaseUnit, setPurchaseUnit] = useState(null);
    const [sellingUnit, setSellingUnit] = useState(null);
    const [warehouse, setWarehouse] = useState(null);
    const [category, setCategory] = useState(null);
    const [brand, setBrand] = useState(null);

    // Focus States
    const [isFocus, setIsFocus] = useState(null);

    // Modal Visibility
    const [isModalVisible, setModalVisible] = useState(false);

    const dummyData = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <BackArrowAppBar title={'Items List'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>

                    <Text style={styles.heading}>Product Basics</Text>

                    <Text style={styles.textLabel}>First Name*</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter First Name"
                            placeholderTextColor={'#D9D9D9'}
                            value={firstName}
                            onChangeText={setFirstName}
                        />
                    </View>

                    <Text style={styles.textLabel}>SKU (Optional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={'#D9D9D9'}
                            placeholder="Item SKU"
                            value={sku}
                            onChangeText={setSku}
                        />
                    </View>

                    <Text style={styles.heading}>Pricing & Units</Text>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Purchase Unit*</Text>
                            <Dropdown
                                style={[styles.dropdown, isFocus === 'pUnit' && { borderColor: CColors.primary }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={dummyData}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Choose"
                                value={purchaseUnit}
                                onFocus={() => setIsFocus('pUnit')}
                                onBlur={() => setIsFocus(null)}
                                onChange={item => {
                                    setPurchaseUnit(item.value);
                                    setIsFocus(null);
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
                                    keyboardType="numeric"
                                    value={costPrice}
                                    onChangeText={setCostPrice}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <View style={styles.container}>
                            <Text style={styles.textLabel}>Selling Unit*</Text>
                            <Dropdown
                                style={[styles.dropdown, isFocus === 'sUnit' && { borderColor: CColors.primary }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                data={dummyData}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Choose"
                                value={sellingUnit}
                                onFocus={() => setIsFocus('sUnit')}
                                onBlur={() => setIsFocus(null)}
                                onChange={item => {
                                    setSellingUnit(item.value);
                                    setIsFocus(null);
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
                                    keyboardType="numeric"
                                    value={sellingPrice}
                                    onChangeText={setSellingPrice}
                                />
                            </View>
                        </View>
                    </View>

                    <Text style={styles.heading}>Logistics & Categorization</Text>
                    <Text style={styles.textLabel}>Warehouse*</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus === 'wh' && { borderColor: CColors.primary }]}
                        data={dummyData}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Warehouse"
                        value={warehouse}
                        onFocus={() => setIsFocus('wh')}
                        onBlur={() => setIsFocus(null)}
                        onChange={item => setWarehouse(item.value)}
                    />

                    <Text style={styles.textLabel}>Category*</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus === 'cat' && { borderColor: CColors.primary }]}
                        data={dummyData}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Category"
                        value={category}
                        onFocus={() => setIsFocus('cat')}
                        onBlur={() => setIsFocus(null)}
                        onChange={item => setCategory(item.value)}
                    />

                    <Text style={styles.textLabel}>Brand*</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus === 'brand' && { borderColor: CColors.primary }]}
                        data={dummyData}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Brand"
                        value={brand}
                        onFocus={() => setIsFocus('brand')}
                        onBlur={() => setIsFocus(null)}
                        onChange={item => setBrand(item.value)}
                    />

                    <Text style={styles.heading}>Quantities & Alerts</Text>
                    <Text style={styles.textLabel}>Barcode (Optional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Barcode" placeholderTextColor={'#D9D9D9'} value={pack} onChangeText={setPack} />
                    </View>
                    <Text style={styles.textLabel}>Pack (Optional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Pack" placeholderTextColor={'#D9D9D9'} value={pack} onChangeText={setPack} />
                    </View>

                    <Text style={styles.textLabel}>Stock Alert (Optional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Stock Alert" placeholderTextColor={'#D9D9D9'} value={stockAlert} onChangeText={setStockAlert} />
                    </View>

                    <Text style={styles.textLabel}>Re Order (Optional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Re Order" placeholderTextColor={'#D9D9D9'} value={reOrder} onChangeText={setReOrder} />
                    </View>

                    <Text style={styles.heading}>Media & Action</Text>
                    <Text style={styles.textLabel}>Item Thumbnail</Text>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => setModalVisible(true)}>
                        <MC name='plus' size={40} color={'grey'} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => console.log('Saved!')}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={CColors.gradient || ['#4c669f', '#3b5998', '#192f6a']}
                            style={styles.confirmBtn}
                        >
                            <Text style={styles.btnText}>Save Item</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={{ height: 40 }} />
                </View>
            </ScrollView>

            {/* Image picker Modal */}
            <Modal visible={isModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalBotomContainer}>
                        <TouchableOpacity style={styles.modalOption} onPress={() => setModalVisible(false)}>
                            <Text>From Gallery</Text>
                        </TouchableOpacity>
                        <View style={styles.separator} />
                        <TouchableOpacity style={styles.modalOption} onPress={() => setModalVisible(false)}>
                            <Text>Take Picture</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalBotomContainer}>
                        <TouchableOpacity style={styles.modalOption} onPress={() => setModalVisible(false)}>
                            <Text style={{ fontWeight: 'bold', color: 'red' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


export default AddItemsList;