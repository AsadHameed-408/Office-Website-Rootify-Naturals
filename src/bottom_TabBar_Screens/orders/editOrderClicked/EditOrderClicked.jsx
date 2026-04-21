

import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    FlatList,
    Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';

const EditOrderClicked = () => {
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const myData = [
        {
            id: '1',
            title: 'Modern Chair',
            variant: 'Blue / Large',
            sku: 'CH-001',
            availableQty: 12,
            qty: 2,
            subtotal: '6998.00',
            price: '3499.00'
        },
        {
            id: '2',
            title: 'Modern Chair',
            variant: 'Blue / Large',
            sku: 'CH-001',
            availableQty: 12,
            qty: 2,
            subtotal: '6998.00',
            price: '3499.00'
        },
        // ... more items
    ];
    // Fake Item Names Data
    const fakeItems = [
        { id: '1', name: 'Cotton Summer T-Shirt' },
        { id: '2', name: 'Slim Fit Denim Jeans' },
        { id: '3', name: 'Leather Formal Shoes' },
        { id: '4', name: 'Wireless Bluetooth Headset' },
        { id: '5', name: 'Smart Fitness Watch' },
    ];

    const toggleDropdown = () => setVisible(!visible);

    const onItemPress = (item) => {
        setSelectedItem(item);
        setVisible(false);
    };

    return (
        <View style={eo_styles.eo_safeArea}>
            <BackArrowAppBar title={'Edit Order'} />
            <View style={eo_styles.dd_wrapper}>
                <Text style={eo_styles.dd_label}>Select Product Item</Text>

                <TouchableOpacity
                    style={eo_styles.dd_button}
                    onPress={toggleDropdown}
                    activeOpacity={0.8}
                >
                    <Text style={eo_styles.dd_buttonText}>
                        {selectedItem ? selectedItem.name : "Search & Add Item..."}
                    </Text>
                    <MaterialCommunityIcons
                        name={visible ? "chevron-up" : "chevron-down"}
                        size={20}
                        color="#666"
                    />
                </TouchableOpacity>

                {/* Dropdown Modal List */}
                <Modal visible={visible} transparent animationType="none">
                    <TouchableOpacity
                        style={eo_styles.dd_overlay}
                        onPress={() => setVisible(false)}
                    >
                        <View style={eo_styles.dd_dropdownList}>
                            <FlatList
                                data={fakeItems}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={eo_styles.dd_item}
                                        onPress={() => onItemPress(item)}
                                    >
                                        <Text style={eo_styles.dd_itemText}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
            <ScrollView style={eo_styles.eo_mainContainer}>

                {/* Header Buttons */}
                <View style={eo_styles.eo_topRow}>
                    <TouchableOpacity style={eo_styles.eo_printBtn}>
                        <MaterialCommunityIcons name="printer" size={16} color="#333" />
                        <Text style={eo_styles.eo_printBtnText}>Print / Save PDF</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={eo_styles.eo_updateBtn}>
                        <MaterialCommunityIcons name="cached" size={16} color="#FFF" />
                        <Text style={eo_styles.eo_updateBtnText}>Update Order</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={myData}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                        <View style={eo_styles.eo_itemCard}>
                            {/* Header Section */}
                            <View style={eo_styles.eo_cardHeader}>
                                <View style={eo_styles.eo_imgBox}>
                                    <MaterialCommunityIcons name="image-outline" size={24} color="#CCC" />
                                </View>

                                <View style={eo_styles.eo_infoCol}>
                                    <Text style={eo_styles.eo_itemTitle}>{item.title || "Title (placeholder name)"}</Text>
                                    <Text style={eo_styles.eo_itemSub}>VARIANT ({item.variant || "-"})</Text>
                                    <Text style={eo_styles.eo_itemSub}>SKU ({item.sku || "-"})</Text>
                                    <Text style={eo_styles.eo_stockText}>Available Qty ({item.availableQty || 0})</Text>
                                </View>

                                <TouchableOpacity style={eo_styles.eo_delBtn}>
                                    <MaterialCommunityIcons name="trash-can-outline" size={18} color="#FFF" />
                                </TouchableOpacity>
                            </View>

                            {/* Footer Section */}
                            <View style={eo_styles.eo_cardFooter}>
                                <View style={eo_styles.eo_qtyBox}>
                                    <Text style={eo_styles.eo_label}>Qty</Text>
                                    <View style={eo_styles.eo_stepper}>
                                        <TouchableOpacity style={eo_styles.eo_stepBtn}><Text>-</Text></TouchableOpacity>
                                        <Text style={eo_styles.eo_qtyVal}>{item.qty || 1}</Text>
                                        <TouchableOpacity style={eo_styles.eo_stepBtn}><Text>+</Text></TouchableOpacity>
                                    </View>
                                </View>

                                <View style={eo_styles.eo_priceCol}>
                                    <Text style={eo_styles.eo_label}>Subtotal</Text>
                                    <Text style={eo_styles.eo_priceVal}>{item.subtotal || "0.00"}</Text>
                                </View>

                                <View style={[eo_styles.eo_priceCol, { alignItems: 'flex-end' }]}>
                                    <Text style={eo_styles.eo_label}>Price</Text>
                                    <Text style={eo_styles.eo_priceVal}>{item.price || "0.00"}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 20 }} // Optional: adds space at bottom
                />



            </ScrollView>
            {/* Summary Section */}
            <View style={eo_styles.eo_summaryBox}>
                <View style={eo_styles.eo_summaryRow}>
                    <Text style={eo_styles.eo_sumLabel}>Subtotal:</Text>
                    <Text style={eo_styles.eo_sumVal}>3499.00</Text>
                </View>

                <View style={eo_styles.eo_summaryRow}>
                    <Text style={eo_styles.eo_sumLabel}>Discount:</Text>
                    <TextInput
                        style={eo_styles.eo_discountInput}
                        defaultValue="0"
                        keyboardType="numeric"
                    />
                </View>

                <View style={[eo_styles.eo_summaryRow, eo_styles.eo_netRow]}>
                    <Text style={eo_styles.eo_netLabel}>Net Amount:</Text>
                    <Text style={eo_styles.eo_netVal}>3499.00</Text>
                </View>
            </View>

            {/* Bottom Action Bar */}
            <View style={eo_styles.eo_bottomBar}>
                <TouchableOpacity style={[eo_styles.eo_actionBtn, { backgroundColor: '#4CAF50' }]}>
                    <MaterialCommunityIcons name="truck-delivery" size={14} color="#FFF" />
                    <Text style={eo_styles.eo_actionBtnText}>Post to Courier</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[eo_styles.eo_actionBtn, { backgroundColor: '#FF8A65' }]}>
                    <MaterialCommunityIcons name="cart-check" size={14} color="#FFF" />
                    <Text style={eo_styles.eo_actionBtnText}>Delivered</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[eo_styles.eo_actionBtn, { backgroundColor: '#4DB6AC' }]}>
                    <MaterialCommunityIcons name="credit-card-outline" size={14} color="#FFF" />
                    <Text style={eo_styles.eo_actionBtnText}>Payment Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Separate Styles
