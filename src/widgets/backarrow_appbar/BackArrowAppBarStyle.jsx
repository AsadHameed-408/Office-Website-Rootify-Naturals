import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
});
export default styles