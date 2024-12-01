import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./src/routes/MainTabs";
import LoginRegisterTabs from "./src/routes/LoginRegisterTabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginRegisterTabs" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="LoginRegisterTabs" component={LoginRegisterTabs} />
        <Stack.Screen name="MainTabs" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

