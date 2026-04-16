import React from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

const TransactionModal = ({ visible, onClose, data }) => {
    console.log(data)
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>

                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Transaction Details</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Receipt Image Section */}
                        <Text style={styles.label}>Receipt</Text>
                        <Image
                            source={{ uri: data[0].receiptImage || 'https://via.placeholder.com/300x150' }}
                            style={styles.receiptImage}
                            resizeMode="cover"
                        />

                        {/* Information Grid */}
                        <View style={styles.infoSection}>
                            <DetailRow label="Catagory" value={data[0].catagory} />
                            <DetailRow label="Payment Mode" value={data[0].paymentMode} />
                            <DetailRow
                                label="Total Amount"
                                value={`$${data[0].amount}`}
                                isAmount
                            />
                            <View style={styles.commentBox}>
                                <Text style={styles.label}>Comment</Text>
                                <Text style={styles.commentText}>{data[0].comment}</Text>
                            </View>
                        </View>
                    </ScrollView>

                    {/* Footer Action */}
                    <TouchableOpacity style={styles.doneButton} onPress={onClose}>
                        <Text style={styles.doneButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

// Helper component for rows
const DetailRow = ({ label, value, isAmount }) => (
    <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.value, isAmount && styles.amountText]}>{value}</Text>
    </View>
);
const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        maxHeight: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingBottom: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    closeButtonText: {
        fontSize: 20,
        color: '#999',
        fontWeight: '300',
    },
    receiptImage: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        backgroundColor: '#f5f5f5',
        marginBottom: 20,
    },
    infoSection: {
        gap: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
    },
    label: {
        fontSize: 13,
        color: '#8e8e93',
        fontWeight: '500',
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    value: {
        fontSize: 16,
        color: '#333',
        fontWeight: '600',
    },
    amountText: {
        color: '#2ecc71',
        fontSize: 18,
    },
    commentBox: {
        marginTop: 10,
        padding: 12,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    commentText: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
    },
    doneButton: {
        backgroundColor: '#18b5a1',
        paddingVertical: 14,
        borderRadius: 12,
        marginTop: 25,
        alignItems: 'center',
    },
    doneButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
});

export default TransactionModal;