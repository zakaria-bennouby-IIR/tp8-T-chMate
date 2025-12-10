import { View, Text, Switch } from 'react-native'

export default function TaskItem({ title, done, onToggle }) {
  const boolDone = !!done

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <Text>{title}</Text>
      <Switch value={boolDone} onValueChange={value => onToggle && onToggle(!!value)} />
    </View>
  )
}
