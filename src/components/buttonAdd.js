import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ButtonAdd(props){
    //{onPress}
    return(
        <View>
            <TouchableHighlight
                style={styles.buttonStyle}
                onPress={props.onPress}
                underlayColor='#D0D0D0'
            >
                <Icon name="plus" size={20} color="#FFF"/>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#7A71AF',
        borderRadius: 100,
        alignItems: 'center',
        elevation: 8,
        height: 50,
        width: 50,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20
    }
})