import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: '#F8FAFC' },
    searchWrapper: { paddingHorizontal: 15, marginBottom: 5 },
    searchRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 15 },
    inputContainer: {
        flex: 1, flexDirection: 'row', backgroundColor: '#fff',
        borderRadius: 12, height: 50, alignItems: 'center', elevation: 2,
        borderWidth: 1, borderColor: '#E2E8F0'
    },
    searchField: { flex: 1, paddingHorizontal: 15, fontSize: 14, color: '#1E293B' },
    divider: { width: 1, height: '40%', backgroundColor: '#E2E8F0' },
    filterToggle: { paddingHorizontal: 12 },
    searchBtn: {
        backgroundColor: '#18b5a1', width: 50, height: 50, borderRadius: 12,
        marginLeft: 10, justifyContent: 'center', alignItems: 'center', elevation: 3
    },
    filterPanel: {
        backgroundColor: '#fff', padding: 12, borderRadius: 12,
        elevation: 2, marginBottom: 10, borderWidth: 1, borderColor: '#E2E8F0'
    },
    filterRow: { flexDirection: 'row', gap: 10 },
    dropWrap: { flex: 1 },
    dropLabel: { fontSize: 11, fontWeight: '700', color: '#64748B', marginBottom: 4 },
    dropdown: { height: 38, backgroundColor: '#F1F5F9', borderRadius: 8, paddingHorizontal: 10 },
    dropPlaceholder: { fontSize: 12, color: '#94A3B8' },
    dropSelected: { fontSize: 12, color: '#1E293B' },

    // Card Styling
    custCard: {
        backgroundColor: '#fff', marginHorizontal: 15, marginBottom: 15,
        borderRadius: 16, flexDirection: 'row', elevation: 3,
        borderWidth: 1, borderColor: '#E2E8F0', overflow: 'hidden'
    },
    cardContent: { flex: 1, padding: 15 },
    cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
    avatar: {
        width: 44, height: 44, borderRadius: 22,
        backgroundColor: '#E8F8F6', justifyContent: 'center', alignItems: 'center'
    },
    avatarText: { color: '#18b5a1', fontWeight: 'bold', fontSize: 18 },
    headerInfo: { marginLeft: 12, flex: 1 },
    customerName: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
    subHeaderRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
    warehouseBadge: { fontSize: 11, color: '#18b5a1', fontWeight: '600' },
    dot: { width: 3, height: 3, borderRadius: 1.5, backgroundColor: '#CBD5E1', marginHorizontal: 6 },
    locationSmall: { fontSize: 11, color: '#64748B' },

    cardBody: { gap: 8, paddingTop: 10, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
    infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    infoText: { fontSize: 12, color: '#475569' },
    addressText: { fontSize: 12, color: '#64748B', flex: 1, lineHeight: 18 },

    // Action Section
    actionSection: {
        width: 46, backgroundColor: '#F9FCFF', borderLeftWidth: 1,
        borderLeftColor: '#E2E8F0', justifyContent: 'center', alignItems: 'center'
    },
    actionBtn: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' },
    actionDivider: { height: 1, backgroundColor: '#E2E8F0', width: '60%' }
});

export default styles