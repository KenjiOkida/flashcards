import 'react-native-gesture-handler';
import React from 'react';

import StackLogin from './src/telas/login/index.js';
import Menu from './src/components/menu.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="StackLogin">
              <Stack.Screen name="StackLogin" component={StackLogin} options={{headerShown: false}} />
              <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
