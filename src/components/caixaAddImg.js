import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ObjetosImg from '../assets/svgs/objetosImg';

export default function CaixaAddImg(props){
    //titulo, imagemOn
    
    return(
        <View style={styles.container}>
            <View style={styles.tituloView}>
                <Text style={styles.tituloStyle}>{props.titulo}</Text>
            </View>
            <View style={styles.imgView}>
                {props.imagemOn === false
                ?
                    <TouchableHighlight
                        /*onPress={() => setImagemOn("true")}*/
                        underlayColor='#D0D0D0'
                    >
                        <Icon name="plus" size={70} color="#707070"/>
                    </TouchableHighlight>
                :
                    <TouchableHighlight
                        /*onPress={() => setImagemOn("true")}*/
                        underlayColor='#D0D0D0'
                    >
                        <ObjetosImg />
                    </TouchableHighlight>
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
        height: 180,
        marginVertical: 7
    },
    tituloView: {
        marginLeft: 15,
    },
    tituloStyle: {
        fontSize: 14,
        color: '#6200EE',
    },
    imgView:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})