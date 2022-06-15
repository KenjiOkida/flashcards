import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function ItemFlashcard(props){
    //{frente, verso, editar, deletar}
    return(
        <View style={styles.mainContainer}>
            <View style={styles.textAreaStyle}>
                <Text style={styles.secTextStyle}>Frente</Text>
                <Text style={styles.mainTextStyle}>{props.frente}</Text>
            </View>
            <View style={styles.textAreaStyle}>
                <Text style={styles.secTextStyle}>Verso</Text>
                <Text style={styles.mainTextStyle}>{props.verso}</Text>
            </View>
            <View style={styles.sideButton}>
                <TouchableHighlight
                    style={styles.touchStyleSide}
                    onPress={props.editar}
                    underlayColor='#D0D0D0'
                >
                    <Text style={styles.textStyle}>
                        <Icon name="pencil" size={30} color="#4472C4"/>
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.touchStyleSide}
                    onPress={props.deletar}
                    underlayColor='#D0D0D0'
                >
                    <Text style={styles.textStyle}>
                        <Icon name="trash" size={30} color="#F00"/>
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        height: 74,
        justifyContent: 'center',
        elevation: 10,
        borderColor: '#707070',
        marginBottom: 10,
        borderWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textAreaStyle: {
        flex: 3,
        flexDirection: 'column',
        alignContent: 'space-between',
        justifyContent: 'center',
        padding: 15
    },
    sideButton: {
        flex: 3,
        flexDirection: 'row'
    },
    touchStyleSide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTextStyle: {
        fontSize: 24,
        color: '#27ACA7',
        fontWeight: 'bold'
    },
    secTextStyle: {
        fontSize: 12,
        color: '#868686'
    }
})