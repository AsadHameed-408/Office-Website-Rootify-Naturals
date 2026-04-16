
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './ExpenseStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import DatePicker from 'react-native-date-picker'

const Expense = () => {
    const [filterVisible, setFilterVisible] = useState(false)
    // date picker
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const invoiceData = [
        {
            id: 1,
            warehouse: "Falak Traders",
            account: "Other Expenses",
            payeeType: "Supplier",
            total: 1600,
            enteredBy: 'Muhammad Yaseen',
            date: '9/10/2002',
        },
    ];
    return (

        <View style={{ flex: 1 }} >
            <BackArrowAppBar title={'Expenses'} isAddButtonVisible={true} addNavigationRouteName={'add-FinancialExpense'} />
            {/* search  */}
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
                            setFilterVisible(!filterVisible)
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
                {/* Date Piceker */}
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode='date'
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                {filterVisible && <View style={[styles.container, { marginLeft: 5 }]}>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => setOpen(true)}
                        style={[
                            styles.inputContainer,
                            {
                                justifyContent: 'space-between',
                                paddingHorizontal: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }
                        ]}>
                        <Text>{date.toDateString()}</Text>
                        <MaterialCommunityIcons name='calendar-outline' size={24} color={'#D9D9D9'} />
                    </TouchableOpacity>
                </View>}
            </View>
            {/* Item Cart */}
            <ScrollView>
                <View>
                    <FlatList
                        data={invoiceData}
                        scrollEnabled={false}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.7} style={styles.wrhCard}>
                                <View style={{ flex: 1, }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        {/* Details Section */}
                                        <View style={styles.detailsContainer}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                <Text style={styles.labelText}>{item.warehouse}</Text>
                                                <Text style={styles.labelText}>{item.date}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', }}>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ justifyContent: 'center' }}>
                                                        <View style={styles.textContainer}>
                                                            <Text style={styles.labelText}>Account</Text>
                                                            <Text style={styles.valueText}>{item.account}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ justifyContent: 'center' }}>
                                                        <View style={styles.textContainer}>
                                                            <Text style={styles.labelText}>PAYEE TYPE</Text>
                                                            <Text style={styles.valueText}>{item.payeeType}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', }}>
                                                    <Text style={{ fontSize: 16 }}>{item.total}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    {/* horizontal divider */}
                                    <View style={styles.divider} />
                                    {/* bottom */}
                                    <View style={styles.bottomContainer}>
                                        <View style={[styles.bottomBtn, { backgroundColor: '#18b5a1' }]}>
                                            <MaterialCommunityIcons name={'pencil-outline'} size={20} color={'white'} />
                                        </View>
                                        <View style={[styles.bottomBtn, { backgroundColor: '#ff0000', }]}>
                                            <MaterialCommunityIcons name={'trash-can-outline'} size={20} color={'#fff'} />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <MaterialCommunityIcons name={'account-edit-outline'} size={28} style={{ marginHorizontal: 5 }} />
                                            <View>
                                                <Text style={styles.labelText}>Entered By:</Text>
                                                <Text style={styles.valueText}>{item.enteredBy}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>

    )
}

export default Expense