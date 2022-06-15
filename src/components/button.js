import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default function Button(props){
    //{bgColor, borderColor, fontColor, onPress, nome, disabled}
    return(
        <View>
            <TouchableHighlight
                style={{
                    padding: 10,
                    marginVertical: 10,
                    backgroundColor: props.bgColor,
                    borderWidth: 0.5,
                    borderColor: props.borderColor,
                    borderRadius: 5,
                    alignItems: 'center',
                    elevation: 4
                }}
                onPress={props.onPress}
                underlayColor='#D0D0D0'
                disabled={props.disabled}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: props.fontColor,
                        fontWeight: 'bold'
                    }}
                >
                    {props.nome}
                </Text>
            </TouchableHighlight>
        </View>
    )
}