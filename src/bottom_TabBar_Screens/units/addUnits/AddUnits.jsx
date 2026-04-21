import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';

// Custom Components & Styles
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../constants/CColors';
import styles from './AddUnitsStyle'

const AddUnits = () => {
    // States
    const [unitValue, setUnitValue] = useState(null);
    const [isUnitFocus, setUnitFocus] = useState(false);

    // Form Inputs
    const [unitName, setUnitName] = useState('');
    const [shortName, setShortName] = useState('');
    const [conversionFactor, setConversionFactor] = useState('');

    // const unitTypeList = [
    //     { id: 1, type: 'Weight (Tola, Masha, Gram, kg)' },
    //     { id: 2, type: 'Volume (Milliliter, Liter, Gallon)' },
    //     { id: 3, type: 'Length (Meter, Inch, Foot, Yard)' },
    //     { id: 4, type: 'Count (Piece, Box, Dozen)' }
    // ];
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

                {/* 1. Unit Type Dropdown */}
                <Text style={styles.label}>Unit Type*</Text>
                <Dropdown
                    style={[styles.dropdown, isUnitFocus && { borderColor: '#18b5a1' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={unitTypeList}
                    maxHeight={300}
                    labelField="type"
                    valueField="id"
                    placeholder={!isUnitFocus ? 'Select Unit Type' : '...'}
                    value={unitValue}
                    onFocus={() => setUnitFocus(true)}
                    onBlur={() => setUnitFocus(false)}
                    onChange={item => {
                        setUnitValue(item.id);
                        setUnitFocus(false);
                    }}
                />

                {/* 2. Unit Name */}
                <Text style={styles.label}>Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Kilogram"
                        placeholderTextColor="#ababab"
                        value={unitName}
                        onChangeText={setUnitName}
                    />
                </View>

                {/* 3. Short Name */}
                <Text style={styles.label}>Short Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. kg"
                        placeholderTextColor="#ababab"
                        value={shortName}
                        onChangeText={setShortName}
                    />
                </View>

                {/* 4. Conversion Factor */}
                <Text style={styles.label}>Conversion Factor</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Factor (e.g. 1.00)"
                        placeholderTextColor="#ababab"
                        keyboardType="numeric"
                        value={conversionFactor}
                        onChangeText={setConversionFactor}
                    />
                </View>

                {/* Save Button */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => console.log("Saving Unit...")}
                    style={styles.btnWrapper}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={CColors.gradient || ['#18b5a1', '#0ea5e9']}
                        style={styles.confirmBtn}
                    >
                        <Text style={styles.btnText}>Save Unit</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

export default AddUnits;