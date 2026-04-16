import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 15,
    },
    // inputfeild and text
    heading: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 8
    },
    textLabel: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    inputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        backgroundColor: 'white'
    },
    input: {
        flex: 1,
        borderRadius: 8,
        color: 'black',
    },
    inputFieldplaceholder: {
        color: '#D9D9D9',
    },
    //  dropdown design
    container: {
        flex: 1,
    },
    dropdown: {
        height: 45,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        marginBottom: 15,
        marginTop: 5,
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
        color: '#D9D9D9'
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
    // delate btn
    deleteBtnContainer: {
        backgroundColor: '#ff0000',
        borderRadius: 8,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,

    },
    //  card container
    BallanceCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrhCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignItems: 'center',
    },
    wrhListContentText: { color: '#555', marginBottom: 2, fontSize: 12 },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardtextLabel: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    // Bottom Card
    bottomCard: {
        height: 165,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        position: 'relative',
    },
    BottomBtn: {
        height: 45,
        backgroundColor: '#18b5a1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        margin: 5,
    }

})
export default styles