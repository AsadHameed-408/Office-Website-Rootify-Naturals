import React, { useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, ScrollView,
    TouchableOpacity, SafeAreaView, Modal, FlatList
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackArrowAppBar from '../../../../widgets/backarrow_appbar/BackArrowAppBar';

// --- DROPDOWN DATA ---
const DROPDOWN_DATA = {
    Role: ['Admin', 'Manager', 'Sale Men', 'Accountant', 'Warehouse Keeper'],
    Warehouse: ['Explore Traders', 'Rootify Main', 'City Warehouse'],
    Country: ['Pakistan', 'India', 'UAE', 'USA'],
    State: ['Punjab', 'Sindh', 'KPK', 'Balochistan'],
    City: ['Lahore', 'Multan', 'Karachi', 'Islamabad'],
    Status: ['Active', 'Inactive']
};

// --- MUKAMMAL PERMISSIONS LIST ---
const PERMISSIONS_GROUPS = [
    { title: 'Dashboard', options: ['Dashboard - VIEW', 'Dashboard Totals Reports'] },
    { title: 'Profile', options: ['Business - VIEW', 'Business - UPDATE', 'Profile - VIEW', 'Profile - UPDATE', 'Profile - CHANGE PASSWORD'] },
    { title: 'Warehouse', options: ['Warehouses - VIEW', 'Warehouses - ADD', 'Warehouses - SHOW', 'Warehouses - UPDATE', 'Warehouses - DELETE'] },
    { title: 'Suppliers', options: ['Suppliers - VIEW', 'Suppliers - ADD', 'Suppliers - SHOW', 'Suppliers - UPDATE', 'Suppliers - DELETE'] },
    { title: 'Customers', options: ['Customers - VIEW', 'Customers - ADD', 'Customers - SHOW', 'Customers - UPDATE', 'Customers - DELETE'] },
    { title: 'Stores', options: ['Stores - VIEW', 'Stores - ADD', 'Stores - SHOW', 'Stores - UPDATE', 'Stores - DELETE', 'Stores - STATUS'] },
    { title: 'Courier Companies', options: ['Couriers - VIEW', 'Couriers - ADD', 'Couriers - SHOW', 'Couriers - UPDATE', 'Couriers - DELETE'] },
    { title: 'Units', options: ['Units - VIEW', 'Units - ADD', 'Units - SHOW', 'Units - UPDATE', 'Units - DELETE', 'Units - STATUS'] },
    { title: 'Brands', options: ['Brands - VIEW', 'Brands - ADD', 'Brands - SHOW', 'Brands - UPDATE', 'Brands - DELETE', 'Brands - STATUS'] },
    { title: 'Categories', options: ['Categories - VIEW', 'Categories - ADD', 'Categories - SHOW', 'Categories - UPDATE', 'Categories - DELETE', 'Categories - STATUS'] },
    { title: 'Items', options: ['Items - VIEW', 'Items - ADD', 'Items - SHOW', 'Items - UPDATE', 'Items - DELETE', 'Items - STATUS'] },
    { title: 'Purchases', options: ['Purchases - VIEW', 'Purchases - ADD', 'Purchases - SHOW', 'Purchases - UPDATE', 'Purchases - DELETE'] },
    { title: 'Chart Of Accounts Types', options: ['COA Types - VIEW', 'COA Types - ADD', 'COA Types - SHOW', 'COA Types - UPDATE', 'COA Types - DELETE'] },
    { title: 'Charts Of Accounts', options: ['Chart Of Account - VIEW', 'Chart Of Account - ADD', 'Chart Of Account - SHOW', 'Chart Of Account - UPDATE', 'Chart Of Account - DELETE', 'Chart Of Account - STATUS'] },
    { title: 'Transactions', options: ['Transactions - VIEW', 'Transactions - ADD', 'Transactions - SHOW', 'Transactions - UPDATE', 'Transactions - DELETE'] },
    { title: 'Expense Categories', options: ['Expense Categories - VIEW', 'Expense Categories - ADD', 'Expense Categories - SHOW', 'Expense Categories - UPDATE', 'Expense Categories - DELETE'] },
    { title: 'Expenses', options: ['Expenses - VIEW', 'Expenses - ADD', 'Expenses - SHOW', 'Expenses - UPDATE', 'Expenses - DELETE'] },
    { title: 'Orders', options: ['Orders - VIEW', 'Orders - ADD', 'Orders - SHOW', 'Orders - UPDATE', 'Orders - DELETE', 'Orders - STATUS', 'Orders - Track'] },
    { title: 'Roles', options: ['Roles - VIEW', 'Roles - ADD', 'Roles - SHOW', 'Roles - UPDATE', 'Roles - DELETE'] },
    { title: 'Employees', options: ['Employees - VIEW', 'Employees - ADD', 'Employees - SHOW', 'Employees - UPDATE', 'Employees - DELETE', 'Employees - STATUS'] },
    { title: 'Employees Salaries', options: ['Employee Salaries - VIEW', 'Employee Salaries - ADD', 'Employee Salaries - SHOW', 'Employee Salaries - UPDATE', 'Employee Salaries - DELETE'] },
    { title: 'Reports', options: ['Reports', 'Profit & Loss Report', 'Product Report'] },
    { title: 'Countries', options: ['Countries - VIEW', 'Countries - ADD', 'Countries - SHOW', 'Countries - UPDATE', 'Countries - DELETE'] },
    { title: 'States', options: ['States - VIEW', 'States - ADD', 'States - SHOW', 'States - UPDATE', 'States - DELETE'] },
    { title: 'Cities', options: ['Cities - VIEW', 'Cities - ADD', 'Cities - SHOW', 'Cities - UPDATE', 'Cities - DELETE'] },
];

const FullEmployeeApp = () => {
    const [formData, setFormData] = useState({
        name: '', username: '', email: '', phone: '', cnic: '',
        education: '', salary: '', experience: '', workingDays: '', address: '',
        role: 'Select Role', warehouse: 'Select Warehouse',
        country: 'Select Country', state: 'Select State', city: 'Select City',
        status: 'Active'
    });

    const [selectedPerms, setSelectedPerms] = useState([]);
    const [pickerVisible, setPickerVisible] = useState(false);
    const [pickerType, setPickerType] = useState('');

    // Dropdown select logic
    const openPicker = (type) => { setPickerType(type); setPickerVisible(true); };
    const handleSelect = (val) => {
        const key = pickerType.toLowerCase();
        setFormData({ ...formData, [key]: val });
        setPickerVisible(false);
    };

    // Permission selection logic
    const togglePerm = (p) => setSelectedPerms(prev =>
        prev.includes(p) ? prev.filter(i => i !== p) : [...prev, p]
    );
    const selectAll = () => setSelectedPerms(PERMISSIONS_GROUPS.flatMap(g => g.options));

    // Input Component
    const RenderInput = ({ label, field, placeholder, keyboard = 'default' }) => (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}*</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#cbd5e1"
                value={formData[field]}
                keyboardType={keyboard}
                onChangeText={(v) => setFormData({ ...formData, [field]: v })}
            />
        </View>
    );

    return (
        <View style={styles.safe}>
            <BackArrowAppBar title={'Add Employ'} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>

                {/* WHITE CARD FOR DETAILS */}
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Employee Details</Text>

                    <View style={styles.row}>
                        <RenderInput label="Name" field="name" placeholder="Full Name" />
                        <RenderInput label="Username" field="username" placeholder="Username" />
                    </View>

                    <RenderInput label="Email" field="email" placeholder="Email Address" keyboard="email-address" />

                    <View style={styles.row}>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>Role*</Text>
                            <TouchableOpacity style={styles.dropdown} onPress={() => openPicker('Role')}>
                                <Text style={styles.dropdownText}>{formData.role}</Text>
                                <MCIcon name="chevron-down" size={18} color="#94a3b8" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>Warehouse</Text>
                            <TouchableOpacity style={styles.dropdown} onPress={() => openPicker('Warehouse')}>
                                <Text style={styles.dropdownText}>{formData.warehouse}</Text>
                                <MCIcon name="chevron-down" size={18} color="#94a3b8" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <RenderInput label="Phone" field="phone" placeholder="Phone No" keyboard="phone-pad" />
                        <RenderInput label="CNIC" field="cnic" placeholder="CNIC Number" />
                    </View>

                    <View style={styles.row}>
                        <RenderInput label="Education" field="education" placeholder="Education" />
                        <RenderInput label="Experience" field="experience" placeholder="Years" />
                    </View>

                    <View style={styles.row}>
                        <RenderInput label="Salary" field="salary" placeholder="Salary" keyboard="numeric" />
                        <RenderInput label="Working Days" field="workingDays" placeholder="e.g. 28/7" />
                    </View>

                    <View style={styles.row}>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>Country*</Text>
                            <TouchableOpacity style={styles.dropdown} onPress={() => openPicker('Country')}>
                                <Text style={styles.dropdownText}>{formData.country}</Text>
                                <MCIcon name="chevron-down" size={18} color="#94a3b8" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>State*</Text>
                            <TouchableOpacity style={styles.dropdown} onPress={() => openPicker('State')}>
                                <Text style={styles.dropdownText}>{formData.state}</Text>
                                <MCIcon name="chevron-down" size={18} color="#94a3b8" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>City*</Text>
                            <TouchableOpacity style={styles.dropdown} onPress={() => openPicker('City')}>
                                <Text style={styles.dropdownText}>{formData.city}</Text>
                                <MCIcon name="chevron-down" size={18} color="#94a3b8" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.label}>Active Status</Text>
                            <TouchableOpacity style={styles.dropdown} onPress={() => openPicker('Status')}>
                                <Text style={styles.dropdownText}>{formData.status}</Text>
                                <MCIcon name="chevron-down" size={18} color="#94a3b8" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.label}>Full Address</Text>
                    <TextInput
                        style={[styles.input, styles.addressInput]}
                        multiline placeholder="Enter complete address"
                        value={formData.address}
                        onChangeText={(v) => setFormData({ ...formData, address: v })}
                    />
                </View>

                {/* WHITE CARD FOR PERMISSIONS */}
                <View style={styles.card}>
                    <View style={styles.headerRow}>
                        <Text style={styles.cardHeader}>Permissions ({selectedPerms.length})</Text>
                        <View style={styles.btnRow}>
                            <TouchableOpacity onPress={selectAll}><Text style={styles.linkText}>Select All</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedPerms([])}><Text style={[styles.linkText, { color: '#ef4444' }]}>Clear</Text></TouchableOpacity>
                        </View>
                    </View>

                    {PERMISSIONS_GROUPS.map((group, index) => (
                        <View key={index} style={styles.permissionSection}>
                            <Text style={styles.groupLabel}>{group.title}</Text>
                            <View style={styles.permissionWrapper}>
                                {group.options.map(option => (
                                    <TouchableOpacity
                                        key={option}
                                        style={styles.checkboxItem}
                                        onPress={() => togglePerm(option)}
                                    >
                                        <MCIcon
                                            name={selectedPerms.includes(option) ? "checkbox-marked" : "checkbox-blank-outline"}
                                            size={20}
                                            color={selectedPerms.includes(option) ? "#3b82f6" : "#cbd5e1"}
                                        />
                                        {/* flexShrink used to prevent overlap and push to next line */}
                                        <Text style={[styles.permText, selectedPerms.includes(option) && { color: '#1e293b', fontWeight: 'bold' }]}>
                                            {option}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                {/* FOOTER BUTTONS */}
                <View style={styles.footer}>
                    <TouchableOpacity style={[styles.footerBtn, { backgroundColor: '#3b82f6' }]}>
                        <Text style={styles.btnTxt}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.footerBtn, { backgroundColor: '#334155' }]}
                        onPress={() => console.log("Final State:", { formData, selectedPerms })}
                    >
                        <Text style={styles.btnTxt}>Add Employee</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            {/* DROPDOWN PICKER MODAL */}
            <Modal visible={pickerVisible} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeader}>Select {pickerType}</Text>
                        <FlatList
                            data={DROPDOWN_DATA[pickerType]}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.modalItem} onPress={() => handleSelect(item)}>
                                    <Text style={styles.modalItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity onPress={() => setPickerVisible(false)} style={styles.closeBtn}>
                            <Text style={{ color: '#ef4444', fontWeight: 'bold' }}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#f1f5f9' },
    card: { backgroundColor: '#ffffff', padding: 20, margin: 12, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
    cardHeader: { fontSize: 15, fontWeight: 'bold', color: '#1e293b', marginBottom: 20 },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    fieldContainer: { width: '48%', marginBottom: 15 },
    label: { fontSize: 11, fontWeight: '700', color: '#64748b', marginBottom: 6 },
    input: { borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 8, padding: 12, fontSize: 13, color: '#1e293b', backgroundColor: '#fff' },
    addressInput: { height: 80, textAlignVertical: 'top' },
    dropdown: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 8, padding: 12, height: 48 },
    dropdownText: { fontSize: 13, color: '#475569' },

    // Permissions Logic
    headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    btnRow: { flexDirection: 'row' },
    linkText: { fontSize: 12, color: '#3b82f6', fontWeight: 'bold', marginLeft: 15 },
    permissionSection: { marginBottom: 25 },
    groupLabel: { fontSize: 12, fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', marginBottom: 12, borderBottomWidth: 1, borderBottomColor: '#f1f5f9', paddingBottom: 5 },
    permissionWrapper: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    checkboxItem: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Vertical alignment for long text
        width: '48%', // Ensure 2 columns
        marginBottom: 12,
        paddingRight: 5
    },
    permText: {
        fontSize: 11,
        color: '#94a3b8',
        marginLeft: 8,
        flexShrink: 1, // This prevents overlapping and forces new line
        lineHeight: 16
    },

    footer: { flexDirection: 'row', padding: 12 },
    footerBtn: { flex: 1, padding: 16, borderRadius: 10, alignItems: 'center', marginHorizontal: 5 },
    btnTxt: { color: '#fff', fontWeight: 'bold', letterSpacing: 0.5 },

    // Modal styles
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
    modalContent: { width: '85%', backgroundColor: '#fff', borderRadius: 15, padding: 20, maxHeight: '70%' },
    modalHeader: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
    modalItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },
    modalItemText: { fontSize: 14, color: '#334155', textAlign: 'center' },
    closeBtn: { marginTop: 15, alignSelf: 'center', padding: 10 }
});

export default FullEmployeeApp;