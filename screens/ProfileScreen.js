import UserProfile from '../components/UserProfile'
import { View, Text } from 'react-native'

export default function ProfileScreen({ route }) {
  const userId = route?.params?.userId ?? 'inconnu'

  return (
    <View>
      <UserProfile name={'Utilisateur ' + userId} avatar="https://i.pravatar.cc/150?img=3" />
      <Text style={{ textAlign: 'center' }}>ID : {userId}</Text>
    </View>
  )
}
