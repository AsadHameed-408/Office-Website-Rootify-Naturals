import { Dimensions, StyleSheet } from "react-native";
const size = Dimensions.get('screen')
const DashBoardStyle = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 40,
        height: 90,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    headerTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 10,
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        padding: 8,
        marginHorizontal: 2,
    },
    profileImageContainer: {
        backgroundColor: '#ffffff',
        width: 34,
        height: 34,
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    // body design
    cardContainer: {
        backgroundColor: '#fff',
        flex: 1,
        margin: 4,
        padding: 12,
        borderRadius: 8,
    },
    cardIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8
    },
    body: {
        paddingHorizontal: 8,

    },
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
})
export default DashBoardStyle