import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollBody: {
        padding: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '700',
        color: '#34495E',
        marginTop: 15,
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#F9FBFC',
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 15,
        color: '#2C3E50',
    },
    dropdown: {
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 12,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        backgroundColor: '#F9FBFC',
    },
    placeholderStyle: {
        fontSize: 15,
        color: '#BDC3C7',
    },
    selectedTextStyle: {
        fontSize: 15,
        color: '#2C3E50',
    },
    itemTextStyle: {
        fontSize: 14,
    },
    imagePickerContainer: {
        height: 160,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#D9D9D9',
        borderStyle: 'dashed', // Professional dashed look
        backgroundColor: '#FBFBFB',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    imagePickerContent: {
        alignItems: 'center',
    },
    imagePickerText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#7F8C8D',
        marginTop: 8,
    },
    imagePickerSubText: {
        fontSize: 12,
        color: '#BDC3C7',
        marginTop: 4,
    },
    confirmBtn: {
        height: 54,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    // Modal Refined Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
        padding: 15,
    },
    modalContent: {
        width: '100%',
    },
    modalOptionsWrapper: {
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 10,
    },
    modalOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
    },
    modalOptionText: {
        fontSize: 17,
        color: '#34495E',
        marginLeft: 10,
    },
    modalDivider: {
        height: 1,
        backgroundColor: '#F0F0F0',
        width: '100%',
    },
    modalCancelBtn: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: 18,
        alignItems: 'center',
        marginBottom: 20,
    },
    modalCancelText: {
        fontSize: 17,
        fontWeight: '700',
        color: '#E74C3C',
    },
});
export default styles;