
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        userAuthStateCheck()
    }, [])

    // user Auth State Checking
    userAuthStateCheck = async () => {
        const token = await AsyncStorage.getItem('userToken')
        if (token) {
            setIsLoading(true)
            setTimeout(() => {
                navigation.navigate('drawer')
                setIsLoading(false)
            }, 2500)
        } else {
            setIsLoading(true)
            setTimeout(() => {
                navigation.navigate('Login')
                setIsLoading(false)
            }, 2500)
        }
    }

    return (
        <AuthContext.Provider value={{ isLoading }}>{children}</AuthContext.Provider>
    )
}
