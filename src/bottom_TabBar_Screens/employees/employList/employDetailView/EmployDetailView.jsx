import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,

} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackArrowAppBar from '../../../../widgets/backarrow_appbar/BackArrowAppBar';
import styles from './EmplyDetailViewStyles'

const EmployeeDetailGrid = () => {

    // Helper to render details in a 2-column grid
    const GridItem = ({ label, value, icon, color = "#64748b" }) => (
        <View style={styles.gridItem}>
            <View style={styles.iconCircle}>
                <MCIcon name={icon} size={16} color={color} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value} numberOfLines={1}>{value || '—'}</Text>
            </View>
        </View>
    );

    // Helper for full-width rows (used in Location/Contact)
    const FullRow = ({ label, value, icon, color = "#64748b" }) => (
        <View style={styles.fullRow}>
            <View style={styles.iconCircle}>
                <MCIcon name={icon} size={18} color={color} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value || '—'}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <BackArrowAppBar title={'Employees Details'} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 50 }}>

                {/* Section 1: Personal Profile (Grid) */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Personal Profile</Text>
                    <View style={styles.gridRow}>
                        <GridItem label="Name" value="Shamas" icon="account-outline" color="#3b82f6" />
                        <GridItem label="Role" value="Sale Men" icon="tie" color="#10b981" />
                    </View>
                    <View style={styles.gridRow}>
                        <GridItem label="Username" value="shamas1221" icon="at" />
                        <GridItem label="CNIC" value="31101...121 2" icon="card-account-details-outline" />
                    </View>
                </View>

                <View style={styles.lineDivider} />

                {/* Section 2: Employment & Performance (Grid) */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Employment & Performance</Text>
                    <View style={styles.gridRow}>
                        <GridItem label="Salary" value="$25000.00" icon="cash-multiple" color="#059669" />
                        <GridItem label="Working Days" value="28/7" icon="calendar-clock-outline" color="#f59e0b" />
                    </View>
                    <View style={styles.gridRow}>
                        <GridItem label="Experience" value="5 Years" icon="briefcase-clock-outline" />
                        <GridItem label="Education" value="10" icon="school-outline" />
                    </View>
                    <View style={styles.gridRow}>
                        <GridItem label="Warehouse" value="Explore Traders" icon="warehouse" color="#6366f1" />
                        <GridItem label="Status" value="Active" icon="check-decagram-outline" color="#10b981" />
                    </View>
                </View>

                <View style={styles.lineDivider} />

                {/* Section 3: Location & Contact (Standard Rows) */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Location & Contact</Text>
                    <FullRow label="Country" value="Pakistan" icon="earth" color="#0ea5e9" />
                    <FullRow label="Province / City" value="Punjab, Multan" icon="city-variant-outline" />
                    <FullRow label="Email" value="vekeg89904@dretnar.com" icon="email-outline" />
                    <FullRow label="Phone" value="+92 333 2323 233" icon="phone-outline" />
                    <FullRow label="Address" value="Sofi Road, Nazad HBL, Multan" icon="map-marker-outline" />
                </View>

                <View style={styles.lineDivider} />

                {/* Section 4: Permissions */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>System Permissions</Text>
                    <View style={styles.badgeContainer}>
                        {[
                            'Dashboard Totals Reports', 'View Dashboard', 'View Business',
                            'View Profile', 'Change Password', 'View Purchases'
                        ].map((perm) => (
                            <View key={perm} style={styles.badge}>
                                <Text style={styles.badgeText}>{perm}</Text>
                            </View>
                        ))}
                        <View style={[styles.badge, styles.updateBadge]}>
                            <Text style={styles.updateBadgeText}>Update Profile</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};


export default EmployeeDetailGrid;