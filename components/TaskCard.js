import { View, Text, Button } from 'react-native'

export default function TaskCard({ title, description, onPress }) {
  return (
    <View style={{ padding: 15, margin: 10, borderWidth: 1, borderRadius: 10 }}>
      <Text style={{ fontSize: 18 }}>{title}</Text>
      <Text>{description}</Text>
      <Button title="Voir détails" onPress={onPress} />
    </View>
  )
}
