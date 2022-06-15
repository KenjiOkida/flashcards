import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { addDoc, collection } from "firebase/firestore";
import { database } from '../../firebase/firebaseConfig';

import HeaderDrawer from '../../components/headerDrawer';
import Formulario from '../../components/formulario';
import Button from '../../components/button';

export default function NovoCartao({navigation, route}) {
    const [frente, setFrente] = useState("");
    const [verso, setVerso] = useState("");

    const cardCollection = collection(database, "Card");

    const CadastrarCard = async () => {
        const dadosCard = {
            colecao: route.params.colecao,
            frente: frente,
            verso: verso,
        }
        
        await addDoc(cardCollection, dadosCard).then((docRef) => {
            console.log("Novo documento inserido: " + docRef.id)
        }).catch((erro) => {
            console.log("Erro: " + erro)
        });
    }

    return (
        <View style={styles.container}>
            <HeaderDrawer titulo={route.params.nomeColecao} navigation={navigation} />
            <View style={styles.content}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Preencha os dados da frente e do verso do flashcard</Text>
                </View>
                <View style={styles.formView}>
                    <Formulario>
                        <View style={styles.cardView}>
                            <View style={styles.frenteView}>
                                <View style={styles.vfTextView}>
                                    <Text style={styles.vfText}>Frente</Text>
                                </View>
                                <View style={styles.textInputView}>
                                    <TextInput
                                        style={styles.textInput}
                                        type="text"
                                        onChangeText={(text) => setFrente(text)}
                                        value={frente}
                                    />
                                </View>
                            </View>
                            <View style={styles.versoView}>
                                <View style={styles.vfTextView}>
                                    <Text style={styles.vfText}>Verso</Text>
                                </View>
                                <View style={styles.textInputView}>
                                    <TextInput
                                        style={styles.textInput}
                                        type="text"
                                        onChangeText={(text) => setVerso(text)}
                                        value={verso}
                                    />
                                </View>
                            </View>
                        </View>
                        {frente === "" || verso === ""
                        ?
                            <Button
                                bgColor='#6A61A1'
                                borderColor='#707070'
                                fontColor='#FFF'
                                nome='CADASTRAR'
                                disabled='true'
                            />
                        :
                            <Button
                                bgColor='#6A61A1'
                                borderColor='#707070'
                                fontColor='#FFF'
                                nome='CADASTRAR'
                                onPress={() => {
                                    CadastrarCard()
                                    navigation.goBack()
                                }}
                            />
                        }
                    </Formulario>
                </View>
                <View style={styles.viewCancelar}>
                    <Button
                        bgColor='#332E56'
                        borderColor='#FFF'
                        fontColor='#FFF'
                        nome='CANCELAR'
                        onPress={()=>{navigation.goBack()}}
                    />
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
        fontSize: 18,
        textAlign: 'center'
    },
    formView: {
        flex: 4
    },
    cardView: {
        backgroundColor: '#FFF',
        flex: 1,
        borderRadius: 15
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
        marginTop: 10
    },
    vfText: {
        fontSize: 18,
        color: '#777777'
    },
    textInputView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textInput: {
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#414141',
        alignItems: 'center',
        flex: 1,
    },
    viewCancelar: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 10
    }
})