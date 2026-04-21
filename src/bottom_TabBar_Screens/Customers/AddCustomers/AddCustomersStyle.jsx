import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: '#F8FAFC' },
    body: { paddingHorizontal: 20 },
    fieldWrapper: { marginBottom: 12 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
    label: {
        fontSize: 13,
        fontWeight: '700',
        color: '#64748B',
        marginBottom: 6,
        marginTop: 10,
        textTransform: 'uppercase',
        letterSpacing: 0.5
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E2E8F0',
        borderWidth: 1.5,
        borderRadius: 12,
        height: 52,
        backgroundColor: '#fff',
    },
    activeBorder: {
        borderColor: '#18b5a1',
        backgroundColor: '#F0FDFA', // Light tint on focus
    },
    iconBox: {
        paddingLeft: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        fontSize: 14,
        color: '#1E293B',
        fontWeight: '500'
    },
    dropdown: {
        height: 52,
        borderRadius: 12,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        borderColor: '#E2E8F0',
        borderWidth: 1.5,
        marginBottom: 5,
    },
    placeholderStyle: { fontSize: 14, color: '#94A3B8' },
    selectedTextStyle: { fontSize: 14, color: '#1E293B', fontWeight: '500' },
    confirmBtn: {
        height: 55,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#18b5a1',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    btnText: { color: 'white', fontSize: 16, fontWeight: '800', letterSpacing: 1 }
});
export default styles;