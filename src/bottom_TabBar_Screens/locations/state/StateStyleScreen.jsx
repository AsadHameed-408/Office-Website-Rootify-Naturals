import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 15
    },
    // inputfeild and text
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8
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
        marginVertical: 5,
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
    // add and search feild
    wrhMainContainer: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    wrhBodyWrapper: {
        paddingHorizontal: 15,
    },
    wrhSearchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        justifyContent: 'space-between',
    },
    wrhInputContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    wrhInputField: {
        flex: 1,
        paddingHorizontal: 12,
        color: '#000',
    },
    wrhVerticalDivider: {
        width: 1,
        backgroundColor: '#D9D9D9',
        height: '60%',
    },
    wrhFilterIcon: {
        marginHorizontal: 10,
    },
    wrhAddBtn: {
        backgroundColor: '#18b5a1',
        borderRadius: 8,
        height: 50,
        width: 50,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },

    // Warehouse Card
    wrhCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrhListContentText: { color: '#555', marginBottom: 2 },
    status: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 3,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
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
        marginRight: 10,
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
    // modal
    modalBackGroundContainer: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modelContainer: {
        width: "90%",
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    // CLOSE BTN
    closeBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginVertical: 10,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 30,
    }
})

export default styles