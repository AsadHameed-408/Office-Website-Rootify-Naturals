import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 15
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
    }
})

export default styles