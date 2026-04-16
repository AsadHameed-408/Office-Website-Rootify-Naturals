import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import BackArrowAppBar from '../../widgets/backarrow_appbar/BackArrowAppBar'
import styles from './PurchaseListStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { SafeAreaView } from 'react-native-safe-area-context'

const PurchaseList = () => {
    const invoiceData = [
        {
            id: 1,
            warehouse: "EL",
            invoiceNumber: "2112",
            supplier: "Explore Logics",
            pay: 0.00,
            remaining: 24.00,
            subTotal: 24.00,
            discount: 0.00,
            grandTotal: 24.00,
            purchaseDate: "2026-03-04",
        },
        {
            id: 2,
            warehouse: "EL",
            invoiceNumber: "65656",
            supplier: "Explore Logics",
            pay: 675.00,
            remaining: 0.00,
            subTotal: 675.00,
            discount: 0.00,
            grandTotal: 675.00,
            purchaseDate: "2026-03-04",
        },
        {
            id: 3,
            warehouse: "EL",
            invoiceNumber: "5656",
            supplier: "Explore Logics",
            pay: 462.00,
            remaining: 0.00,
            subTotal: 462.00,
            discount: 0.00,
            grandTotal: 462.00,
            purchaseDate: "2026-03-04",
        },
        {
            id: 4,
            warehouse: "Falak Traders",
            invoiceNumber: "INVOICE-213412",
            supplier: "Tasneem Haidar",
            pay: 250000.00,
            remaining: 0.00,
            subTotal: 250000.00,
            discount: 0.00,
            grandTotal: 250000.00,
            purchaseDate: "2026-01-20",
        },
        {
            id: 5,
            warehouse: "Explore Traders",
            invoiceNumber: "INVOICE-32423432",
            supplier: "Tariq Jameel",
            pay: 25000.00,
            remaining: 0.00,
            subTotal: 25000.00,
            discount: 0.00,
            grandTotal: 25000.00,
            purchaseDate: "2026-01-20",
        },
    ];
    return (

        <View style={{ flex: 1 }} >
            <BackArrowAppBar title={'PurchaseList'} />
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
                                            <Text style={styles.labelText}>{item.invoiceNumber}</Text>
                                            <Text style={styles.valueText}>{item.supplier}</Text>
                                            {/*  */}
                                            <View style={styles.row}>
                                                <View style={{ justifyContent: 'center' }}>
                                                    <View style={styles.textContainer}>
                                                        <Text style={styles.labelText}>Warehouse</Text>
                                                        <Text style={styles.valueText}>{item.warehouse}</Text>
                                                    </View>
                                                    <View style={styles.textContainer}>
                                                        <Text style={styles.labelText}>Date</Text>
                                                        <Text style={styles.valueText}>{item.purchaseDate}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ justifyContent: 'center', }}>
                                                    <View style={styles.textContainer}>
                                                        <Text style={styles.labelText}>Pay</Text>
                                                        <Text style={styles.valueText}>{item.pay}</Text>
                                                    </View>
                                                    <View style={styles.textContainer}>
                                                        <Text style={styles.labelText}>Remaining</Text>
                                                        <Text style={styles.valueText}>{item.remaining}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ justifyContent: 'center', }}>
                                                    <View style={styles.textContainer}>
                                                        <Text style={[styles.labelText, { alignSelf: 'flex-end' }]}>SubTotal</Text>
                                                        <Text style={[styles.valueText, { alignSelf: 'flex-end' }]}>{item.subTotal}</Text>
                                                    </View>
                                                    <View style={styles.textContainer}>
                                                        <Text style={styles.labelText}>Grand Total</Text>
                                                        <Text style={[styles.valueText, { alignSelf: 'flex-end' }]}>{item.grandTotal}</Text>
                                                    </View>
                                                </View>

                                            </View>
                                            <View>
                                                <Text style={styles.labelText}>Discount</Text>
                                                <Text style={styles.valueText}>{item.discount}</Text>
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
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
            <View style={styles.bottomTotalContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.labelText}>Pay</Text>
                        <Text style={styles.valueText}>50000</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.labelText}>Remaining</Text>
                        <Text style={styles.valueText}>0</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.labelText}>Discount</Text>
                        <Text style={[styles.valueText,]}>0</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.labelText,]}>SubTotal</Text>
                        <Text style={[styles.valueText,]}>0</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.labelText, { alignSelf: 'flex-end' }]}>Grand Total</Text>
                        <Text style={[styles.valueText, { alignSelf: 'flex-end' }]}>150000</Text>
                    </View>
                </View>
            </View>
            {/* </SafeAreaView> */}
        </View>

    )
}

export default PurchaseList