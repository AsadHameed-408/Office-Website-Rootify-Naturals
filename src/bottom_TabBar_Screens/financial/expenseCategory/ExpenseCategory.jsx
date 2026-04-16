
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Switch, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBarStyle from '../../../widgets/backarrow_appbar/BackArrowAppBarStyle'
import styles from './/ExpenseCategoryStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CColors from '../../../constants/CColors';

const ExpenseCategory = () => {
    const navigation = useNavigation();
    const [addEC, setEC] = useState(false)
    const UnitsList = [
        {
            id: 1,
            name: 'Test',
            amount: 2000,
        },
        {
            id: 2,
            name: 'Insta Courier Service Charges. MENSCURE',
            amount: 5000,
        },
        {
            id: 3,
            name: 'Lunch & Tea Expenses',
            amount: 1100,
        },
    ];


    return (
        <View style={{ flex: 1 }}>
            {/* back arrow  */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={CColors.gradient}
                style={[BackArrowAppBarStyle.HeaderContainer, {
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
                        style={BackArrowAppBarStyle.iconButton}
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialIcons name='arrow-back' size={24} color={'#ffffff'} />
                    </TouchableOpacity>
                    <Text style={[BackArrowAppBarStyle.headerTitle, { marginLeft: 10 }]}>Expense Category</Text>
                </View>

                {/* Right Side */}
                <TouchableOpacity
                    style={BackArrowAppBarStyle.wrhAddBtn}
                    activeOpacity={0.8}
                    onPress={() => { setEC(!addEC) }}
                >
                    <MaterialCommunityIcons name={'plus'} size={24} color={'#fff'} />
                </TouchableOpacity>
            </LinearGradient>
            {/* search field */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Type here for search..."
                            placeholderTextColor="#9e9595"
                            style={styles.wrhInputField}
                        />
                        <View style={styles.wrhVerticalDivider} />
                        <TouchableOpacity activeOpacity={0.7} onPress={() => {
                        }}>
                            <MaterialCommunityIcons
                                name={'filter-outline'}
                                size={24}
                                color={'#9e9595'}
                                style={styles.wrhFilterIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.wrhAddBtn} activeOpacity={0.8} onPress={() => {

                    }}>
                        <Feather name={'search'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* store list */}
            <ScrollView>
                <View style={{ marginBottom: 40 }}>
                    <FlatList
                        data={UnitsList}
                        contentContainerStyle={styles.wrhListContent}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={1} style={styles.wrhCard}>
                                <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
                                        {/*  middle */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                            <Text style={[styles.wrhListContentText, { fontWeight: 'bold' }]}>Total:</Text>
                                            <Text style={[styles.wrhListContentText,]}>{item.amount}</Text>

                                        </View>
                                        {/* divider */}
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
                                        {/* button */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            {/* Right */}
                                            <View style={{ flex: 1, backgroundColor: '#18b5a1', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', }}>
                                                <MaterialCommunityIcons name={'pencil-outline'} size={20} color={'white'} />
                                            </View>
                                            <View style={{ flex: 1, backgroundColor: '#ff0000', borderRadius: 8, height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                                <MaterialCommunityIcons name={'trash-can-outline'} size={20} color={'#fff'} />
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
            <View>
                <Modal
                    visible={addEC}
                    transparent={true}
                    animationType="slide">
                    <View
                        style={styles.modalContainer}>
                        <View
                            style={styles.modalBotomContainer}>
                            <View style={[styles.container]}>
                                <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
                                    <Text style={styles.textLabel}>Category Name*</Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input}
                                            placeholderTextColor={'#D9D9D9'}
                                            placeholder="Expense Category Name"
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                                <View style={[styles.modalBotomContainer, { backgroundColor: '#18b5a1' }]}>
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={() => { setEC(false) }}
                                        style={{
                                            width: '95%',
                                            alignItems: 'center',
                                            backgroundColor: '#18b5a1',
                                            justifyContent: 'center',
                                            borderRadius: 5,
                                            marginBottom: 10,
                                            marginTop: 10,
                                        }}>
                                        <Text style={{ margin: 5, fontWeight: 'bold', color: '#fff' }}>Add Expense Category</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.modalBotomContainer}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => { setEC(false) }}
                                style={{
                                    width: '95%',
                                    borderRadius: 0,
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    borderRadius: 5,
                                    bottom: 0,
                                    marginBottom: 10,
                                    marginTop: 10,
                                }}>
                                <Text style={{ margin: 5, fontWeight: 'bold' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View >
        </View >
    )
}

export default ExpenseCategory