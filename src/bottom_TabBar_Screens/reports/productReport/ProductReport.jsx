import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Custom Components & Constants
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import CColors from '../../../constants/CColors';
import { useNavigation } from '@react-navigation/native';

// --- Static Data ---
const warehouseData = [
    { label: 'Explore Traders Main', value: 'W1' },
    { label: 'Falak Traders', value: 'W2' },
    { label: 'Taimoor Warehouse', value: 'W3' },
];

const allProducts = [
    { label: 'Organic Honey', value: 'P1', warehouseId: 'W1' },
    { label: 'Almond Oil', value: 'P2', warehouseId: 'W1' },
    { label: 'Aloe Vera Gel', value: 'P3', warehouseId: 'W1' },
    { label: 'Saffron', value: 'P4', warehouseId: 'W2' },
    { label: 'Black Seed Oil', value: 'P5', warehouseId: 'W2' },
    { label: 'Rose Water', value: 'P6', warehouseId: 'W2' },
    { label: 'Neem Powder', value: 'P7', warehouseId: 'W2' },
    { label: 'Coconut Oil', value: 'P8', warehouseId: 'W2' },
    { label: 'Item A', value: 'P9', warehouseId: 'W3' },
    { label: 'Item B', value: 'P10', warehouseId: 'W3' },
];

const dateOptions = [
    { label: 'Current Date', value: 'today' },
    { label: 'Previous Date', value: 'yesterday' },
    { label: 'Custom Range', value: 'custom' },
];

const ProductReport = () => {
    const [warehouse, setWarehouse] = useState(null);
    const [product, setProduct] = useState(null);
    const [dateRange, setDateRange] = useState(null);
    const [showReport, setShowReport] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigation = useNavigation();

    const handleWarehouseChange = (item) => {
        setWarehouse(item.value);
        setProduct(null);
        setShowReport(false);
        const filtered = allProducts.filter(p => p.warehouseId === item.value);
        setFilteredProducts([{ label: 'All Products', value: 'all' }, ...filtered]);
    };

    const handleGenerateReport = () => {
        navigation.navigate('ProductReportList')
        // if (!warehouse) {
        //     alert("Please select a warehouse first.");
        //     return;
        // }
        // setShowReport(true);
    };

    return (
        <View style={styles.container}>
            <BackArrowAppBar title={'Product Report'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* 1. Filter Section */}
                <View style={styles.filterCard}>
                    <Text style={styles.label}>1. Select Warehouse</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={warehouseData}
                        labelField="label"
                        valueField="value"
                        placeholder="Choose Warehouse"
                        value={warehouse}
                        onChange={handleWarehouseChange}
                    />

                    <Text style={styles.label}>2. Select Product</Text>
                    <Dropdown
                        style={[styles.dropdown, !warehouse && styles.disabledDropdown]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={filteredProducts}
                        labelField="label"
                        valueField="value"
                        placeholder={warehouse ? "Choose Product" : "Select Warehouse First"}
                        search
                        disable={!warehouse}
                        value={product}
                        onChange={item => { setProduct(item.value); setShowReport(false); }}
                    />

                    <Text style={styles.label}>3. Date Range</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={dateOptions}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Period"
                        value={dateRange}
                        onChange={item => setDateRange(item.value)}
                    />

                    <TouchableOpacity onPress={handleGenerateReport} activeOpacity={0.8}>
                        <LinearGradient
                            colors={CColors.gradient || ['#18b5a1', '#0ea391']}
                            style={styles.btn}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        >
                            <Feather name="bar-chart-2" size={18} color="#fff" style={{ marginRight: 8 }} />
                            <Text style={styles.btnText}>Generate Report</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>



                <View style={{ height: 50 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f4f6f8' },
    scrollContent: { paddingBottom: 20 },
    filterCard: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 18,
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
    },
    label: { fontSize: 13, fontWeight: 'bold', color: '#555', marginBottom: 5 },
    dropdown: {
        height: 48,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    disabledDropdown: { backgroundColor: '#f5f5f5' },
    placeholderStyle: { fontSize: 14, color: '#ababab' },
    selectedTextStyle: { fontSize: 14, color: '#333' },
    btn: {
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default ProductReport;