import { use } from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: '#fff' },
    header: { height: 140, justifyContent: 'center', paddingHorizontal: 20, borderBottomRightRadius: 30 },
    profileRow: { flexDirection: 'row', alignItems: 'center', gap: 15, paddingTop: 20 },
    avatarCircle: { width: 60, height: 60, backgroundColor: '#fff', borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 5 },
    nameText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    roleBadge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 12, marginTop: 4, alignSelf: 'flex-start' },
    roleText: { color: '#fff', fontSize: 12, fontWeight: '600' },

    menuList: { paddingVertical: 15 },
    menuItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 15, marginHorizontal: 10, borderRadius: 10, marginBottom: 2 },
    activeMenuItem: { backgroundColor: '#18b5a108' },
    row: { flexDirection: 'row', alignItems: 'center' },
    iconBox: { width: 36, height: 36, justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
    menuLabel: { marginLeft: 12, fontSize: 14, color: '#444', fontWeight: '500' },

    subMenuContainer: { backgroundColor: '#fcfcfc', marginHorizontal: 15, borderRadius: 10, paddingVertical: 5, marginBottom: 5, borderLeftWidth: 2, borderLeftColor: '#18b5a1' },
    subItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingLeft: 20 },
    subDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#18b5a160', marginRight: 15 },
    subLabel: { fontSize: 13, color: '#666' },

    footerContainer: { padding: 20, backgroundColor: '#fcfcfc', paddingBottom: 60 },
    logoutBtn: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    logoutIcon: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
    logoutText: { marginLeft: 12, fontSize: 15, fontWeight: 'bold', color: '#444' },
    divider: { height: 1, backgroundColor: '#eee', marginBottom: 15 },
    copyrightBox: { alignItems: 'center' },
    footerBrand: { fontSize: 12, color: '#999', fontWeight: 'bold' },
    footerDev: { fontSize: 10, color: '#bbb', marginTop: 2 }
});
export default styles