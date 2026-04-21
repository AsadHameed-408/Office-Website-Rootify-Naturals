import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    body: { padding: 20 },
    label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 5 },
    inputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        marginVertical: 10,
        backgroundColor: '#fff'
    },
    input: { flex: 1, paddingHorizontal: 10, color: 'black' },
    dropdown: {
        height: 45,
        borderRadius: 8,
        paddingHorizontal: 8,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: '#fff'
    },
    placeholderStyle: { fontSize: 14, color: '#ababab' },
    selectedTextStyle: { fontSize: 14, color: '#333' },
    confirmBtn: {
        height: 50,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    btnText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
    imagePickerContainer: {
        height: 180,
        borderColor: '#D9D9D9',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 12,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9'
    },
    imagePickerText: { color: '#ababab', marginTop: 5 },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20
    },
    modalBottomContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 12,
        marginBottom: 10,
        overflow: 'hidden'
    },
    modalOption: {
        paddingVertical: 15,
        alignItems: 'center',
        width: '100%'
    },
    separator: { height: 1, backgroundColor: '#eee', width: '100%' }
});
export default styles;