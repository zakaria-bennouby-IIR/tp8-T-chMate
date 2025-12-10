import { useState } from 'react'
import { View, TextInput, Button, Text, Alert } from 'react-native'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    console.log('Login attempt:', { email, password })

    const isProductionValid = email === 'admin@test.com' && password === '1234'
    const isDevBypass = __DEV__ && email.trim() !== '' && password.trim() !== ''

    if (isProductionValid || isDevBypass) {
      console.log('Credentials valid — navigating to MainApp', { isDevBypass })
      if (isDevBypass) {
        Alert.alert('Dev', 'Bypass login enabled (development mode)')
        navigation.replace('MainApp', { userId: 999, role: 'Dev' })
      } else {
        navigation.replace('MainApp', { userId: 101, role: 'Admin' })
      }
    } else {
      console.log('Invalid credentials')
      Alert.alert('Échec', 'Email ou mot de passe incorrect')
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" style={{ marginBottom: 10, borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Mot de passe" value={password} secureTextEntry onChangeText={setPassword} style={{ marginBottom: 10, borderWidth: 1, padding: 8 }} />
      <Button title="Connexion" onPress={login} />
    </View>
  )
}
