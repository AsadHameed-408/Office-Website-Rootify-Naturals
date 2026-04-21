import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, Switch, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBarStyle from '../../../widgets/backarrow_appbar/BackArrowAppBarStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CColors from '../../../constants/CColors';
import styles from './ExpenseCategoryStyle'

const ExpenseCategory = () => {
    const navigation = useNavigation();
    const [addEC, setEC] = useState(false);
    const [categoryName, setCategoryName] = useState('');

    const UnitsList = [
        { id: 1, name: 'Test', amount: 2000 },
        { id: 2, name: 'Insta Courier Service Charges. MENSCURE', amount: 5000 },
        { id: 3, name: 'Lunch & Tea Expenses', amount: 1100 },
    ];

    return (
        <View style={styles.wrhMainContainer}>
            {/* Custom App Bar */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={CColors.gradient || ['#18b5a1', '#0fa391']}
                style={[BackArrowAppBarStyle.HeaderContainer, styles.headerStyle]}
            >
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

                <TouchableOpacity
                    style={BackArrowAppBarStyle.wrhAddBtn}
                    activeOpacity={0.8}
                    onPress={() => setEC(true)}
                >
                    <MaterialCommunityIcons name={'plus'} size={24} color={'#fff'} />
                </TouchableOpacity>
            </LinearGradient>

            {/* Search Section */}
            <View style={styles.wrhBodyWrapper}>
                <View style={styles.wrhSearchRow}>
                    <View style={styles.wrhInputContainer}>
                        <TextInput
                            placeholder="Search category..."
                            placeholderTextColor="#9e9595"
                            style={styles.wrhInputField}
                        />
                        <View style={styles.wrhVerticalDivider} />
                        <TouchableOpacity activeOpacity={0.7}>
                            <MaterialCommunityIcons name={'filter-outline'} size={24} color={'#9e9595'} style={styles.wrhFilterIcon} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.wrhSearchBtn} activeOpacity={0.8}>
                        <Feather name={'search'} size={22} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* List Section */}
            <FlatList
                data={UnitsList}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.wrhCard}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.cardTitle}>{item.name}</Text>

                            <View style={styles.cardDivider} />

                            <View style={styles.cardRow}>
                                <View>
                                    <Text style={styles.gridLabel}>TOTAL AMOUNT</Text>
                                    <Text style={styles.gridValue}>Rs {item.amount}</Text>
                                </View>
                                <View style={styles.actionRow}>
                                    <TouchableOpacity style={styles.editBtn}>
                                        <MaterialCommunityIcons name={'pencil-outline'} size={18} color={'white'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.deleteBtn}>
                                        <MaterialCommunityIcons name={'trash-can-outline'} size={18} color={'#fff'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />

            {/* Add Category Modal */}
            <Modal
                visible={addEC}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setEC(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeading}>Add New Category</Text>

                        <View style={{ width: '100%', marginTop: 10 }}>
                            <Text style={styles.textLabel}>Category Name*</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#D9D9D9'}
                                    placeholder="e.g. Office Supplies"
                                    value={categoryName}
                                    onChangeText={setCategoryName}
                                />
                            </View>
                        </View>

                        <View style={styles.modalActionRow}>
                            <TouchableOpacity
                                style={[styles.modalBtn, { backgroundColor: '#f1f1f1' }]}
                                onPress={() => setEC(false)}
                            >
                                <Text style={[styles.btnText, { color: '#333' }]}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.modalBtn, { backgroundColor: '#18b5a1' }]}
                                onPress={() => setEC(false)}
                            >
                                <Text style={styles.btnText}>Add Category</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


export default ExpenseCategory;