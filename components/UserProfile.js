import { View, Text, Image } from 'react-native'

export default function UserProfile({ name, avatar }) {
  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <Image source={{ uri: avatar }} style={{ width: 80, height: 80, borderRadius: 40 }} />
      <Text style={{ marginTop: 10, fontSize: 18 }}>{name}</Text>
    </View>
  )
}
