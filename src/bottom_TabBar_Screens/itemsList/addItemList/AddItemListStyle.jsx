import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 15,
    },
    // inputfeild and text
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    textLabel: {
        fontSize: 14,
        fontWeight: '500',
    },
    inputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        backgroundColor: 'white'
    },
    input: {
        flex: 1,
        borderRadius: 8,
        color: 'black',
    },
    inputFieldplaceholder: {
        color: '#D9D9D9',
    },
    //  dropdown design
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
        marginRight: 10.

    },
    icon: {
        marginRight: 5,
    },
    label: {
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
        color: '#D9D9D9'
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
    // image style
    imageContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: 'dashed',
        height: 150,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
export default styles