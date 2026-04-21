import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    HeaderContainer: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    leftSection: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
    headerTitle: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginLeft: 10 },
    wrhAddBtn: { padding: 8, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 8, marginTop: 10 },
    body: { padding: 15 },
    row: { flexDirection: 'row', alignItems: 'center' },
    flex1: { flex: 1 },
    textLabel: { fontSize: 13, fontWeight: '700', color: '#333', marginBottom: 5 },
    dropdown: {
        height: 45, borderColor: '#D9D9D9', borderWidth: 1, borderRadius: 8,
        backgroundColor: 'white', paddingHorizontal: 10, marginBottom: 15
    },
    inputContainer: {
        borderColor: '#D9D9D9', borderWidth: 1, borderRadius: 8,
        height: 45, marginBottom: 15, backgroundColor: 'white'
    },
    input: { flex: 1, paddingHorizontal: 10, color: 'black' },
    dateSelector: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 },
    wrhCard: {
        backgroundColor: '#fff', borderRadius: 12, padding: 12, marginTop: 10,
        elevation: 2, shadowColor: '#000', shadowOpacity: 0.1,
    },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    heading: { fontSize: 14, fontWeight: 'bold', flex: 1, color: '#2C3E50' },
    deleteBtn: { backgroundColor: '#FF5252', borderRadius: 6, padding: 5, alignItems: 'center', justifyContent: 'center' },
    cardtextLabel: { fontSize: 10, fontWeight: 'bold', color: '#7F8C8D', marginBottom: 4 },
    cardInput: {
        borderWidth: 1, borderColor: '#eee', borderRadius: 6, height: 38,
        paddingHorizontal: 8, fontSize: 12, backgroundColor: '#F9F9F9'
    },
    valText: { fontSize: 13, fontWeight: '600' },
    bottomCard: {
        position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 70,
        backgroundColor: '#fff', padding: 15, borderTopLeftRadius: 20, borderTopRightRadius: 20,
        elevation: 20, shadowColor: '#000', shadowOffset: { width: 0, height: -3 },
    },
    bottomInput: {
        borderWidth: 1, borderColor: '#D9D9D9', borderRadius: 8, height: 40,
        paddingHorizontal: 10, backgroundColor: '#fff', marginRight: 5
    },
    bottomDisplay: {
        height: 40, borderRadius: 8, backgroundColor: '#F5F7FA',
        justifyContent: 'center', paddingHorizontal: 10, marginRight: 5
    }
});
export default styles