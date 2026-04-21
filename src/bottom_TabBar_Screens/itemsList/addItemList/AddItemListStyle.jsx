import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 15,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        color: '#333'
    },
    textLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555'
    },
    inputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        color: 'black',
    },
    container: {
        flex: 1,
    },
    dropdown: {
        height: 45,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        marginBottom: 15,
        marginTop: 5,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#D9D9D9'
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    imageContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: 'dashed',
        height: 120,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmBtn: {
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20
    },
    modalBotomContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 12,
        marginBottom: 10,
        overflow: 'hidden'
    },
    modalOption: {
        padding: 15,
        alignItems: 'center',
        width: '100%'
    },
    separator: {
        backgroundColor: '#EEE',
        height: 1,
        width: '100%'
    }
});
export default styles