
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../pages/Home';
import AddTaskScreen from '../pages/AddTask';
import ViewTaskScreen from '../pages/ViewTask';
import EditTaskScreen from '../pages/EditTask';


const Stack = createStackNavigator();

function MyNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ViewTask"
        component={ViewTaskScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTaskScreen}
        options={{
          headerShown: false
        }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default MyNavigation;
