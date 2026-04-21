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
        marginTop: 12,
        marginBottom: 6,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#F9FBFC',
        marginBottom: 5,
    },
    icon: {
        paddingLeft: 12,
        width: 40,
    },
    input: {
        flex: 1,
        paddingHorizontal: 5,
        fontSize: 15,
        color: '#2C3E50',
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
    }
});
export default styles;