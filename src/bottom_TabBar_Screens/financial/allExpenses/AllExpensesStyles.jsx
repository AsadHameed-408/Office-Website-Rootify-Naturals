import { Dimensions, StyleSheet } from "react-native"
const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    wrhBodyWrapper: {
        paddingHorizontal: 15,
    },
    wrhSearchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    container: {
        flex: 1,
    },
    dropdown: {
        height: 50,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#9e9595'
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#000'
    },
    filterToggleBtn: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginLeft: 5,
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
    },
    body: {
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    wrhCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 12,
        elevation: 3,
        flexDirection: 'row',
    },
    detailsContainer: {
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {
        marginVertical: 2,
    },
    labelText: {
        fontSize: 11,
        color: '#888',
        textTransform: 'uppercase',
        marginBottom: 2,
    },
    valueText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginVertical: 8
    },
    VerticalDivider: {
        width: 1,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 12
    },
    actionContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    receiptThumb: {
        height: 55,
        width: 55,
        borderRadius: 6,
        backgroundColor: '#f9f9f9'
    },
    bottomBtn: {
        borderRadius: 8,
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
});

export default styles