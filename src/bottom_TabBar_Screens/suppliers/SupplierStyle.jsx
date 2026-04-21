import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrhMainContainer: { flex: 1, backgroundColor: '#F4F7FA' },
    wrhBodyWrapper: { paddingHorizontal: 15 },
    wrhSearchRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
    wrhInputContainer: {
        flex: 1, flexDirection: 'row', borderRadius: 12, height: 48,
        alignItems: 'center', backgroundColor: '#fff', elevation: 1,
        borderWidth: 1, borderColor: '#E8EFF5'
    },
    wrhInputField: { flex: 1, paddingHorizontal: 15, fontSize: 14, color: '#333' },
    filterBtn: { paddingHorizontal: 12 },
    wrhSearchBtn: {
        backgroundColor: '#18b5a1', borderRadius: 12, height: 48, width: 48,
        marginLeft: 10, alignItems: 'center', justifyContent: 'center', elevation: 2
    },
    filterSection: { flexDirection: 'row', paddingHorizontal: 11, marginBottom: 12 },
    dropdownContainer: { flex: 1, paddingHorizontal: 4 },
    dropdown: {
        height: 42, borderRadius: 10, paddingHorizontal: 12,
        backgroundColor: 'white', borderWidth: 1, borderColor: '#E8EFF5'
    },
    placeholderStyle: { fontSize: 13, color: '#9CA3AF' },
    selectedTextStyle: { fontSize: 13, color: '#1F2937' },
    listPadding: { paddingBottom: 20 },
    wrhCard: {
        backgroundColor: '#fff', borderRadius: 16,
        marginHorizontal: 15, marginBottom: 15, elevation: 2,
        flexDirection: 'row', borderWidth: 1, borderColor: '#E8EFF5',
        overflow: 'hidden'
    },
    cardMainContent: { flex: 1, padding: 12 },
    cardHeader: { flexDirection: 'row', alignItems: 'flex-start' },
    iconCircle: {
        width: 40, height: 40, borderRadius: 20,
        backgroundColor: '#E8F8F6', alignItems: 'center', justifyContent: 'center'
    },
    supplierName: { fontSize: 15, fontWeight: '700', color: '#1A1C1E', lineHeight: 20 },
    locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
    locationText: { fontSize: 11, color: '#666', fontWeight: '500' },
    dotSeparator: { width: 3, height: 3, borderRadius: 1.5, backgroundColor: '#CBD5E1', marginHorizontal: 6 },
    typeText: { fontSize: 11, color: '#18b5a1', fontWeight: '600' },
    cardBody: { marginTop: 12, gap: 8 },
    infoRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    infoText: { fontSize: 12, color: '#444' },
    addressText: { fontSize: 12, color: '#666', flex: 1, lineHeight: 18 },
    cardFooter: { marginTop: 10, paddingTop: 8, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
    enteredByText: { fontSize: 10, color: '#999', fontStyle: 'italic' },
    actionSection: {
        width: 45, backgroundColor: '#F9FCFF', borderLeftWidth: 1,
        borderLeftColor: '#E8EFF5', justifyContent: 'center', alignItems: 'center'
    },
    actionBtn: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' },
    actionDivider: { height: 1, backgroundColor: '#E8EFF5', width: '60%' },
});
export default styles