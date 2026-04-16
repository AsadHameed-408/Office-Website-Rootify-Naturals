import { Dimensions, StyleSheet } from "react-native"
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    inputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        backgroundColor: 'white'
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
    detailsContainer: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
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
        fontSize: 12,
        fontWeight: '600',
    },
    valueText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#888',
    },
    textContainer: {
        marginVertical: 3,
        // flex: 1
    },
    // divider
    divider: { flex: 1, height: 1, backgroundColor: '#ccc', marginVertical: 10 },
    // bottom container
    bottomContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    // bottom btn
    bottomBtn: { flex: 1, borderRadius: 8, height: 35, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 },
    // bottom total Container
    bottomTotalContainer: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 50,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        position: "relative",
        // flex: 1

    }
})
export default styles