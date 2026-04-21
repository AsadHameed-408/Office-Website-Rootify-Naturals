import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import BackArrowAppBar from '../../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './ShopifyCardDetailViewStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const ShopifyCardDetailView = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <BackArrowAppBar title={'Shopify Store Order'} />
            <View style={styles.cardContainer}>
                {/* Left Section: Order Details */}
                <View style={styles.detailsSection}>
                    <Text style={styles.orderNumber}>Order #411</Text>
                    <Text style={styles.storeName}>Shopify Store</Text>
                    <Text style={styles.orderDate}>Order Date: 2026-04-06 14:31:02</Text>

                    <View style={styles.badgeContainer}>
                        <View style={[styles.badge, styles.pendingBadge]}>
                            <MaterialCommunityIcons name="clock-outline" size={14} color="#FFF" />
                            <Text style={styles.badgeText}>Status: Pending</Text>
                        </View>

                        <View style={[styles.badge, styles.unfulfilledBadge]}>
                            <MaterialCommunityIcons name="package-variant" size={14} color="#FFF" />
                            <Text style={styles.badgeText}>Fulfillment: Unfulfilled</Text>
                        </View>
                    </View>
                </View>

                {/* Right Section: Action Buttons */}
                <View style={styles.actionSection}>
                    <TouchableOpacity style={[styles.button, styles.confirmBtn]}>
                        <MaterialCommunityIcons name="check" size={18} color="#FFF" />
                        <Text style={styles.buttonText}>Confirm Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.cancelBtn]}>
                        <MaterialCommunityIcons name="close" size={18} color="#FFF" />
                        <Text style={styles.buttonText}>Cancel Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.returnBtn]}>
                        <MaterialCommunityIcons name="undo" size={18} color="#FFF" />
                        <Text style={styles.buttonText}>Order Return</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.sm_card}>
                {/* Header */}
                <View style={styles.sm_row_space}>
                    <Text style={styles.sm_header_txt}>Customer Info</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="pencil-outline" size={18} color="#4A90A4" />
                    </TouchableOpacity>
                </View>

                {/* Name */}
                <View style={styles.sm_section}>
                    <Text style={styles.sm_label}>Name</Text>
                    <Text style={styles.sm_name_txt}>Qadir Gujjar</Text>
                </View>

                {/* Contact */}
                <View style={styles.sm_section}>
                    <Text style={styles.sm_label}>Contact Info</Text>
                    <View style={styles.sm_icon_text_row}>
                        <MaterialCommunityIcons name="phone" size={14} color="#666" />
                        <Text style={styles.sm_val_txt}>+923174003369</Text>
                    </View>
                    <View style={styles.sm_icon_text_row}>
                        <MaterialCommunityIcons name="email-outline" size={14} color="#666" />
                        <Text style={styles.sm_val_txt}>N/A</Text>
                        <TouchableOpacity><Text style={styles.sm_link}>Add Email</Text></TouchableOpacity>
                    </View>
                </View>

                {/* Compact Address Box */}
                <View style={styles.sm_address_container}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.sm_label}>Address</Text>
                        <Text style={styles.sm_address_txt} numberOfLines={2}>
                            Lahore badami bagh, Lahore, Pakistan
                        </Text>
                    </View>
                    <View style={styles.sm_mini_map}>
                        <MaterialCommunityIcons name="map-marker" size={16} color="#FF5252" />
                        <Text style={{ fontSize: 8, fontWeight: 'bold' }}>Lahore</Text>
                    </View>
                </View>
            </View>
            {/* ------ */}
            <TouchableOpacity
                style={styles.sm_btn_container}
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate('EditOrderClicked')
                }}
            >
                <MaterialCommunityIcons name="format-list-bulleted" size={16} color="#FFF" />
                <Text style={styles.sm_btn_text}>Edit Order Items</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ShopifyCardDetailView