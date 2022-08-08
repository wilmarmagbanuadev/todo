import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from '../screens/LandingScreen/index';
import HomeScreen from '../screens/MainScreen/Home/index';


import TodoScreen from '../screens/MainScreen/Todo/index';
import AddTaskScreen from '../screens/MainScreen/Todo/AddTask/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MainScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Todo" component={TodoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="AddTask" component={AddTaskScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
