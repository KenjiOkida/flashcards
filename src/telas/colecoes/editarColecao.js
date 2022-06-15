import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { doc, updateDoc } from "firebase/firestore";

import HeaderDrawer from '../../components/headerDrawer';
import Formulario from '../../components/formulario';
import Button from '../../components/button';
import CaixaTexto from '../../components/caixaTexto';
import CaixaTextoDescricao from '../../components/caixaTextoDescricao';
import CaixaAddImg from '../../components/caixaAddImg';
import { database } from '../../firebase/firebaseConfig';

export default function EditarColecao({navigation, route}) {
    const idColecao = route.params.id;
    const [nomeColecao, setNomeColecao] = useState(route.params.colecao);
    const [descColecao, setDescColecao] = useState(route.params.description);

    const changeColecao = (id) => {
        const colecRef = doc(database, "Colecao", id)
        updateDoc(colecRef, {
            nome: nomeColecao,
            descricao: descColecao,
        })
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
                            imagemOn={true}
                        />
                        {nomeColecao === "" || descColecao === ""
                        ?
                            <Button
                                bgColor='#6A61A1'
                                borderColor='#707070'
                                fontColor='#FFF'
                                nome='SALVAR ALTERAÇÕES'
                                disabled='true'
                            />
                        :
                            <Button
                                bgColor='#6A61A1'
                                borderColor='#707070'
                                fontColor='#FFF'
                                nome='SALVAR ALTERAÇÕES'
                                onPress={() => {
                                    changeColecao(idColecao);
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
        flex: 4
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
    viewCancelar: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 10
    }
})