import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    scrollContent: {
        flexGrow: 1,
    },
    headerGradient: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
    },
    brandContainer: {
        alignItems: 'center',
    },
    brandName: {
        fontSize: 32,
        fontWeight: '900',
        color: '#ffffff',
        letterSpacing: 1,
    },
    brandTagline: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '500',
        marginTop: 4,
    },
    formArea: {
        flex: 1,
        marginTop: -100,
    },
    loginFormContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 24,
        marginHorizontal: 20,
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 40,
        // Shadow for iOS
        shadowColor: '#1fbba6',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        // Elevation for Android
        elevation: 10,
    },
    formTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#1f2937',
        textAlign: 'center',
    },
    formSubtitle: {
        fontSize: 14,
        color: '#6b7280',
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 4,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#f3f4f6',
        borderRadius: 16,
        paddingHorizontal: 16,
        height: 58,
        backgroundColor: '#f9fafb',
        borderBottomColor: '#1fbba6'
    },
    inputIcon: {
        marginRight: 12,
    },
    textInput: {
        flex: 1,
        height: '100%',
        color: '#1f2937',
        fontSize: 16,
        fontWeight: '500',
    },
    forgotPassTouch: {
        alignSelf: 'flex-end',
        marginBottom: 25,
    },
    forgotPassText: {
        fontSize: 14,
        color: '#138b82',
        fontWeight: '700',
    },
    submitButton: {
        height: 58,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#1fbba6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '800',
        letterSpacing: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        marginTop: 'auto',
    },
    footerText: {
        color: '#6b7280',
        marginLeft: 6,
        fontSize: 13,
        fontWeight: '500',
    },
});
export default style