import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from "../screens/ProfileScreen";
import { Feather } from '@expo/vector-icons';
import AddJobsScreen from "../screens/AddJobsScreen";

const Tab = createBottomTabNavigator();

export default function MainRoutes() {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' 
          component={HomeScreen} 
          options={{tabBarIcon: ({color, size}) => <Feather name='home' size={25} color={'black'}/>,
          tabBarLabel: 'Início',
          tabBarLabelStyle: {color: '#000', fontSize: 12}
      }}/>

        <Tab.Screen name='AddJobsScreen' 
          component={AddJobsScreen} 
          options={{tabBarIcon: ({color, size}) => <Feather name='plus-circle' size={25} color={'black'}/>,
          tabBarLabel: 'Adicionar',
          tabBarLabelStyle: {color: '#000', fontSize: 12}
      }}/>

        <Tab.Screen name='Profile' 
          component={ProfileScreen} 
          options={{tabBarIcon: ({color, size}) => <Feather name='user' size={25} color={'black'}/>,
          tabBarLabel: 'Perfil',
          tabBarLabelStyle: {color: '#000', fontSize: 12}
      }}/>

      </Tab.Navigator>
  )
}

