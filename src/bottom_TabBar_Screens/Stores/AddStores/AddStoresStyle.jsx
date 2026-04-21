import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    body: {
        padding: 20
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginTop: 5,
    },
    inputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 48,
        marginBottom: 15,
        marginTop: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        color: 'black',
        fontSize: 15,
    },
    confirmBtn: {
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        elevation: 2,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
export default styles;