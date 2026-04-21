import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Dimensions
} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CColors from '../../constants/CColors';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
    const [activeTab, setActiveTab] = useState('Personal');

    // Personal Details States
    const [name, setName] = useState('Muhammad Yaseen');
    const [email, setEmail] = useState('admin@hikmatcenter.com');
    const [username, setUsername] = useState('admin');
    const [phone, setPhone] = useState('+923327095758');
    const [address, setAddress] = useState('Office #10, First Floor, Lahore, Pakistan');

    // Business Information States
    const [busName, setBusName] = useState('Explore Logics IT Solutions');
    const [busPhone, setBusPhone] = useState('+923327095758');
    const [busAddress, setBusAddress] = useState('Office #10 First Floor Shan Arcade, Barket Market, New Garden Town, Lahore, 54000');

    // Password States
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            {/* --- Gradient Header --- */}
            <LinearGradient colors={CColors.gradient} style={styles.header}>
                <Text style={styles.headerTitle}>My Profile</Text>
            </LinearGradient>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>

                {/* --- Three Tab Navigation */}
                <View style={styles.tabContainer}>
                    <TabItem
                        title="Personal"
                        icon="id-card"
                        active={activeTab === 'Personal'}
                        onPress={() => setActiveTab('Personal')}
                    />
                    <TabItem
                        title="Business"
                        icon="briefcase"
                        active={activeTab === 'Business'}
                        onPress={() => setActiveTab('Business')}
                    />
                    <TabItem
                        title="Security"
                        icon="shield-alt"
                        active={activeTab === 'Security'}
                        onPress={() => setActiveTab('Security')}
                    />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                    {/* --- PERSONAL DETAILS  */}
                    {activeTab === 'Personal' && (
                        <View style={styles.card}>
                            <View style={styles.profileHeader}>
                                <LinearGradient colors={['#10b981', '#3b82f6']} style={styles.avatarGradient}>
                                    <View style={styles.avatarInner}>
                                        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.avatar} />
                                    </View>
                                </LinearGradient>
                                <TouchableOpacity style={styles.cameraIcon}>
                                    <MaterialCommunityIcons name="pencil" size={14} color="white" />
                                </TouchableOpacity>
                                <Text style={styles.displayName}>{name}</Text>
                                <Text style={styles.displayRole}>Administrator</Text>
                            </View>

                            <View style={styles.form}>
                                <InputField label="Full Name" value={name} onChangeText={setName} icon="account-outline" />
                                <View >
                                    <InputField label="Email" value={email} containerStyle={{ flex: 1.5, marginRight: 10 }} icon="email-outline" />
                                    <InputField label="User" value={username} containerStyle={{ flex: 1 }} icon="at" />
                                </View>
                                <InputField label="Phone Number" value={phone} keyboardType="phone-pad" icon="phone-outline" />
                                <InputField label="Office Address" value={address} multiline numberOfLines={2} icon="map-marker-outline" />

                                <ActionButtons onSave={() => { }} onDiscard={() => { }} />
                            </View>
                        </View>
                    )}

                    {/* BUSINESS INFORMATION --- */}
                    {activeTab === 'Business' && (
                        <View style={styles.card}>
                            <View style={styles.businessLogoSection}>
                                <View style={styles.logoBox}>
                                    <Image source={{ uri: 'https://via.placeholder.com/100x40' }} style={styles.businessLogo} resizeMode="contain" />
                                </View>
                                <TouchableOpacity style={styles.uploadBtn}>
                                    <MaterialCommunityIcons name="cloud-upload-outline" size={18} color="#10b981" />
                                    <Text style={styles.uploadBtnText}>Choose Logo</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.form}>
                                <InputField label="Business Name*" value={busName} onChangeText={setBusName} icon="office-building" />
                                <InputField label="Business Phone*" value={busPhone} onChangeText={setBusPhone} keyboardType="phone-pad" icon="phone-classic" />
                                <InputField label="Business Address*" value={busAddress} onChangeText={setBusAddress} multiline numberOfLines={3} icon="map-check-outline" />

                                <ActionButtons onSave={() => { }} onDiscard={() => { }} />
                            </View>
                        </View>
                    )}

                    {/* --- SECURITY / PASSWORD --- */}
                    {activeTab === 'Security' && (
                        <View style={styles.card}>
                            <View style={styles.form}>
                                <InputField label="Current Password" value={oldPass} secureTextEntry icon="lock-outline" />
                                <InputField label="New Password" value={newPass} secureTextEntry icon="lock-reset" />
                                <InputField label="Confirm New Password" value={confirmPass} secureTextEntry icon="check-shield-outline" />

                                <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 10 }}>
                                    <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.gradientBtnFull}>
                                        <Text style={styles.btnText}>Update Password</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

