import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrhBodyWrapper: {
        paddingHorizontal: 15,
    },
    wrhSearchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    wrhInputContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    wrhInputField: {
        flex: 1,
        paddingHorizontal: 15,
        color: '#000',
    },
    wrhAddBtn: {
        backgroundColor: '#18b5a1',
        borderRadius: 10,
        height: 50,
        width: 50,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    wrhCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    wrhListContentText: {
        color: '#666',
        fontSize: 13
    },
    actionIconBtn: {
        backgroundColor: '#18b5a1',
        borderRadius: 6,
        height: 32,
        width: 32,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles