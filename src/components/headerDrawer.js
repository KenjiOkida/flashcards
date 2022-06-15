import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function HeaderDrawer({titulo, navigation}){
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
                <Icon name="bars" size={20} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.text}>{titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4A4568',
        height: 56,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        elevation: 30
    },

    text: {
        fontSize: 20,
        color: '#FFF',
        paddingLeft: 10,
        flex: 6,
        fontWeight: 'bold'
    },

    icon: {
        marginRight: 20,
        color: '#FFF'
    }
})