import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    body: { flex: 1, padding: 15 },
    heading: { fontSize: 16, fontWeight: 'bold', marginBottom: 12, color: '#333', marginTop: 10 },
    textLabel: { fontSize: 13, fontWeight: '600', color: '#555', marginBottom: 5 },
    inputContainer: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        height: 48,
        marginBottom: 15,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    input: { flex: 1, color: 'black', fontSize: 14 },
    container: { flex: 1 },
    dropdown: {
        height: 48,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        marginBottom: 15,
    },
    placeholderStyle: { fontSize: 14, color: '#D9D9D9' },
    selectedTextStyle: { fontSize: 14, color: '#000' },
    checkboxRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        alignSelf: 'flex-start'
    },
    confirmBtn: {
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        elevation: 2
    },
    btnText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
})
export default styles