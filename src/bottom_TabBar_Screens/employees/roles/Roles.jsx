import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    TextInput,
    SafeAreaView,
    StatusBar,
    Modal,
    KeyboardAvoidingView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar';
import rl_styles from './RolesStyle'

const Roles = () => {
    const [visible, setVisible] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [searchText, setSearchText] = useState('');

    const [roleName, setRoleName] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        if (roleName.trim() === '') {
            alert("Please enter a role name");
            return;
        }
        onSave({ roleName, description });
        setRoleName('');
        setDescription('');
        onClose();
    };

    // Fake Roles Data
    const rolesData = [
        { id: '1', name: 'Manager', status: 'Active' },
        { id: '2', name: 'Sale Men', status: 'Active' },
        { id: '3', name: 'Shipper', status: 'Active' },
        { id: '4', name: 'Admin', status: 'Active' },
    ];

    const renderRoleItem = ({ item, index }) => (
        <View style={rl_styles.rl_card}>
            <View style={rl_styles.rl_cardMain}>
                {/* <View style={rl_styles.rl_indexBadge}>
                    <Text style={rl_styles.rl_indexTxt}>{index + 1}</Text>
                </View> */}

                <View style={rl_styles.rl_infoCol}>
                    <Text style={rl_styles.rl_roleName}>{item.name}</Text>
                    <View style={rl_styles.rl_statusBadge}>
                        <View style={rl_styles.rl_dot} />
                        <Text style={rl_styles.rl_statusTxt}>{item.status}</Text>
                    </View>
                </View>

                <View style={rl_styles.rl_actions}>
                    <TouchableOpacity style={[rl_styles.rl_actionBtn, { backgroundColor: '#1ABC9C' }]}>
                        <MaterialCommunityIcons name="pencil" size={16} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[rl_styles.rl_actionBtn, { backgroundColor: '#E74C3C' }]}>
                        <MaterialCommunityIcons name="delete" size={16} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={rl_styles.rl_container}>
            <BackArrowAppBar title={'Roles'} />

            {/* Header */}
            <View style={rl_styles.rl_header}>
                <View style={rl_styles.rl_headerButtons}>
                    <TouchableOpacity
                        style={[rl_styles.rl_iconBtn, { backgroundColor: '#34495E' }]}
                        onPress={() => setShowFilter(!showFilter)}
                    >
                        <MaterialCommunityIcons name="filter-variant" size={20} color="#FFF" />
                        <Text style={rl_styles.rl_btnTxt}>Filter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setVisible(true) }} style={[rl_styles.rl_iconBtn, { backgroundColor: '#1ABC9C' }]}>
                        <MaterialCommunityIcons name="plus" size={20} color="#FFF" />
                        <Text style={rl_styles.rl_btnTxt}>Add Role</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Conditional Search Field */}
            {showFilter && (
                <View style={rl_styles.rl_searchContainer}>
                    <View style={rl_styles.rl_searchBox}>
                        <MaterialCommunityIcons name="magnify" size={20} color="#999" />
                        <TextInput
                            style={rl_styles.rl_input}
                            placeholder="Search roles..."
                            placeholderTextColor={'#D9D9D9'}
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                        {searchText !== '' && (
                            <TouchableOpacity onPress={() => setSearchText('')}>
                                <MaterialCommunityIcons name="close-circle" size={18} color="#CCC" />
                            </TouchableOpacity>
                        )}
                    </View>
                    <TouchableOpacity
                        style={rl_styles.rl_clearBtn}
                        onPress={() => { setSearchText(''); setShowFilter(false); }}
                    >
                        <Text style={rl_styles.rl_clearTxt}>Clear</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Roles List */}
            <FlatList
                data={rolesData}
                keyExtractor={(item) => item.id}
                renderItem={renderRoleItem}
                contentContainerStyle={rl_styles.rl_listContent}
                showsVerticalScrollIndicator={false}
            />
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
            >
                <View style={rl_styles.rl_overlay}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={rl_styles.rl_modalContainer}
                    >
                        <View style={rl_styles.rl_modalContent}>
                            {/* Header */}
                            <View style={rl_styles.rl_modalHeader}>
                                <Text style={rl_styles.rl_modalTitle}>Add New Role</Text>
                                <TouchableOpacity onPress={() => { setVisible(false) }}>
                                    <MaterialCommunityIcons name="close" size={24} color="#666" />
                                </TouchableOpacity>
                            </View>

                            {/* Form */}
                            <View style={rl_styles.rl_form}>
                                <Text style={rl_styles.rl_inputLabel}>Role Name</Text>
                                <TextInput
                                    style={rl_styles.rl_inputModal}
                                    placeholder="e.g. Sales Manager"
                                    value={roleName}
                                    onChangeText={setRoleName}
                                    placeholderTextColor="#D9D9D9"
                                />

                                <Text style={rl_styles.rl_inputLabel}>Description</Text>
                                <TextInput
                                    style={[rl_styles.rl_inputModal, rl_styles.rl_textArea]}
                                    placeholder="Enter role responsibilities..."
                                    value={description}
                                    onChangeText={setDescription}
                                    multiline={true}
                                    numberOfLines={4}
                                    textAlignVertical="top"
                                    placeholderTextColor="#D9D9D9"
                                />
                            </View>

                            {/* Footer Buttons */}
                            <View style={rl_styles.rl_modalFooter}>
                                <TouchableOpacity
                                    style={[rl_styles.rl_btn, rl_styles.rl_cancelBtn]}
                                    onPress={() => { setVisible(false) }}
                                >
                                    <Text style={rl_styles.rl_cancelTxt}>Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[rl_styles.rl_btn, rl_styles.rl_saveBtn]}
                                // onPress={handleSave}
                                >
                                    <MaterialCommunityIcons name="check" size={18} color="#FFF" />
                                    <Text style={rl_styles.rl_saveTxt}>Save Role</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        </View>
    );
};



export default Roles;