import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    body: { padding: 20 },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    inputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 48,
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        color: 'black',
        fontSize: 15
    },
    dropdown: {
        height: 48,
        borderRadius: 8,
        paddingHorizontal: 12,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginBottom: 20,
    },
    placeholderStyle: { fontSize: 15, color: '#ababab' },
    selectedTextStyle: { fontSize: 15, color: '#000' },
    btnWrapper: {
        marginTop: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    confirmBtn: {
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.5
    }
});

export default styles;