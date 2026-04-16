import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';

// Custom Components & Styles
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import styles from './AddUnitsStyle';
import CColors from '../../../constants/CColors';
import LinearGradient from 'react-native-linear-gradient';

const AddUnits = () => {

    // Store/Warehouse States
    const [unitValue, setUnitValue] = useState(null);
    const [isUnitFocus, setUnitFocus] = useState(false);

    // Form Inputs
    const [warehouseName, setWarehouseName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    // --- 2. Data Lists ---
    const unitTypeList = [
        {
            id: 1,
            type: '-- Select Unit Type --'
        },
        {
            id: 2,
            type: 'Weight (Tola, Masha, Ounce, Pound, Gram, Milligram, kilogram, Ton)'
        },
        {
            id: 3,
            type: 'Weight (Tola, Masha, Ounce, Pound, Gram, Milligram, kilogram, Ton)'
        },
        {
            id: 4,
            type: 'Volume (Milliliter, Liter, Gallon)'
        },
        {
            id: 5,
            type: 'Length (Millimeter, Centimeter, Meter, Inch, Foot, Yard)'
        }
    ];



    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <BackArrowAppBar title={'Add Unit'} />

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                {/* 2. Shopify Store Dropdown */}
                <Text style={styles.label}>Unit Type*</Text>
                <Dropdown
                    style={[styles.dropdown, isUnitFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={unitTypeList}
                    maxHeight={300}
                    labelField="type"
                    valueField="id"
                    placeholder={!isUnitFocus ? unitTypeList[0].type : unitTypeList[0].type}
                    value={unitValue}
                    onFocus={() => setUnitFocus(true)}
                    onBlur={() => setUnitFocus(false)}
                    onChange={item => {
                        setUnitValue(item.value);
                        setUnitFocus(false);
                    }}
                />

                {/* 3. Name Input */}
                <Text style={styles.label}>Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Unit Name"
                        value={warehouseName}
                        onChangeText={setWarehouseName}
                    />
                </View>

                {/* 4. Short Name */}
                <Text style={styles.label}>Short Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Short Name"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                {/* 4. Conversion Factor */}
                <Text style={styles.label}>Conversion Factor</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Conversion Factor"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={CColors.gradient}
                    style={styles.confirmBtn}
                    onPress={() => { }}
                >
                    <Text style={styles.btnText}>Save Unit</Text>
                </LinearGradient>
                {/* Bottom Spacer */}
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

export default AddUnits