import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Platform,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Assuming this is your library
import BackArrowAppBar from '../../../../widgets/backarrow_appbar/BackArrowAppBar';
import { Dropdown } from 'react-native-element-dropdown';
import as_styles from './AddSalaryRecordS'

const AddSalaryRecord = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [employee, setEmployee] = useState('');

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // Fake Data for Employee
    const data = [
        { label: 'Shamas (Admin)', value: '1' },
        { label: 'Qadir Gujjar (Manager)', value: '2' },
        { label: 'Ali Raza (Shipper)', value: '3' },
        { label: 'Zaid Khan (Sales)', value: '4' },
    ];


    return (
        <View style={as_styles.as_container}>
            <BackArrowAppBar title={'Add Salary Record'} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={as_styles.as_scroll}>

                {/* 1. Employee & Date Section */}
                <View style={as_styles.as_card}>
                    <Text style={as_styles.as_sectionTitle}>Basic Information</Text>

                    <Text style={as_styles.as_label}>Employee *</Text>
                    <View style={as_styles.container}>
                        <Dropdown
                            style={[as_styles.dropdown, isFocus && { borderColor: '#1ABC9C' }]}
                            placeholderStyle={as_styles.placeholderStyle}
                            selectedTextStyle={as_styles.selectedTextStyle}
                            iconStyle={as_styles.iconStyle}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select Employee' : '...'}
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <MaterialCommunityIcons
                                    style={as_styles.icon}
                                    color={isFocus ? '#1ABC9C' : '#999'}
                                    name="account-search-outline"
                                    size={20}
                                />
                            )}
                        />
                    </View>

                    <Text style={as_styles.as_label}>Date *</Text>
                    <TouchableOpacity
                        style={as_styles.as_inputRow}
                        onPress={() => {
                            setOpen(true)
                            console.log(open)
                        }}

                    >
                        <Text style={as_styles.as_dropText}>{date.toLocaleDateString()}</Text>
                        <MaterialCommunityIcons name="calendar-month" size={20} color="#1ABC9C" />
                    </TouchableOpacity>
                    {open && (
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                    )}
                </View>

                {/* 2. Work & Salary Details */}
                <View style={as_styles.as_card}>
                    <Text style={as_styles.as_sectionTitle}>Salary & Work</Text>

                    <View style={as_styles.as_flexRow}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <Text style={as_styles.as_label}>Basic Salary *</Text>
                            <TextInput style={as_styles.as_input} placeholder="Enter salary" keyboardType="numeric" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={as_styles.as_label}>Working Days</Text>
                            <TextInput style={as_styles.as_input} placeholder="Enter days" keyboardType="numeric" />
                        </View>
                    </View>

                    <View style={as_styles.as_flexRow}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <Text style={as_styles.as_label}>Advance</Text>
                            <TextInput style={as_styles.as_input} placeholder="Amount" keyboardType="numeric" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={as_styles.as_label}>Bonus</Text>
                            <TextInput style={as_styles.as_input} placeholder="Amount" keyboardType="numeric" />
                        </View>
                    </View>

                    <View style={as_styles.as_flexRow}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <Text style={as_styles.as_label}>Leaves</Text>
                            <TextInput style={as_styles.as_input} placeholder="Enter days" keyboardType="numeric" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={as_styles.as_label}>Deduction</Text>
                            <TextInput style={as_styles.as_input} placeholder="Amount" keyboardType="numeric" />
                        </View>
                    </View>
                </View>

                {/* 3. Totals (Auto-calculated UI) */}
                <View style={[as_styles.as_card, as_styles.as_totalCard]}>
                    <View style={as_styles.as_summaryRow}>
                        <Text style={as_styles.as_sumLabel}>Net Amount:</Text>
                        <Text style={as_styles.as_sumValue}>PKR 0.00</Text>
                    </View>

                    <View style={as_styles.as_summaryRow}>
                        <Text style={as_styles.as_sumLabel}>Paid Amount:</Text>
                        <TextInput
                            style={as_styles.as_paidInput}
                            placeholder="Enter paid"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={[as_styles.as_summaryRow, { borderTopWidth: 1, borderColor: '#EEE', paddingTop: 10 }]}>
                        <Text style={as_styles.as_netLabel}>Remaining:</Text>
                        <Text style={as_styles.as_netValue}>PKR 0.00</Text>
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={as_styles.as_footer}>
                    <TouchableOpacity style={as_styles.as_cancelBtn}>
                        <Text style={as_styles.as_cancelTxt}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={as_styles.as_saveBtn}>
                        <Text style={as_styles.as_saveTxt}>Save Salary Record</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};


export default AddSalaryRecord;