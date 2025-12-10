import { View, Text } from 'react-native'

export default function TaskDetailsScreen({ route }) {
  const taskId = route?.params?.taskId ?? '—'

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Détails de la tâche</Text>
      <Text>ID : {taskId}</Text>
    </View>
  )
}
