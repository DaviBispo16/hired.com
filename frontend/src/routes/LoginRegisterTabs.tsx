import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from "../screens/ProfileScreen";
import { Feather } from '@expo/vector-icons';
import AddJobsScreen from "../screens/AddJobsScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Tab = createBottomTabNavigator();

export default function LoginRegisterTabs() {
  return (
    <Tab.Navigator>
       <Tab.Screen name="Login" 
      component={LoginScreen} 
      options={{ headerShown: false, tabBarIcon: ({color, size}) => <Feather name='log-in' size={25} color={'black'}/>, 
      tabBarLabel: 'Login',
      tabBarLabelStyle: {color: '#000', fontSize: 12}
      }}/>
    <Tab.Screen name="Register" 
      component={RegisterScreen} 
      options={{ headerShown: false, tabBarIcon: ({color, size}) => <Feather name='user-plus' size={25} color={'black'}/>, 
      tabBarLabel: 'Register',
      tabBarLabelStyle: {color: '#000', fontSize: 12}
    }}/>
    </Tab.Navigator>
  );
}

