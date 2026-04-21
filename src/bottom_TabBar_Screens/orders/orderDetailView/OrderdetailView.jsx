import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import CColors from '../../../constants/CColors';

const DetailViewModal = ({ route }) => {
    const reviveData = route.params;
    const data = reviveData.data;

    return (
        <View style={styles.overlay}>
            <StatusBar barStyle="light-content" />
            <BackArrowAppBar title={'Order Details'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

                {/* Card (Tracking ID & Status) */}
                <LinearGradient colors={CColors.gradient} style={styles.topCard}>
                    <View style={styles.topCardRow}>
                        <View>
                            <Text style={styles.topLabel}>Tracking ID</Text>
                            <Text style={styles.topValue}>#{data.order_id}</Text>
                        </View>
                        <View style={styles.statusBadge}>
                            <Text style={styles.statusText}>{data.status}</Text>
                        </View>
                    </View>
                </LinearGradient>

                {/* Customer Section */}
                <View style={styles.sectionCard}>
                    <SectionHeader title="Customer Info" icon="account-outline" />
                    <DetailItem label="Name" value={data.customer_name} icon="account" />
                    <DetailItem label="Phone" value={data.phone} icon="phone" />
                    <DetailItem label="City" value={data.city_name} icon="map-marker" />
                    <View style={styles.addressBox}>
                        <Text style={styles.label}>Full Address</Text>
                        <Text style={styles.addressValue}>{data.address}</Text>
                    </View>
                </View>

                {/*  Order & Product Section */}
                <View style={styles.sectionCard}>
                    <SectionHeader title="Product Details" icon="package-variant-closed" />
                    <View style={styles.productInfoBox}>
                        <Text style={styles.productText}>{data.product_info}</Text>
                    </View>
                    <DetailItem label="Salesman" value={data.salesman} icon="briefcase-outline" />
                    <DetailItem label="Created At" value={data.created_at} icon="calendar-clock" />
                </View>

                {/*  Payment Section */}
                <View style={[styles.sectionCard, styles.paymentCard]}>
                    <SectionHeader title="Payment Summary" icon="currency-usd" />
                    <DetailItem label="Discount" value={`${data.discount}`} icon="tag-outline" />
                    <DetailItem label="Financial Status" value={data.financial_status} icon="shield-check-outline" />

                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total Amount</Text>
                        <Text style={styles.totalValue}>{data.total}</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

// Internal Helper Components
const SectionHeader = ({ title, icon }) => (
    <View style={styles.sectionHeaderRow}>
        <MaterialCommunityIcons name={icon} size={20} color="#18b5a1" />
        <Text style={styles.sectionTitle}>{title}</Text>
    </View>
);

const DetailItem = ({ label, value, icon }) => (
    <View style={styles.detailItemRow}>
        <View style={styles.itemLeft}>
            <MaterialCommunityIcons name={icon} size={16} color="#8e8e93" />
            <Text style={styles.label}>{label}</Text>
        </View>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: '#F4F7F9' },
    scrollContainer: { padding: 15, paddingBottom: 30 },

    // Top Card Style
    topCard: {
        padding: 20,
        borderRadius: 20,
        marginBottom: 15,
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    topCardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    topLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 12, textTransform: 'uppercase' },
    topValue: { color: '#fff', fontSize: 22, fontWeight: '800', marginTop: 5 },
    statusBadge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
    statusText: { color: '#fff', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' },

    // Section Cards
    sectionCard: {
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 15,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#F0F0F0', paddingBottom: 8 },
    sectionTitle: { fontSize: 15, fontWeight: '700', color: '#333', marginLeft: 10 },

    // Detail Items
    detailItemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
    itemLeft: { flexDirection: 'row', alignItems: 'center' },
    label: { fontSize: 13, color: '#8e8e93', marginLeft: 8, fontWeight: '500' },
    value: { fontSize: 14, color: '#333', fontWeight: '600' },

    // Special Boxes
    addressBox: { backgroundColor: '#F8FAFB', padding: 12, borderRadius: 12, marginTop: 10 },
    addressValue: { fontSize: 13, color: '#555', marginTop: 5, lineHeight: 18 },
    productInfoBox: { backgroundColor: '#F0F9F8', padding: 12, borderRadius: 12, marginBottom: 10 },
    productText: { fontSize: 14, color: '#18b5a1', fontWeight: '600' },

    // Payment Section
    paymentCard: { borderLeftWidth: 4, borderLeftColor: '#18b5a1' },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0'
    },
    totalLabel: { fontSize: 16, fontWeight: '700', color: '#333' },
    totalValue: { fontSize: 20, fontWeight: '800', color: '#18b5a1' }
});

export default DetailViewModal;