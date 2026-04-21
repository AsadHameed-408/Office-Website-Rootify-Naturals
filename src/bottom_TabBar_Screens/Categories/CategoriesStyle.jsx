import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F4F7F6',
    },
    headerWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center',
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#2C3E50',
    },
    divider: {
        width: 1,
        height: '50%',
        backgroundColor: '#ECF0F1',
        marginHorizontal: 10,
    },
    searchSubmitBtn: {
        backgroundColor: '#18b5a1',
        width: 50,
        height: 50,
        borderRadius: 12,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    listPadding: {
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    wrhCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 12,
        marginBottom: 15,
        flexDirection: 'row',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
    },
    categoryImage: {
        width: 85,
        height: 85,
        borderRadius: 12,
        backgroundColor: '#FDF2E9',
    },
    cardContent: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#2C3E50',
        flex: 1,
        marginRight: 5,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
    },
    statusText: {
        fontSize: 10,
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    warehouseText: {
        fontSize: 13,
        color: '#7F8C8D',
        marginLeft: 4,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    switchContainer: {
        marginLeft: -8,
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editBtn: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#E8F8F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    deleteBtn: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#FDEDEC',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles