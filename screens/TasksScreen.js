import TaskCard from '../components/TaskCard'
import { ScrollView } from 'react-native'

export default function TasksScreen({ navigation }) {
  const tasks = [
    { id: 1, title: 'Tâche 1', description: 'Desc 1' },
    { id: 2, title: 'Tâche 2', description: 'Desc 2' }
  ]

  return (
    <ScrollView>
      {tasks.map(t => (
        <TaskCard
          key={t.id}
          title={t.title}
          description={t.description}
          onPress={() => navigation.navigate('TaskDetails', { taskId: t.id })}
        />
      ))}
    </ScrollView>
  )
}
