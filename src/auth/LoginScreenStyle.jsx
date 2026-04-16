import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    brandName: {
        fontSize: 28,
        fontWeight: '800',
        color: '#ffffff',
    },
    brandTagline: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.85)',
        fontWeight: '400',
    },
    //  login form
    loginFormContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginHorizontal: 16,
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 40,
        shadowColor: '#1fbba6',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.08,
        shadowRadius: 15,
        elevation: 6,
        marginTop: -100,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1f2937',
        textAlign: 'center',
        marginBottom: 8,
    },
    formSubtitle: {
        fontSize: 14,
        color: '#6b7280',
        textAlign: 'center',
        marginBottom: 32,
        lineHeight: 20,
    },
    // Input fields, borrowing styling from dropdowns/search on web screenshot
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        height: 56, // Modern comfortable touch target
    },
    inputIcon: {
        marginRight: 12,
        opacity: 0.9,
    },
    textInput: {
        flex: 1,
        height: '100%',
        color: '#1f2937',
        fontSize: 16,
    },
    forgotPassTouch: {
        alignSelf: 'flex-end',
        marginBottom: 32,
    },
    forgotPassText: {
        fontSize: 14,
        color: '#138b82',
        fontWeight: '500',
    },
    // Main CTA Button
    submitButton: {
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#1fbba6',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
})