const eo_styles = StyleSheet.create({
    eo_safeArea: {
        flex: 1,
        backgroundColor: '#F2F4F7', // Light background for the whole screen
    },
    eo_mainContainer: {
        padding: 12,
    },
    eo_topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    eo_printBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#DDD',
    },
    eo_printBtnText: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 5,
        color: '#333',
    },
    eo_updateBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#26A69A',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    eo_updateBtnText: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 5,
        color: '#FFF',
    },
    eo_itemCard: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    eo_cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingBottom: 10,
        marginBottom: 10,
    },
    eo_imgBox: {
        width: 50,
        height: 50,
        backgroundColor: '#F9F9F9',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EEE',
    },
    eo_infoCol: {
        flex: 1,
        marginLeft: 10,
    },
    eo_itemTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#333',
    },
    eo_itemSub: {
        fontSize: 11,
        color: '#888',
    },
    eo_stockText: {
        fontSize: 11,
        color: '#555',
        fontWeight: '600',
    },
    eo_delBtn: {
        backgroundColor: '#EF5350',
        padding: 6,
        borderRadius: 5,
    },
    eo_cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    eo_label: {
        fontSize: 10,
        color: '#AAA',
        marginBottom: 3,
    },
    eo_stepper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#DDD',
    },
    eo_stepBtn: {
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    eo_qtyVal: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingHorizontal: 5,
    },
    eo_priceVal: {
        fontSize: 12,
        fontWeight: '700',
        color: '#444',
    },
    eo_summaryBox: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 12,
        marginTop: 5,
        position: 'relative',
    },
    eo_summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    eo_sumLabel: {
        fontSize: 14,
        color: '#666',
    },
    eo_sumVal: {
        fontSize: 14,
        fontWeight: '600',
    },
    eo_discountInput: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        width: 60,
        textAlign: 'right',
        paddingHorizontal: 5,
        fontSize: 14,
        backgroundColor: '#FAFAFA',
    },
    eo_netRow: {
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        paddingTop: 10,
        marginTop: 5,
    },
    eo_netLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    eo_netVal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    eo_bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        position: 'relative',
        paddingBottom: 60,
    },
    eo_actionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    eo_actionBtnText: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    // ....................
    dd_wrapper: {
        paddingHorizontal: 16,
        marginVertical: 10,
    },
    dd_label: {
        fontSize: 12,
        color: '#888',
        marginBottom: 4,
        fontWeight: '600',
    },
    dd_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        height: 45,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDD',
        // Shadow
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
    },
    dd_buttonText: {
        fontSize: 14,
        color: '#444',
    },
    dd_overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)', // Dim background
        justifyContent: 'center',
        alignItems: 'center',
    },
    dd_dropdownList: {
        width: '85%',
        maxHeight: 250,
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingVertical: 5,
        // Shadow
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    dd_item: {
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    dd_itemText: {
        fontSize: 14,
        color: '#333',
    },
});

export default EditOrderClicked;