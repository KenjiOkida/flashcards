import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ObjetosImg from '../assets/svgs/objetosImg';
import CoresImg from '../assets/svgs/coresImg';
import AnimaisImg from '../assets/svgs/animaisImg';
import MiniAdjetivosImg from '../assets/svgs/miniAdjetivosImg'
import AdjetivosImg from '../assets/svgs/adjetivosImg';
import PronomesImg from '../assets/svgs/pronomesImg';

export default function ItemColecao(props){
    //{onPressEdit, onPressDelete, nome, icon}
    return(
        <View style={styles.mainContainer}>
            <TouchableHighlight
                style={styles.touchStyleMain}
                onPress={props.onPress}
                underlayColor='#D0D0D0'
            >
                <View style={styles.mainButton}>
                    {props.nome === "Objetos"
                    ?
                        <ObjetosImg />
                    :
                        props.nome === "Cores"
                        ?
                            <CoresImg />
                        :
                            props.nome === "Animais"
                            ?
                                <AnimaisImg />
                            :
                                props.nome === "Adjetivos"
                                ?
                                    <View style={{flexDirection: 'row', alignItems: 'flex-end', paddingVertical: 10}}>
                                        <MiniAdjetivosImg />
                                        <AdjetivosImg />
                                    </View>
                                :
                                    <PronomesImg />
                    }
                        
                    <Text style={styles.textStyle}>
                        {props.nome}
                    </Text>
                </View>
            </TouchableHighlight>
            <View style={styles.sideButton}>
                <TouchableHighlight
                    style={styles.touchStyleSide}
                    onPress={props.onPressEdit}
                    underlayColor='#D0D0D0'
                >
                    <Icon name="pencil" size={30} color="#4472C4"/>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.touchStyleSide}
                    onPress={props.onPressDelete}
                    underlayColor='#D0D0D0'
                >
                    <Icon name="trash" size={30} color="#F00"/>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        height: 126,
        justifyContent: 'center',
        elevation: 10,
        borderColor: '#707070',
        marginVertical: 10,
        borderWidth: 1,
        flexDirection: 'row'
    },
    mainButton: {
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'row'
    },
    sideButton: {
        flex: 1,
        flexDirection: 'column'
    },
    touchStyleMain: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    touchStyleSide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 36,
        color: '#27ACA7',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginLeft: 20
    }
})