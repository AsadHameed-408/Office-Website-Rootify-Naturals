import { Dimensions, StyleSheet } from "react-native";
const size = Dimensions.get('screen')
const styles = StyleSheet.create({
    searchWrapper: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#eee',
        height: 48,
    },
    inputField: {
        flex: 1,
        paddingHorizontal: 15,
        color: '#000',
    },
    searchBtn: {
        backgroundColor: '#18b5a1',
        width: 48,
        height: 48,
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterSection: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginBottom: 10,
        gap: 10
    },
    dropdownWrapper: { flex: 1 },
    dropdown: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#eee'
    },
    placeholderStyle: { fontSize: 13, color: '#999' },
    selectedTextStyle: { fontSize: 13, color: '#333' },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        padding: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    cardMain: { flexDirection: 'row' },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
    },
    details: { flex: 1, marginLeft: 12 },
    titleRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
    itemName: { fontSize: 15, fontWeight: 'bold', color: '#333', width: '70%' },
    skuText: { fontSize: 11, color: '#18b5a1', fontWeight: '600' },
    infoRow: { flexDirection: 'row', marginBottom: 2 },
    infoLabel: { fontSize: 12, color: '#777', width: 65 },
    infoValue: { fontSize: 12, color: '#333', fontWeight: '500' },
    priceText: { fontSize: 14, fontWeight: 'bold', color: '#18b5a1', marginTop: 5 },
    divider: { height: 1, backgroundColor: '#f0f0f0', marginVertical: 10 },
    cardActions: { flexDirection: 'row', gap: 10 },
    actionBtn: {
        flex: 1,
        flexDirection: 'row',
        height: 35,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles