

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    TextInput
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';

const EmploySalary = () => {
    // Fake Data matching your table
    const salaryData = [
        {
            id: '1',
            name: 'Shamas',
            basicSalary: '4500',
            workingDays: '0',
            advance: '0',
            bonus: '0',
            leaves: '0',
            deduction: '0',
            netAmount: '4500',
            paidAmount: '0',
            remaining: '4500',
            month: '2026-03-04',
        },
    ];

    const renderSalaryItem = ({ item, index }) => (
        <View style={sl_styles.sl_card}>
            {/* Top Row: Name and Month */}
            <View style={sl_styles.sl_headerRow}>
                <View style={sl_styles.sl_nameContainer}>
                    {/* <View style={sl_styles.sl_indexBadge}>
                        <Text style={sl_styles.sl_indexTxt}>{index + 1}</Text>
                    </View> */}
                    <Text style={sl_styles.sl_employeeName}>{item.name}</Text>
                </View>
                <Text style={sl_styles.sl_dateText}>{item.month}</Text>
            </View>

            {/* Stats Grid */}
            <View style={sl_styles.sl_statsGrid}>
                <View style={sl_styles.sl_statItem}>
                    <Text style={sl_styles.sl_statLabel}>Basic Salary</Text>
                    <Text style={sl_styles.sl_statValue}>PKR {item.basicSalary}</Text>
                </View>
                <View style={sl_styles.sl_statItem}>
                    <Text style={sl_styles.sl_statLabel}>Working Days</Text>
                    <Text style={sl_styles.sl_statValue}>{item.workingDays}</Text>
                </View>
                <View style={sl_styles.sl_statItem}>
                    <Text style={sl_styles.sl_statLabel}>Leaves</Text>
                    <Text style={sl_styles.sl_statValue}>{item.leaves}</Text>
                </View>
            </View>

            <View style={sl_styles.sl_divider} />

            {/* Calculations Section */}
            <View style={sl_styles.sl_calcRow}>
                <View>
                    <Text style={sl_styles.sl_subLabel}>Advance: <Text style={{ color: '#444' }}>PKR {item.advance}</Text></Text>
                    <Text style={sl_styles.sl_subLabel}>Bonus: <Text style={{ color: '#444' }}>PKR {item.bonus}</Text></Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={sl_styles.sl_subLabel}>Deduction: <Text style={{ color: '#E74C3C' }}>PKR {item.deduction}</Text></Text>
                    <Text style={sl_styles.sl_subLabel}>Paid: <Text style={{ color: '#27AE60' }}>PKR {item.paidAmount}</Text></Text>
                </View>
            </View>

            {/* Net & Remaining Amount Highlight */}
            <View style={sl_styles.sl_footerHighlight}>
                <View>
                    <Text style={sl_styles.sl_netLabel}>Net Amount</Text>
                    <Text style={sl_styles.sl_netValue}>PKR {item.netAmount}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={[sl_styles.sl_netLabel, { color: '#E67E22' }]}>Remaining</Text>
                    <Text style={[sl_styles.sl_netValue, { color: '#E67E22' }]}>PKR {item.remaining}</Text>
                </View>
            </View>

            {/* Action Buttons */}
            <View style={sl_styles.sl_actionRow}>
                <TouchableOpacity style={[sl_styles.sl_actionBtn, { backgroundColor: '#34495E' }]}>
                    <MaterialCommunityIcons name="pencil-box-outline" size={18} color="#FFF" />
                    <Text style={sl_styles.sl_actionBtnTxt}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[sl_styles.sl_actionBtn, { backgroundColor: '#E74C3C' }]}>
                    <MaterialCommunityIcons name="trash-can-outline" size={18} color="#FFF" />
                    <Text style={sl_styles.sl_actionBtnTxt}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={sl_styles.sl_container}>
            <BackArrowAppBar title={'Employees Salaries'} isAddButtonVisible={true} addNavigationRouteName={'AddSalaryRecord'} />
            {/* Top Navigation Style Header */}
            <View style={sl_styles.sl_searchContainer}>
                <View style={sl_styles.sl_headerRow}>
                    {/* Search Input Box */}
                    <View style={sl_styles.sl_searchWrapper}>
                        <MaterialCommunityIcons name="magnify" size={20} color="#95A5A6" style={sl_styles.sl_searchIcon} />
                        <TextInput
                            style={sl_styles.sl_searchInput}
                            placeholder="Search Employee..."
                            placeholderTextColor="#95A5A6"
                        />
                    </View>

                    {/* Filter Button */}
                    <TouchableOpacity style={sl_styles.sl_filterIconButton}>
                        <MaterialCommunityIcons name="filter-variant" size={22} color="#34495E" />
                    </TouchableOpacity>

                    {/* Search Action Button */}
                    <TouchableOpacity style={sl_styles.sl_searchActionButton}>
                        <Text style={sl_styles.sl_searchActionText}>Search</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <FlatList
                data={salaryData}
                keyExtractor={(item) => item.id}
                renderItem={renderSalaryItem}
                contentContainerStyle={{ padding: 12, paddingBottom: 30 }}
            />
        </View>
    );
};

const sl_styles = StyleSheet.create({
    sl_container: {
        flex: 1,
        backgroundColor: '#F4F7F9',
    },

    sl_headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#FFF',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
    },
    sl_searchWrapper: {
        flex: 1, // Ye search bar ko baki bachi hui space dilwaye ga
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F4F7',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    sl_searchIcon: {
        marginRight: 5,
    },
    sl_searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333',
        paddingVertical: 0, // Android fix for vertical centering
    },
    sl_filterIconButton: {
        padding: 8,
        marginHorizontal: 5,
        backgroundColor: '#F0F2F5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sl_searchActionButton: {
        backgroundColor: '#1ABC9C', // Teal color matching your "Create" button
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sl_searchActionText: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold',
    },

    sl_searchContainer: {
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    sl_card: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#EEE',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 1 },
    },
    sl_headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sl_nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sl_indexBadge: {
        backgroundColor: '#F0F2F5',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    sl_indexTxt: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#34495E',
    },
    sl_employeeName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2C3E50',
    },
    sl_dateText: {
        fontSize: 12,
        color: '#7F8C8D',
    },
    sl_statsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    sl_statItem: {
        flex: 1,
    },
    sl_statLabel: {
        fontSize: 11,
        color: '#95A5A6',
        marginBottom: 2,
    },
    sl_statValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
    },
    sl_divider: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginVertical: 10,
    },
    sl_calcRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    sl_subLabel: {
        fontSize: 12,
        color: '#7F8C8D',
        marginBottom: 4,
    },
    sl_footerHighlight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F8F9FA',
        padding: 10,
        borderRadius: 8,
        marginBottom: 12,
    },
    sl_netLabel: {
        fontSize: 11,
        color: '#34495E',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    sl_netValue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginTop: 2,
    },
    sl_actionRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    sl_actionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginLeft: 10,
    },
    sl_actionBtnTxt: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 4,
    },
});

export default EmploySalary;