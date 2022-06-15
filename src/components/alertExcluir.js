import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default function AlertExcluir(props){
    //excluir, onPressSim, onPressCancelar
    return(
        <View style={styles.container}>
            <View style={styles.alertView}>
                <Text style={styles.textStyle}>Você tem certeza que deseja excluir {props.excluir}?</Text>
                <View style={styles.buttonView}>
                    <TouchableHighlight 
                        style={styles.buttonStyle}
                        onPress={props.onPressSim}
                        underlayColor='#DED5EA'
                    >
                        <Text style={styles.textStyle}>SIM</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={styles.buttonStyle}
                        onPress={props.onPressCancelar}
                        underlayColor='#DED5EA'
                    >
                        <Text style={styles.textStyle}>CANCELAR</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    alertView: {
        backgroundColor: '#332E56',
        borderWidth: 3,
        borderColor: '#DED5EA',
        flexDirection: 'column',
        height: 128,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlignVertical: 'center',
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500'
    }
})