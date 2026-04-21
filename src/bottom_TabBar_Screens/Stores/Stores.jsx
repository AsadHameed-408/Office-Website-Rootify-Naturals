import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    Switch,
    StyleSheet,
    Modal,
    ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './StoresStyle'

// Custom Components
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar';

const Stores = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStore, setSelectedStore] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const [data, setData] = useState([
        {
            id: 1,
            storeName: 'Digital Edge',
            storeUrl: 'digital-edge.com',
            accessToken: 'DS_923847239',
            instaKey: 'INSTA_XYZ_123',
            webhookSecret: 'WH_SEC_9900',
            status: true
        },
        {
            id: 2,
            storeName: 'Cloud Nine',
            storeUrl: 'cloud-nine.io',
            accessToken: 'DS_112233445',
            instaKey: 'INSTA_ABC_888',
            webhookSecret: 'WH_SEC_1212',
            status: false
        },
    ]);

    const toggleSwitch = (id) => {
        setData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, status: !item.status } : item
            )
        );
    };

    const openDetails = (store) => {
        setSelectedStore(store);
        setModalVisible(true);
    };

    const renderStoreItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.wrhCard}
            onPress={() => openDetails(item)}
        >
            <View style={styles.cardInner}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="storefront-outline" size={24} color="#18b5a1" />
                </View>

                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.storeTitle} numberOfLines={1}>{item.storeName}</Text>
                    <Text style={styles.storeUrlText} numberOfLines={1}>{item.storeUrl}</Text>
                </View>

                <View style={styles.statusContainer}>
                    <Switch
                        trackColor={{ false: '#E2E8F0', true: '#a4e4dc' }}
                        thumbColor={item.status ? '#18b5a1' : '#f4f3f4'}
                        value={item.status}
                        onValueChange={() => toggleSwitch(item.id)}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.wrhMainContainer}>
            <BackArrowAppBar title={'Stores'} isAddButtonVisible={true} addNavigationRouteName={'add-stores'} />

            {/* Search Row with Button */}
            <View style={styles.searchRowWrapper}>
                <View style={styles.wrhInputContainer}>
                    <Feather name="search" size={18} color="#94a3b8" style={{ marginLeft: 15 }} />
                    <TextInput
                        placeholder="Search stores..."
                        placeholderTextColor="#94a3b8"
                        style={styles.wrhInputField}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* Search Button Added Back */}
                <TouchableOpacity style={styles.searchBtn} activeOpacity={0.8}>
                    <Feather name="search" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={data.filter(s => s.storeName.toLowerCase().includes(searchQuery.toLowerCase()))}
                renderItem={renderStoreItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

            {/* Detail Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Store Details</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <MaterialCommunityIcons name="close" size={24} color="#64748B" />
                            </TouchableOpacity>
                        </View>

                        {selectedStore && (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <DetailRow label="Store Name" value={selectedStore.storeName} icon="store" />
                                <DetailRow label="Store URL" value={selectedStore.storeUrl} icon="link" />
                                <DetailRow label="Access Token" value={selectedStore.accessToken} icon="key-variant" />
                                <DetailRow label="Insta Key" value={selectedStore.instaKey} icon="instagram" />
                                <DetailRow label="Webhook Secret" value={selectedStore.webhookSecret} icon="shield-check" />
                                <DetailRow
                                    label="Status"
                                    value={selectedStore.status ? 'Active' : 'Inactive'}
                                    icon="circle"
                                    color={selectedStore.status ? '#18b5a1' : '#ef4444'}
                                />

                                <View style={styles.actionRow}>
                                    <TouchableOpacity style={[styles.actionBtn, styles.editBtn]}>
                                        <Feather name="edit-2" size={18} color="#18b5a1" />
                                        <Text style={styles.editBtnText}>Edit Store</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[styles.actionBtn, styles.deleteBtn]}>
                                        <Feather name="trash-2" size={18} color="#fff" />
                                        <Text style={styles.deleteBtnText}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

// Detail Row Helper
const DetailRow = ({ label, value, icon, isSecret, color }) => (
    <View style={styles.detailRow}>
        <View style={styles.detailIconBox}>
            <MaterialCommunityIcons name={icon} size={20} color="#18b5a1" />
        </View>
        <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.detailLabel}>{label}</Text>
            <Text style={[styles.detailValue, color && { color }]}>
                {isSecret ? '••••••••••••' : value}
            </Text>
        </View>
    </View>
);


export default Stores;