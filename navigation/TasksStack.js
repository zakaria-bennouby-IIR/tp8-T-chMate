import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TasksScreen from '../screens/TasksScreen'
import TaskDetailsScreen from '../screens/TaskDetailsScreen'

const Stack = createNativeStackNavigator()

export default function TasksStack({ route }) {
  const userId = route?.params?.userId

  return (
    <Stack.Navigator>
      <Stack.Screen name="TasksScreen" component={TasksScreen} initialParams={{ userId }} />
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
    </Stack.Navigator>
  )
}
