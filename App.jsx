import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Route from './src/route/Route'
import { AuthProvider } from './src/services/user_Auth_State'

const App = () => {
  return (

    <NavigationContainer>
      <AuthProvider>
        <Route />
      </AuthProvider>
    </NavigationContainer>

  )
}

export default App