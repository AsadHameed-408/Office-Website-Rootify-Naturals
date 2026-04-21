import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f7f9' },
    listPadding: { padding: 12, paddingTop: 5 },

    // Search UI
    searchWrapper: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#edf2f7',
        alignItems: 'center'
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f4f7',
        borderRadius: 8,
        height: 40
    },
    searchInput: { flex: 1, paddingHorizontal: 10, fontSize: 14, color: '#333' },
    searchBtn: {
        backgroundColor: '#1ABC9C',
        width: 40,
        height: 40,
        borderRadius: 8,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    // Compact Card UI
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        shadowColor: '#000',
        shadowOpacity: 0.02,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 }
    },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    nameText: { fontSize: 14, fontWeight: 'bold', color: '#1a202c' },
    roleText: { fontSize: 11, color: '#718096', marginTop: 1 },
    actionGroup: { flexDirection: 'row' },
    miniBtn: { width: 26, height: 26, borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 6 },

    detailsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f7fafc'
    },
    detailRow: { flexDirection: 'row', alignItems: 'center', width: '50%', marginBottom: 4 },
    detailText: { fontSize: 10.5, color: '#4a5568', marginLeft: 5, flex: 1 },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    salaryValue: { fontSize: 13, fontWeight: 'bold', color: '#2d3748' },
    statusBox: { flexDirection: 'row', alignItems: 'center' },
    statusLabel: { fontSize: 10, fontWeight: 'bold', marginRight: 2 }
});
export default styles