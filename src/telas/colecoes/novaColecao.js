import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { addDoc, collection } from "firebase/firestore";

import HeaderDrawer from '../../components/headerDrawer';
import Formulario from '../../components/formulario';
import Button from '../../components/button';
import CaixaTexto from '../../components/caixaTexto';
import CaixaTextoDescricao from '../../components/caixaTextoDescricao';
import CaixaAddImg from '../../components/caixaAddImg';
import { database } from '../../firebase/firebaseConfig';

export default function NovaColecao({navigation}) {
    const [nomeColecao, setNomeColecao] = useState("");
    const [descColecao, setDescColecao] = useState("");

    const colecaoCollection = collection(database, "Colecao");

    const CadastrarColecao = async () => {
        const dadosColecao = {
            nome: nomeColecao,
            descricao: descColecao,
        }
        
        await addDoc(colecaoCollection, dadosColecao).then((docRef) => {
            console.log("Novo documento inserido: " + docRef.id)
        }).catch((erro) => {
            console.log("Erro: " + erro)
        });
    }

    return (
        <View style={styles.container}>
            <HeaderDrawer titulo='Minhas coleções' navigation={navigation} />
            <View style={styles.content}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Preencha os dados referentes à coleção a ser criada</Text>
                </View>
                <View style={styles.formView}>
                    <Formulario>
                        <CaixaTexto
                            titulo="Nome da coleção"
                            senha={false}
                            onChangeText={(text) => setNomeColecao(text)}
                            value={nomeColecao}
                        />
                        <CaixaTextoDescricao
                            titulo="Descrição"
                            senha={false}
                            onChangeText={(text) => setDescColecao(text)}
                            value={descColecao}
                        />
                        <CaixaAddImg
                            titulo="Imagem"
                            imagemOn={false}
                        />
                        {nomeColecao === "" || descColecao === ""
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
                                    CadastrarColecao();
                                    navigation.goBack();
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
        flex: 5
    },
    textInput: {
        borderBottomWidth: 2,
        borderColor: '#6200EE',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 16
    },
    descricao: {
        borderBottomWidth: 2,
        borderColor: '#6200EE',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        height: 100,
        flex: 3
    },
    viewCancelar: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 10
    }
})