import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F7F6',
    },
    searchWrapper: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 12,
        alignItems: 'center',
        paddingHorizontal: 15,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#2C3E50',
    },
    verticalDivider: {
        width: 1,
        height: '50%',
        backgroundColor: '#ECF0F1',
        marginHorizontal: 10,
    },
    searchBtn: {
        backgroundColor: '#18b5a1',
        width: 50,
        height: 50,
        borderRadius: 12,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    listContainer: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    courierCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 15,
        marginBottom: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    titleContainer: {
        flex: 1,
    },
    companyName: {
        fontSize: 16,
        fontWeight: '800',
        color: '#2C3E50',
    },
    codeBadge: {
        backgroundColor: '#E8F8F5',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginTop: 4,
    },
    codeText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#18b5a1',
    },
    actionButtons: {
        flexDirection: 'row',
    },
    iconBtnEdit: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#E8F8F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    iconBtnDelete: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#FDEDEC',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    divider: {
        height: 1,
        backgroundColor: '#F0F3F4',
        marginVertical: 12,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    infoTextMain: {
        fontSize: 15,
        fontWeight: '600',
        color: '#34495E',
        marginLeft: 8,
    },
    contactGrid: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 10,
    },
    gridItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.48,
    },
    gridText: {
        fontSize: 13,
        color: '#7F8C8D',
        marginLeft: 6,
    },
    websiteRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBF5FB',
        padding: 8,
        borderRadius: 8,
    },
    websiteText: {
        fontSize: 12,
        color: '#3498DB',
        marginLeft: 8,
        textDecorationLine: 'underline',
    },
});

export default styles