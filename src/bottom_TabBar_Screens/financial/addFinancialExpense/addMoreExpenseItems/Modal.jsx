import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const TransactionModal = ({ visible, onClose, data }) => {
    // Safety check: Agar data null ho ya empty array ho to crash na kare
    const record = data && data.length > 0 ? data[0] : null;

    if (!visible) return null;

    return (
        <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Transaction Details</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    {record ? (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={styles.label}>Receipt</Text>
                            <Image
                                source={{ uri: record?.receiptImage || 'https://via.placeholder.com/300x150' }}
                                style={styles.receiptImage}
                                resizeMode="cover"
                            />

                            <View style={styles.infoSection}>
                                <DetailRow label="Category" value={record?.catagory || "N/A"} />
                                <DetailRow label="Payment Mode" value={record?.paymentMode || "N/A"} />
                                <DetailRow label="Total Amount" value={`Rs ${record?.amount || "0"}`} isAmount />

                                <View style={styles.commentBox}>
                                    <Text style={styles.label}>Comment</Text>
                                    <Text style={styles.commentText}>{record?.comment || "No comments available"}</Text>
                                </View>
                            </View>
                        </ScrollView>
                    ) : (
                        <Text style={{ textAlign: 'center', padding: 20 }}>No Data Available</Text>
                    )}

                    <TouchableOpacity style={styles.doneButton} onPress={onClose}>
                        <Text style={styles.doneButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const DetailRow = ({ label, value, isAmount }) => (
    <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.value, isAmount && styles.amountText]}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center', padding: 20 },
    modalContainer: { backgroundColor: 'white', borderRadius: 20, padding: 20, maxHeight: '80%' },
    header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10 },
    headerTitle: { fontSize: 18, fontWeight: '700' },
    closeButtonText: { fontSize: 20, color: '#999' },
    receiptImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 20 },
    infoSection: { gap: 15 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    label: { fontSize: 11, color: '#8e8e93', fontWeight: 'bold', textTransform: 'uppercase' },
    value: { fontSize: 15, fontWeight: '600' },
    amountText: { color: '#2ecc71', fontSize: 17 },
    commentBox: { marginTop: 10, padding: 12, backgroundColor: '#f9f9f9', borderRadius: 10 },
    commentText: { fontSize: 14, color: '#666', fontStyle: 'italic' },
    doneButton: { backgroundColor: '#18b5a1', paddingVertical: 14, borderRadius: 12, marginTop: 20, alignItems: 'center' },
    doneButtonText: { color: 'white', fontWeight: 'bold' }
});

export default TransactionModal;