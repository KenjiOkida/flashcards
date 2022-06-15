import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Formulario(props){
    const {children} = props;

    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})