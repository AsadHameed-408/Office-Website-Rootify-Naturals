import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
        borderWidth: 1,
        borderColor: '#F5F5F5',
    },
    detailsSection: {
        flex: 1,
    },
    orderNumber: {
        color: '#1A2533',
        fontSize: 22,
        fontWeight: 'bold',
    },
    storeName: {
        color: '#546E7A',
        fontSize: 14,
        marginBottom: 2,
    },
    orderDate: {
        color: '#90A4AE',
        fontSize: 11,
        marginBottom: 12,
    },
    badgeContainer: {
        gap: 6,
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 15,
        alignSelf: 'flex-start',
    },
    pendingBadge: { backgroundColor: '#E67E22' },
    unfulfilledBadge: { backgroundColor: '#E74C3C' },
    badgeText: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: '600',
        marginLeft: 4,
    },
    actionSection: {
        justifyContent: 'center',
        gap: 6, // Buttons ke darmiyan space
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6, // Reduced padding
        paddingHorizontal: 12, // Reduced padding
        borderRadius: 8,
        minWidth: 110, // Width kam kar di
        justifyContent: 'center',
    },
    confirmBtn: { backgroundColor: '#27AE60' },
    cancelBtn: { backgroundColor: '#E74C3C' },
    returnBtn: { backgroundColor: '#F39C12' },
    buttonText: {
        color: '#FFF',
        fontSize: 12, // Text size chota kar diya
        fontWeight: '600',
        marginLeft: 5,
    },
    // ----------------------------
    sm_card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 15,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
        borderWidth: 1,
        borderColor: '#F5F5F5',
    },
    sm_row_space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    sm_header_txt: {
        fontSize: 15,
        fontWeight: '700',
        color: '#444',
    },
    sm_section: {
        marginBottom: 8,
    },
    sm_label: {
        fontSize: 11,
        color: '#999',
        marginBottom: 2,
    },
    sm_name_txt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    sm_icon_text_row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    sm_val_txt: {
        fontSize: 13,
        color: '#555',
        marginLeft: 6,
        flex: 1,
    },
    sm_link: {
        fontSize: 12,
        color: '#4A90A4',
        fontWeight: 'bold',
    },
    sm_address_container: {
        backgroundColor: '#F7F8F9',
        borderRadius: 8,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    sm_address_txt: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    sm_mini_map: {
        width: 50,
        height: 50,
        backgroundColor: '#EAEAEA',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    sm_btn_container: {
        backgroundColor: '#18b5a1', // Card ke edit icon wala color
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 12,
        alignSelf: 'center',
        width: '90%',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    sm_btn_text: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 8,
    },
});
export default styles