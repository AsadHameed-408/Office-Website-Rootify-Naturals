import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffffff' },
    section: { paddingHorizontal: 20, paddingVertical: 15 },
    sectionHeader: {
        fontSize: 10,
        fontWeight: '800',
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        marginBottom: 15
    },

    // Grid Layout Styles
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18
    },
    gridItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%'
    },

    // Standard Row Style
    fullRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18
    },

    iconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#f8fafc',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#f1f5f9'
    },
    textContainer: { marginLeft: 12, flex: 1 },
    label: { fontSize: 9, color: '#64748b', fontWeight: '600', textTransform: 'uppercase' },
    value: { fontSize: 13, color: '#1e293b', fontWeight: '600', marginTop: 1 },
    lineDivider: { height: 1, backgroundColor: '#f1f5f9', marginHorizontal: 20 },

    badgeContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
    badge: {
        backgroundColor: '#eff6ff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        marginRight: 8,
        marginBottom: 8
    },
    badgeText: { color: '#2563eb', fontSize: 10, fontWeight: '700' },
    updateBadge: { backgroundColor: '#fff7ed' },
    updateBadgeText: { color: '#c2410c', fontSize: 10, fontWeight: '700' }
});
export default styles