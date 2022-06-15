import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function CaixaTextoDescricao(props){
    //titulo, senha, onChangeText, value
    return(
        <View style={styles.container}>
            <View style={styles.tituloView}>
                <Text style={styles.tituloStyle}>{props.titulo}</Text>
            </View>
            <View style={styles.textInputView}>
                {props.senha === "true"
                ?
                    <TextInput
                        style={styles.textInput}
                        type="text"
                        onChangeText={props.onChangeText}
                        value={props.value}
                        secureTextEntry
                    />    
                :
                    <TextInput
                        style={styles.textInput}
                        type="text"
                        onChangeText={props.onChangeText}
                        value={props.value}
                    /> 
                }
            </View>
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
        height: 100,
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
    },
    textInput: {
        fontSize: 16,
    }
})