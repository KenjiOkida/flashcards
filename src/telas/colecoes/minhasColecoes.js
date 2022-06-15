import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';

import HeaderDrawer from '../../components/headerDrawer';
import ItemColecao from '../../components/itemColecao';
import ButtonAdd from '../../components/buttonAdd';
import AlertExcluir from '../../components/alertExcluir';
import { database } from '../../firebase/firebaseConfig';

export default function MinhasColecoes({navigation}) {
    const [chamaAlert, setChamaAlert] = useState(false);
    const [listaColecoes, setListaColecoes] = useState();
    const [nomeColecaoAtual, setNomeColecaoAtual] = useState("");
    const [idColecaoAtual, setIdColecaoAtual] = useState("");
    
    const colecaoCollection = collection(database, "Colecao");

    const deleteColecao = async (idColecao) => {
        await deleteDoc(doc(database, "Colecao", idColecao));
    }

    useEffect(() => {
        const q = query(colecaoCollection)
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const colecoes = []
            snapshot.forEach((doc) => {
                colecoes.push({
                    id: doc.id,
                    ...doc.data(),
                })
            })

            setListaColecoes(colecoes)
        })
    }, []);

    const itemColecao = ({ item }) => {
        return(
            <ItemColecao 
                onPress={() => {
                    navigation.navigate('ColecaoAberta',{
                        id:  item.id,
                        colecao: item.nome
                })}}
                onPressEdit={() => {navigation.navigate('EditarColecao',{
                    id: item.id,
                    colecao:  item.nome, 
                    description: item.descricao
                })}}
                onPressDelete={() => {
                    setIdColecaoAtual( item.id )
                    setNomeColecaoAtual( item.nome )
                    setChamaAlert( true )
                }}
                nome={ item.nome }
            />
        )
    }

    return (
        <View style={styles.container}>
            <HeaderDrawer titulo='Minhas Coleções' navigation={navigation} />
            <View style={styles.content}>
                <FlatList 
                    data={ listaColecoes } 
                    renderItem={ itemColecao }
                    keyExtractor={ colecao => colecao.id }
                />
            </View>
            <ButtonAdd 
                onPress={() => {navigation.navigate('NovaColecao')}}
            />
            

            {chamaAlert === true
            ?
                <AlertExcluir 
                    excluir= { nomeColecaoAtual }
                    onPressSim={() => {
                        deleteColecao( idColecaoAtual )
                        setChamaAlert(false)
                    }}
                    onPressCancelar={() => {setChamaAlert(false)}}
                />
            :
                <View />
            }
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#332E56',
        flex: 1,
    },
    content: {
        flex: 3,
        padding: 10,
        flexDirection: 'column',
    },
    buttonAddView: {
        position: 'absolute',
        bottom: 30,
        right: 20
    }
})