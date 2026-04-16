import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    body: {
        padding: 20
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
    },
    inputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
    },
    input: {
        flex: 1,
        borderRadius: 8,
        color: 'black',
    },
    // button
    confirmBtn: {
        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    }
})
export default styles;