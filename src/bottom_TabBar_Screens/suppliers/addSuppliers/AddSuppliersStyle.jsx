import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    body: {
        padding: 20
    },
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
        marginBottom: 18,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        color: 'black',
        fontSize: 15,
    },
    textAreaContainer: {
        height: 100,
        alignItems: 'flex-start',
    },
    textArea: {
        textAlignVertical: 'top',
        paddingTop: 10,
        width: '100%',
    },
    dropdown: {
        height: 48,
        borderRadius: 8,
        paddingHorizontal: 12,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginBottom: 18,
        backgroundColor: '#fff',
    },
    activeBorder: {
        borderColor: '#18b5a1',
        borderWidth: 1.5,
    },
    placeholderStyle: {
        fontSize: 15,
        color: '#ababab',
    },
    selectedTextStyle: {
        fontSize: 15,
        color: '#000',
    },
    confirmBtn: {
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
export default styles;