import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'

const ProductReportList = () => {
    const reportData = [
        {
            id: '1',
            date: '12/08/2024',
            products: [
                { id: 'p1', name: 'AJWA Seeds & Dates Powder', qty: 5 },
                { id: 'p2', name: 'Organic Honey 500g', qty: 2 },
                { id: 'p3', name: 'Almond Oil Pure', qty: 0 },
                { id: 'p4', name: 'Black Seed Oil', qty: 10 },
                { id: 'p5', name: 'Saffron Premium', qty: 1 },
                { id: 'p6', name: 'Rose Water Mist', qty: 4 },
                { id: 'p7', name: 'Aloe Vera Gel', qty: 0 },
                { id: 'p8', name: 'Neem Powder', qty: 3 },
            ]
        },
        {
            id: '2',
            date: '14/08/2024',
            products: [
                { id: 'p1', name: 'AJWA Seeds & Dates Powder', qty: 1 },
                { id: 'p2', name: 'Organic Honey 500g', qty: 0 },
                { id: 'p3', name: 'Almond Oil Pure', qty: 8 },
                { id: 'p4', name: 'Black Seed Oil', qty: 2 },
                { id: 'p5', name: 'Saffron Premium', qty: 5 },
                { id: 'p6', name: 'Rose Water Mist', qty: 12 },
                { id: 'p7', name: 'Aloe Vera Gel', qty: 1 },
                { id: 'p8', name: 'Neem Powder', qty: 9 },
            ]
        }
    ];

    return (
        <View style={styles.container}>
            <BackArrowAppBar title={'Product Report List'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                {/* Export Row */}
                <View style={styles.exportRow}>
                    <TouchableOpacity style={[styles.exportBtn, { backgroundColor: '#E74C3C' }]}>
                        <MaterialCommunityIcons name="file-pdf-box" size={16} color="#fff" />
                        <Text style={styles.exportBtnText}>PDF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.exportBtn, { backgroundColor: '#27AE60' }]}>
                        <MaterialCommunityIcons name="microsoft-excel" size={16} color="#fff" />
                        <Text style={styles.exportBtnText}>Excel</Text>
                    </TouchableOpacity>
                </View>

                {reportData.map((section) => {
                    // --- Logic: Sum of all quantities for this date ---
                    const totalQty = section.products.reduce((sum, item) => sum + item.qty, 0);

                    return (
                        <View key={section.id} style={styles.card}>
                            <View style={styles.dateHeader}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Feather name="calendar" size={12} color="#18b5a1" />
                                    <Text style={styles.dateText}>{section.date}</Text>
                                </View>

                                {/* Yahan Sum of Qty show ho raha hai */}
                                <View style={styles.totalBadge}>
                                    <Text style={styles.totalBadgeText}>Total Qty: {totalQty}</Text>
                                </View>
                            </View>

                            <View style={styles.productContainer}>
                                {section.products.map((item, index) => (
                                    <View key={item.id} style={[styles.productRow, index !== 0 && styles.rowBorder]}>
                                        <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
                                        <View style={[styles.qtyBadge, { backgroundColor: item.qty > 0 ? '#e8f8f7' : '#f5f5f5' }]}>
                                            <Text style={[styles.qtyText, { color: item.qty > 0 ? '#18b5a1' : '#999' }]}>
                                                {item.qty}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa' },
    exportRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        marginVertical: 10,
        gap: 8,
    },
    exportBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    exportBtnText: { color: '#fff', fontWeight: 'bold', marginLeft: 5, fontSize: 12 },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginHorizontal: 15,
        marginBottom: 15,
        elevation: 2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#eee',
    },
    dateHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f8fbfc',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    dateText: { fontSize: 12, fontWeight: '700', color: '#2c3e50', marginLeft: 4 },
    totalBadge: {
        backgroundColor: '#18b5a1',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    totalBadgeText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
    productContainer: { paddingHorizontal: 12 },
    productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8
    },
    rowBorder: { borderTopWidth: 1, borderTopColor: '#f8f8f8' },
    productName: { fontSize: 13, color: '#444', flex: 1, marginRight: 10 },
    qtyBadge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        minWidth: 32,
        alignItems: 'center'
    },
    qtyText: { fontSize: 12, fontWeight: 'bold' },
});

export default ProductReportList;