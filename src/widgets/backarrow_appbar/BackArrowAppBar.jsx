import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from './BackArrowAppBarStyle'
import CColors from '../../constants/CColors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const BackArrowAppBar = ({ title, addNavigationRouteName, isAddButtonVisible = false, isDownloadButtonVisible = false, onPressDownload }) => {
    const navigation = useNavigation();

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={CColors.gradient}
            style={[styles.HeaderContainer, {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15
            }]}
        >
            {/* Left Side */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.iconButton}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name='arrow-back' size={24} color={'#ffffff'} />
                </TouchableOpacity>

                <Text style={[styles.headerTitle, { marginLeft: 10 }]}>
                    {title}
                </Text>
            </View>
            {isDownloadButtonVisible == true && <TouchableOpacity
                style={styles.wrhAddBtn}
                activeOpacity={0.8}
                onPress={onPressDownload}
            >
                <MaterialCommunityIcons name={'download'} size={24} color={'#fff'} />
            </TouchableOpacity>}
            {/* Right Side */}
            {isAddButtonVisible == true && <TouchableOpacity
                style={styles.wrhAddBtn}
                activeOpacity={0.8}
                onPress={() => navigation.navigate(addNavigationRouteName)}
            >
                <MaterialCommunityIcons name={'plus'} size={24} color={'#fff'} />
            </TouchableOpacity>}


        </LinearGradient>
    )
}

export default BackArrowAppBar