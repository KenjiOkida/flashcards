import * as React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ColecaoAberta from './colecaoAberta.js';
import MinhasColecoes from './minhasColecoes.js';
import Jogar from './jogar.js';
import NovaColecao from './novaColecao.js';
import EditarColecao from './editarColecao.js';
import NovoCartao from './novoCartao.js';
import EditarCartao from './editarCartao.js';

const ColecStack = createNativeStackNavigator();

export default function StackColec(){
    return(
        <ColecStack.Navigator initialRouteName="MinhasColecoes">
            <ColecStack.Screen name="MinhasColecoes" component={MinhasColecoes} options={{headerShown: false}} />
            <ColecStack.Screen name="ColecaoAberta" component={ColecaoAberta} options={{headerShown: false}} />
            <ColecStack.Screen name="Jogar" component={Jogar} options={{headerShown: false}} />
            <ColecStack.Screen name="NovaColecao" component={NovaColecao} options={{headerShown: false}} />
            <ColecStack.Screen name="EditarColecao" component={EditarColecao} options={{headerShown: false}} />
            <ColecStack.Screen name="NovoCartao" component={NovoCartao} options={{headerShown: false}} />
            <ColecStack.Screen name="EditarCartao" component={EditarCartao} options={{headerShown: false}} />
        </ColecStack.Navigator>
    )
}