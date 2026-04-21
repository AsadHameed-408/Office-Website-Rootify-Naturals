import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window');
styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    scrollContent: {
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1e293b',
    },
    dateBadge: {
        backgroundColor: '#e2e8f0',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    dateText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#475569',
    },
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dropdown: {
        width: '48%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdownText: {
        fontSize: 13,
        color: '#1e293b',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700',
        color: '#334155',
        marginBottom: 12,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    summaryItem: {
        alignItems: 'center',
    },
    summaryLabel: {
        fontSize: 10,
        color: '#64748b',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    summaryValue: {
        fontSize: 18,
        fontWeight: '800',
    },
    sectionCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 16,
        borderTopWidth: 4,
        overflow: 'hidden',
        elevation: 2,
    },
    sectionHeader: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#475569',
    },
    dataRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f1f5f9',
    },
    rowLabel: {
        fontSize: 13,
        color: '#64748b',
        fontWeight: '500',
    },
    rowValue: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1e293b',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 50,
        position: 'relative',

    },
    actionButton: {
        width: '48%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        gap: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 13,
    },
});
export default styles