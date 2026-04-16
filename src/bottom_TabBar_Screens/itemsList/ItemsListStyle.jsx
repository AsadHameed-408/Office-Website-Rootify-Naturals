import { Dimensions, StyleSheet } from "react-native";
const size = Dimensions.get('screen')
const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 15
    },
    // dropdown
    //  dropdown design
    container: {
        flex: 1,
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    dropdown: {
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white',
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
    // card image container

    imageWrapper: {
        marginRight: 12,
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 6,
        backgroundColor: '#f0f0f0',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    itemSku: {
        fontSize: 12,
        color: '#888',
    },
    labelText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#555',
    },
    valueText: {
        fontSize: 14,
        color: '#666',
    },
    // divider
    divider: { flex: 1, height: 1, backgroundColor: '#ccc', marginVertical: 10 },
    // bottom container
    bottomContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    // bottom btn
    bottomBtn: { flex: 1, borderRadius: 8, height: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }
})

export default styles