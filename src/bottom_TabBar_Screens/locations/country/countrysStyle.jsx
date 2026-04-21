import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appBarCustom: { height: 90, paddingTop: 30, paddingHorizontal: 15, elevation: 5 },
    topAddBtn: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 6, borderRadius: 10 },

    // Search Section
    searchSectionWrapper: { flexDirection: 'row', padding: 15, alignItems: 'center' },
    searchContainer: {
        flex: 1, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12,
        height: 50, alignItems: 'center', paddingHorizontal: 12, elevation: 2,
        borderWidth: 1, borderColor: '#f1f5f9'
    },
    searchInputField: { flex: 1, color: '#1e293b', fontWeight: '500' },
    vDivider: { width: 1, height: '50%', backgroundColor: '#e2e8f0', marginHorizontal: 10 },
    mainSearchBtn: {
        backgroundColor: '#18b5a1', height: 50, width: 50, borderRadius: 12,
        marginLeft: 10, justifyContent: 'center', alignItems: 'center', elevation: 3
    },

    // Card UI
    modernCard: {
        backgroundColor: '#fff', marginHorizontal: 15, marginBottom: 12,
        borderRadius: 16, elevation: 3, shadowColor: '#64748b',
        shadowOpacity: 0.1, shadowRadius: 8, overflow: 'hidden'
    },
    cardAccent: { height: 4, backgroundColor: '#18b5a1', width: '100%', opacity: 0.7 },
    cardContent: { padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    cardInfoSection: { flexDirection: 'row', alignItems: 'center' },
    iconCircle: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#f0fdfa', justifyContent: 'center', alignItems: 'center' },
    cardStateTitle: { fontSize: 16, fontWeight: '700', color: '#1e293b' },
    countryBadge: { flexDirection: 'row', alignItems: 'center', marginTop: 4, backgroundColor: '#f8fafc', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
    countryBadgeText: { fontSize: 12, color: '#64748b', marginLeft: 4, fontWeight: '600' },
    cardActionsRow: { flexDirection: 'row' },
    miniBtn: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },

    // Filter Dropdown
    filterDropdown: { backgroundColor: '#fff', borderRadius: 10, height: 45, paddingHorizontal: 12, borderWidth: 1, borderColor: '#e2e8f0' },
    dropPlaceholder: { color: '#94a3b8', fontSize: 14 },
    dropSelectedText: { fontSize: 14, color: '#1e293b' },

    // Modal UI
    modalOverlay: { flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.7)', justifyContent: 'center', alignItems: 'center' },
    modernModalBox: { width: '90%', backgroundColor: '#fff', borderRadius: 24, overflow: 'hidden', elevation: 20 },
    modalHeader: { paddingVertical: 18, alignItems: 'center' },
    modalTitleText: { color: '#fff', fontSize: 18, fontWeight: '800', letterSpacing: 0.5 },
    modalPadding: { padding: 20 },
    inputLabel: { fontSize: 11, fontWeight: '800', color: '#94a3b8', marginBottom: 8, letterSpacing: 1 },
    modalInputWrapper: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: '#f8fafc',
        borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0', height: 52,
        paddingHorizontal: 15, marginBottom: 20
    },
    modalTextInput: { flex: 1, color: '#1e293b', fontSize: 15, fontWeight: '500' },
    modalDropdown: {
        backgroundColor: '#f8fafc', borderRadius: 12, borderWidth: 1,
        borderColor: '#e2e8f0', height: 52, paddingHorizontal: 15, marginBottom: 25
    },
    modalActionsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    modalCancelBtn: { flex: 1, alignItems: 'center' },
    cancelText: { color: '#94a3b8', fontWeight: '700', fontSize: 15 },
    modalSubmitBtn: { flex: 2 },
    submitGradient: { paddingVertical: 14, borderRadius: 15, alignItems: 'center', elevation: 4 },
    submitText: { color: '#fff', fontWeight: '700', fontSize: 16 }
});

export default styles