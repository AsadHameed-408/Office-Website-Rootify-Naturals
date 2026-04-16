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
    },
    input: {
        flex: 1,
        borderRadius: 8,
        color: 'black',
    },
    //  dropdown design
    container: {
        flex: 1,
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    dropdown: {
        height: 45,
        borderRadius: 8,
        paddingHorizontal: 8,
        // backgroundColor: 'white',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginVertical: 10
    },
    icon: {
        marginRight: 5,
    },
    dropdownlabel: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#ababab',
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
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
    },
    // image picker
    imagePickerContainer: {
        flex: 1,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        height: 200,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePickerText: {
        color: '#D9D9D9'
    },
    // Modal
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalBotomContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: '10',
        width: '90%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,
        elevation: 10,
    },
})
export default styles;