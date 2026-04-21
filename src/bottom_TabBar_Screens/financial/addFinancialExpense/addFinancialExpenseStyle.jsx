import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    body: { padding: 15 },
    row: { flexDirection: 'row', gap: 10, marginBottom: 15 },
    container: { flex: 1 },
    textLabel: { fontSize: 13, fontWeight: 'bold', color: '#333' },
    dropdown: { height: 45, borderColor: '#D9D9D9', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, backgroundColor: 'white', marginTop: 5 },
    datePickerInput: { height: 45, borderWidth: 1, borderColor: '#D9D9D9', borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, backgroundColor: 'white', marginTop: 5, marginBottom: 15 },
    BallanceCard: { flex: 1, backgroundColor: '#fff', borderRadius: 12, padding: 15, elevation: 3, alignItems: 'center' },
    wrhCard: { backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 10, elevation: 2 },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
    cardtextLabel: { fontSize: 10, color: '#999', fontWeight: 'bold' },
    wrhListContentText: { fontSize: 13, color: '#333' },
    deleteBtnContainer: { backgroundColor: '#ff4d4d', padding: 6, borderRadius: 6 },
    bottomCard: { paddingBottom: 40, padding: 15, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#eee' },
    BottomBtn: { height: 45, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
})
export default styles