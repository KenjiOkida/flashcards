import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import HeaderDrawer from '../../components/headerDrawer';
import Formulario from '../../components/formulario';
import Button from '../../components/button';

export default function Jogar({navigation, route}) {
    const listaCards = route.params.cards;
    const qtdCards = Object.keys(listaCards).length;
    
    const [frente, setFrente] = useState("Brinquedos");
    const [verso, setVerso] = useState("Toys");
    const [contador, setContador] = useState(1);
    const [virar, setVirar] = useState("0");

    return (
        <View style={styles.container}>
            <HeaderDrawer titulo={route.params.colecao} navigation={navigation} />
            <View style={styles.content}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Cartão {contador}/{qtdCards}</Text>
                </View>
                <View style={styles.formView}>
                    <Formulario>
                        <View style={styles.cardView}>
                            {virar === "0"
                            ?
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle}>{listaCards[contador-1].frente}</Text>
                                </View>
                            :
                                <View style={styles.centralizador}>    
                                    <View style={styles.frenteView}>
                                        <View style={styles.vfTextView}>
                                            <Text style={styles.vfText}>Frente</Text>
                                        </View>
                                        <View style={styles.textView}>
                                            <Text style={styles.textStyle}>{listaCards[contador-1].frente}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.versoView}>
                                        <View style={styles.vfTextView}>
                                            <Text style={styles.vfText}>Verso</Text>
                                        </View>
                                        <View style={styles.textView}>
                                            <Text style={styles.textStyle}>{listaCards[contador-1].verso}</Text>
                                        </View>
                                    </View>
                                </View>
                            }
                        </View>
                        {virar === "0"
                        ?
                            <Button
                                bgColor='#6A61A1'
                                borderColor='#707070'
                                fontColor='#FFF'
                                nome='VIRAR'
                                onPress={() => setVirar("1")}
                            />
                        :
                            contador === qtdCards
                            ?    
                                <Button
                                    bgColor='#61A170'
                                    borderColor='#707070'
                                    fontColor='#FFF'
                                    nome='FINALIZAR'
                                    onPress={() =>  {navigation.goBack()}}
                                />
                            :
                                <Button
                                    bgColor='#6A61A1'
                                    borderColor='#707070'
                                    fontColor='#FFF'
                                    nome='PRÓXIMO'
                                    onPress={() => {
                                        setVirar("0")
                                        setContador(contador + 1)
                                        setFrente("Janela")
                                        setVerso("Window")
                                    }}
                                />
                        }
                    </Formulario>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#332E56',
        flex: 1,
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        flex: 1
    },
    titleView:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        flex: 1
    },
    titleText: {
        color: '#FFF',
        fontSize: 18
    },
    formView: {
        flex: 5,
        marginBottom: 50
    },
    cardView: {
        backgroundColor: '#FFF',
        flex: 1,
        borderRadius: 15,
        marginBottom: 20,
    },
    centralizador: {
        flex: 1,
        justifyContent: 'center',
    },
    frenteView: {
        borderBottomWidth: 1,
        borderColor: '#707070',
        marginHorizontal: 10,
        flexDirection: 'column',
        flex: 1
    },
    versoView: {
        marginHorizontal: 10,
        flexDirection: 'column',
        flex: 1
    },
    vfTextView:{
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    vfText: {
        fontSize: 18,
        color: '#777777'
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#414141',
    }
})