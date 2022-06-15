import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RealizaLogin from './realizaLogin.js';
import Cadastrar from './cadastrar.js';

const LoginStack = createNativeStackNavigator();

export default function StackLogin(){
    return(
        <LoginStack.Navigator initialRouteName="RealizaLogin">
            <LoginStack.Screen name="RealizaLogin" component={RealizaLogin} options={{headerShown: false}} />
            <LoginStack.Screen name="Cadastrar" component={Cadastrar} options={{headerShown: false}} />
        </LoginStack.Navigator>
    )
}