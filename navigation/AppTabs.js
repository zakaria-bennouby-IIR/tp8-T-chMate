import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import TasksStack from './TasksStack'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

export default function AppTabs({ route }) {
  const userId = route?.params?.userId

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'TasksList') {
            iconName = focused ? 'list' : 'list-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name="TasksList" component={TasksStack} initialParams={{ userId }} />
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ userId }} />
    </Tab.Navigator>
  )
}
