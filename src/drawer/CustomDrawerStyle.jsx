import { use } from 'react'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    drawerHeaderContainer: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImageContainer: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 8,
        marginVertical: 4,
        paddingVertical: 12,
        borderRadius: 8,
    },
    itemText: {
        fontSize: 16,
    },
    itemMenuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 40,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginVertical: 4,
    },
    drawerHorizontalLine: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 12,
    },
    copyrightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
})