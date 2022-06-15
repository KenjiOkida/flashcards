import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function CaixaTexto(props){
    //titulo, senha, onChangeText, value
    const [isSenha, setIsSenha] = useState(true);

    return(
        <View style={styles.container}>
            <View style={styles.tituloView}>
                <Text style={styles.tituloStyle}>{props.titulo}</Text>
            </View>
            {props.senha === true
            ?
                isSenha === true
                ?    
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.textInput}
                            type="text"
                            onChangeText={props.onChangeText}
                            value={props.value}
                            secureTextEntry
                        />
                        <TouchableHighlight
                            onPress={() => {setIsSenha(false)}}
                            style={styles.touchStyle}
                            underlayColor='#D0D0D0'
                        >
                            <Icon name="eye" size={24} color="#000" />
                        </TouchableHighlight>
                    </View>
                :
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.textInput}
                            type="text"
                            onChangeText={props.onChangeText}
                            value={props.value}
                        />
                        <TouchableHighlight
                            onPress={() => {setIsSenha(true)}}
                            style={styles.touchStyle}
                            underlayColor='#D0D0D0'
                        >
                            <Icon name="eye-slash" size={24} color="#000" />
                        </TouchableHighlight>
                    </View>
            :
                <View style={styles.textInputView}>
                    <TextInput
                        style={styles.textInput}
                        type="text"
                        onChangeText={props.onChangeText}
                        value={props.value}
                    /> 
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 3,
        borderColor: '#6200EE',
        flexDirection: 'column',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 60,
        marginVertical: 7
    },
    tituloView: {
        marginLeft: 15,
        flex: 1,
    },
    tituloStyle: {
        fontSize: 14,
        color: '#6200EE',
    },
    textInputView:{
        marginLeft: 15,
        flex: 2,
        flexDirection: 'row'
    },
    textInput: {
        fontSize: 16,
        flex: 9,
    },
    touchStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    }
})