import { createNativeStackNavigator } from '@react-navigation/native-stack'
import splashScreen from '../splash/SplashScreen'
import LoginScreen from '../auth/LoginScrn'
import DrawerTabRoutes from './DrawerTabRoutes'
import Warehouse from '../bottom_TabBar_Screens/warehouse/Warehouse'
import AddWareHouse from '../bottom_TabBar_Screens/warehouse/addwarehousse/AddWareHouse'
import Suppliers from '../bottom_TabBar_Screens/suppliers/Suppliers'
import AddSuppliers from '../bottom_TabBar_Screens/suppliers/addSuppliers/AddSuppliers'
import Customers from '../bottom_TabBar_Screens/Customers/Customers'
import AddCustomers from '../bottom_TabBar_Screens/Customers/AddCustomers/AddCustomers'
import Stores from '../bottom_TabBar_Screens/Stores/Stores'
import AddStores from '../bottom_TabBar_Screens/Stores/AddStores/AddStores'
import CouriersCompanies from '../bottom_TabBar_Screens/couriersCompanies/CouriersCompanies'
import AddCouriersCompanies from '../bottom_TabBar_Screens/couriersCompanies/addCouriersCompanies/AddCouriersCompanies'
import UnitsScreen from '../bottom_TabBar_Screens/units/Units'
import AddUnits from '../bottom_TabBar_Screens/units/addUnits/AddUnits'
import Brands from '../bottom_TabBar_Screens/brands/Brands'
import AddBrands from '../bottom_TabBar_Screens/brands/addBrands/AddBrands'
import Categories from '../bottom_TabBar_Screens/Categories/Categories'
import AddCategries from '../bottom_TabBar_Screens/Categories/addCatagories/AddCategories'
import ItemsList from '../bottom_TabBar_Screens/itemsList/ItemsList'
import AddItemsList from '../bottom_TabBar_Screens/itemsList/addItemList/AddItemsList'
import PurchaseList from '../bottom_TabBar_Screens/purchaseList/PurchaseList'
import ChartOfAccount from '../bottom_TabBar_Screens/financial/chartOfAccounts/ChartOfAccount'
import AddChartOfAccounts from '../bottom_TabBar_Screens/financial/chartOfAccounts/addChatOfAccounts/AddChartOfAccounts'
import ExpenseCategory from '../bottom_TabBar_Screens/financial/expenseCategory/ExpenseCategory'
import Cities from '../bottom_TabBar_Screens/locations/city/Cities'
import State from '../bottom_TabBar_Screens/locations/state/State'
import Country from '../bottom_TabBar_Screens/locations/country/countrys'
import CreatePurchase from '../bottom_TabBar_Screens/createPurchase/CreatePurchase'
import Expense from '../bottom_TabBar_Screens/financial/expenses/Expense'
import AddFinancialExpense from '../bottom_TabBar_Screens/financial/addFinancialExpense/AddFinancialExpense'
import AllExpenses from '../bottom_TabBar_Screens/financial/allExpenses/AllExpenses'
import AddMoreExpenseItems from '../bottom_TabBar_Screens/financial/addFinancialExpense/addMoreExpenseItems/AddMoreExpenseItems'
import AllOrders from '../bottom_TabBar_Screens/orders/AllOrders'

const Route = () => {
    const stack = createNativeStackNavigator()
    return (
        <stack.Navigator>
            <stack.Screen name='Splash' component={splashScreen} options={{ headerShown: false }} />
            <stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <stack.Screen name='drawer' component={DrawerTabRoutes} options={{ headerShown: false }} />
            <stack.Screen name='Warehouse' component={Warehouse} options={{ headerShown: false }} />
            <stack.Screen name='add-warehouse' component={AddWareHouse} options={{ headerShown: false }} />
            <stack.Screen name='Suppliers' component={Suppliers} options={{ headerShown: false }} />
            <stack.Screen name='add-suppliers' component={AddSuppliers} options={{ headerShown: false }} />
            <stack.Screen name='Customers' component={Customers} options={{ headerShown: false }} />
            <stack.Screen name='add-customers' component={AddCustomers} options={{ headerShown: false }} />
            <stack.Screen name='Stores' component={Stores} options={{ headerShown: false }} />
            <stack.Screen name='add-stores' component={AddStores} options={{ headerShown: false }} />
            <stack.Screen name='Couriers' component={CouriersCompanies} options={{ headerShown: false }} />
            <stack.Screen name='add-Couriers' component={AddCouriersCompanies} options={{ headerShown: false }} />
            {/* item sublist screens */}
            <stack.Screen name='UnitsScreen' component={UnitsScreen} options={{ headerShown: false }} />
            <stack.Screen name='add-Units' component={AddUnits} options={{ headerShown: false }} />
            <stack.Screen name='BrandsScreen' component={Brands} options={{ headerShown: false }} />
            <stack.Screen name='add-Brands' component={AddBrands} options={{ headerShown: false }} />
            <stack.Screen name='CategoriesScreen' component={Categories} options={{ headerShown: false }} />
            <stack.Screen name='add-Categories' component={AddCategries} options={{ headerShown: false }} />
            <stack.Screen name='ItemsListScreen' component={ItemsList} options={{ headerShown: false }} />
            <stack.Screen name='add-ItemsListScreen' component={AddItemsList} options={{ headerShown: false }} />
            {/* Purchase screens */}
            <stack.Screen name='PurchaseListScreen' component={PurchaseList} options={{ headerShown: false }} />
            <stack.Screen name='CreatePurchaseScreen' component={CreatePurchase} options={{ headerShown: false }} />
            {/* Financials screens */}
            <stack.Screen name='COAScreen' component={ChartOfAccount} options={{ headerShown: false }} />
            <stack.Screen name='add-ChartOfAccounts' component={AddChartOfAccounts} options={{ headerShown: false }} />
            <stack.Screen name='ExpensesScreen' component={Expense} options={{ headerShown: false }} />
            <stack.Screen name='add-FinancialExpense' component={AddFinancialExpense} options={{ headerShown: false }} />
            <stack.Screen name='AllExpensesScreen' component={AllExpenses} options={{ headerShown: false }} />
            {/* Add more expense Items screen */}
            <stack.Screen name='add-MoreExpenseItems' component={AddMoreExpenseItems} options={{ headerShown: false }} />
            {/* Expense Cat screens */}
            <stack.Screen name='ExpenseCatScreen' component={ExpenseCategory} options={{ headerShown: false }} />
            {/* Orders Screens */}
            <stack.Screen name='AllOrdersScreen' component={AllOrders} options={{ headerShown: false }} />
            {/* Locationa screens */}
            <stack.Screen name='CountriesScreen' component={Country} options={{ headerShown: false }} />
            <stack.Screen name='StatesScreen' component={State} options={{ headerShown: false }} />
            <stack.Screen name='CitiesScreen' component={Cities} options={{ headerShown: false }} />


        </stack.Navigator>
    )
}

export default Route