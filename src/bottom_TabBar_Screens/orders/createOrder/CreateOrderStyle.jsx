import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    body: {
        padding: 15,
        flex: 1,
    },
    // 
    HeaderContainer: {
        height: 80, // Apne mutabiq adjust karein
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 30, // StatusBar ke liye space agar zaroori ho
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        padding: 5,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    wrhAddBtn: {
        padding: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Optional: button background
        borderRadius: 8,
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
    //  card container
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
        height: 230,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 50,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#18b5a1'
    },
    bottomIinputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        backgroundColor: 'white'
    },

})
export default styles