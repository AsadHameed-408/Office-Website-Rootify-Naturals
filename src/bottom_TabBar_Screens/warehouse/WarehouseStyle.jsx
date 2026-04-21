import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrhMainContainer: {
        flex: 1,
        backgroundColor: '#F4F7FA',
    },
    headerSection: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
        borderWidth: 1,
        borderColor: '#E8EFF5',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
            android: { elevation: 2 },
        }),
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333',
        marginLeft: 8,
    },
    searchBtn: {
        backgroundColor: '#18b5a1',
        width: 48,
        height: 48,
        borderRadius: 12,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    listPadding: {
        paddingBottom: 30,
        paddingHorizontal: 16,
    },
    wrhCard: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        marginBottom: 16,
        flexDirection: 'row', // Card content and buttons row
        borderWidth: 1,
        borderColor: '#E8EFF5',
        elevation: 1,
        overflow: 'hidden'
    },
    cardMainContent: {
        flex: 1,
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
    },
    imageWrapper: {
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 12,
    },
    cardInfo: {
        flex: 1,
        paddingLeft: 15
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1A1C1E'
    },
    warehouseLabel: {
        fontSize: 13,
        color: '#18b5a1',
        fontWeight: '600',
        marginBottom: 5
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        gap: 6,
    },
    infoText: {
        fontSize: 12,
        color: '#666',
    },
    cityWrapper: {
        marginTop: 4,
    },
    cityText: {
        fontSize: 11,
        color: '#999',
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    // New Action Styles
    actionSection: {
        width: 50,
        backgroundColor: '#F9FCFF',
        borderLeftWidth: 1,
        borderLeftColor: '#E8EFF5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtn: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionDivider: {
        height: 1,
        backgroundColor: '#E8EFF5',
        width: '60%',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        color: '#999',
    }
});
export default styles;
