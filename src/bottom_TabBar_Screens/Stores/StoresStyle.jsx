import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    wrhMainContainer: { flex: 1, backgroundColor: '#F8FAFC' },
    searchRowWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginVertical: 15,
        alignItems: 'center'
    },
    wrhInputContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#E2E8F0',
        borderWidth: 1.5,
        borderRadius: 12,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    wrhInputField: { flex: 1, paddingHorizontal: 10, color: '#1E293B', fontSize: 14 },
    searchBtn: {
        backgroundColor: '#18b5a1',
        height: 50,
        width: 50,
        borderRadius: 12,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    wrhCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 12,
        elevation: 2,
    },
    cardInner: { flexDirection: 'row', alignItems: 'center' },
    iconContainer: { width: 45, height: 45, borderRadius: 10, backgroundColor: '#F0FDFA', alignItems: 'center', justifyContent: 'center' },
    storeTitle: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
    storeUrlText: { fontSize: 13, color: '#64748B' },

    // Modal Styles
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
    modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 20, maxHeight: '85%' },
    modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
    modalTitle: { fontSize: 18, fontWeight: '800', color: '#1E293B' },
    detailRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    detailIconBox: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#F0FDFA', alignItems: 'center', justifyContent: 'center' },
    detailLabel: { fontSize: 11, color: '#94A3B8', textTransform: 'uppercase', fontWeight: '700' },
    detailValue: { fontSize: 14, color: '#1E293B', fontWeight: '600', marginTop: 1 },

    actionRow: { flexDirection: 'row', marginTop: 20, gap: 10 },
    actionBtn: { flex: 1, height: 50, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
    editBtn: { borderWidth: 1.5, borderColor: '#18b5a1' },
    editBtnText: { color: '#18b5a1', fontWeight: '700' },
    deleteBtn: { backgroundColor: '#ef4444' },
    deleteBtnText: { color: '#fff', fontWeight: '700' },
});

export default styles