// --- Reusable Components ---

const TabItem = ({ title, icon, active, onPress }) => (
    <TouchableOpacity style={[styles.tab, active && styles.activeTab]} onPress={onPress}>
        <FontAwesome5 name={icon} size={14} color={active ? '#10b981' : '#64748b'} />
        <Text style={[styles.tabText, active && styles.activeTabText]}>{title}</Text>
    </TouchableOpacity>
);

const InputField = ({ label, icon, containerStyle, ...props }) => (
    <View style={[styles.inputGroup, containerStyle]}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputWrapper}>
            <MaterialCommunityIcons name={icon} size={20} color="#94a3b8" style={{ marginRight: 10 }} />
            <TextInput style={styles.input} {...props} placeholderTextColor="#cbd5e1" />
        </View>
    </View>
);

const ActionButtons = ({ onSave, onDiscard }) => (
    <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelBtn} onPress={onDiscard}>
            <Text style={styles.cancelText}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={onSave}>
            <LinearGradient colors={['#10b981', '#059669']} style={styles.gradientBtn}>
                <Text style={styles.btnText}>Save Changes</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8fafc' },
    header: {
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 10 : 0,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerTitle: { fontSize: 20, fontWeight: '800', color: 'white', letterSpacing: 0.8 },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginTop: -25,
        borderRadius: 15,
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        paddingHorizontal: 10,
    },
    tab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        borderBottomWidth: 3,
        borderBottomColor: 'transparent'
    },
    activeTab: { borderBottomColor: '#10b981' },
    tabText: { fontSize: 12, color: '#64748b', marginLeft: 6, fontWeight: '700' },
    activeTabText: { color: '#10b981' },
    scrollContent: { padding: 15, paddingTop: 30, paddingBottom: 150 },
    card: { backgroundColor: 'white', borderRadius: 20, padding: 20, elevation: 5, shadowColor: '#000', shadowOpacity: 0.05 },

    // Business Specific Styles
    businessLogoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        backgroundColor: '#f1f5f9',
        padding: 15,
        borderRadius: 15
    },
    logoBox: {
        width: 120,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0'
    },
    businessLogo: { width: '90%', height: '80%' },
    uploadBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#10b981'
    },
    uploadBtnText: { color: '#10b981', fontSize: 12, fontWeight: '700', marginLeft: 5 },

    // Existing Styles
    profileHeader: { alignItems: 'center', marginBottom: 25 },
    avatarGradient: { padding: 4, borderRadius: 60 },
    avatarInner: { backgroundColor: 'white', borderRadius: 56, padding: 2 },
    avatar: { width: 100, height: 100, borderRadius: 50 },
    cameraIcon: {
        position: 'absolute',
        top: 75,
        right: (width / 2) - 65,
        backgroundColor: '#1e293b',
        padding: 8,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'white'
    },
    displayName: { fontSize: 20, fontWeight: '800', color: '#1e293b', marginTop: 15 },
    displayRole: { fontSize: 12, color: '#10b981', fontWeight: '700', textTransform: 'uppercase' },
    inputGroup: { marginBottom: 18 },
    label: { fontSize: 12, fontWeight: '800', color: '#475569', marginBottom: 8, marginLeft: 4 },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#f1f5f9',
        borderRadius: 12,
        paddingHorizontal: 15,
        backgroundColor: '#f8fafc'
    },
    input: { flex: 1, paddingVertical: 10, fontSize: 14, color: '#334155', fontWeight: '500' },
    row: { flexDirection: 'row' },
    buttonRow: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, gap: 15, alignItems: 'center' },
    gradientBtn: { paddingHorizontal: 25, paddingVertical: 14, borderRadius: 12 },
    gradientBtnFull: { paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
    cancelBtn: { paddingHorizontal: 10 },
    cancelText: { color: '#94a3b8', fontWeight: '700', fontSize: 14 },
    btnText: { color: 'white', fontWeight: '800', fontSize: 14 }
});

export default ProfileScreen;