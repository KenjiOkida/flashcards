import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import { database } from '../../firebase/firebaseConfig';
import { collection, deleteDoc, doc, onSnapshot, query, where, startAt, orderBy } from 'firebase/firestore';

import HeaderDrawer from '../../components/headerDrawer';
import ItemFlashcard from '../../components/itemFlashcard';
import ButtonAdd from '../../components/buttonAdd';
import CaixaTexto from '../../components/caixaTexto';
import AlertExcluir from '../../components/alertExcluir';

export default function ColecaoAberta({navigation, route}) {
    const idColecao = route.params.id;
    const [listaCards, setListaCards] = useState();
    const [filtro, setFiltro] = useState("");
    const [chamaAlert, setChamaAlert] = useState(false);
    const [idCardAtual, setIdCardAtual] = useState("");
    const [nomeCardAtual, setNomeCardAtual] = useState("");

    const cardCollection = collection(database, "Card");

    const deleteCard = async (idCard) => {
        await deleteDoc(doc(database, "Card", idCard));
    }

    useEffect(() => {
        const q = query(cardCollection, where("colecao", "==", idColecao));
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const cards = []
            snapshot.forEach((doc) => {
                cards.push({
                    id: doc.id,
                    ...doc.data(),
                })
            })

            setListaCards(cards)
        })
    }, []);

    const filtrar = () => {
        const q = query(cardCollection, where("colecao", "==", idColecao), where("frente", "==", filtro));
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const cards = []
            snapshot.forEach((doc) => {
                cards.push({
                    id: doc.id,
                    ...doc.data(),
                })
            })
            
            setListaCards(cards)
        })
    }

    const itemCard = ({ item }) => {
        return(
            <ItemFlashcard 
                frente= { item.frente }
                verso= { item.verso }
                editar = {() => {navigation.navigate('EditarCartao', {
                    colecao: route.params.colecao,
                    id: item.id,
                    frente: item.frente, 
                    verso: item.verso,
                })}}
                deletar={() => {
                    setIdCardAtual( item.id )
                    setNomeCardAtual( item.nome )
                    setChamaAlert( true )
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <HeaderDrawer titulo={route.params.colecao} navigation={navigation} />
            <View style={styles.textInput}>   
                <CaixaTexto
                    titulo="Filtro"
                    senha="false"
                    onChangeText={(text) => {
                        setFiltro(text)
                        filtrar()
                    }}
                    value={filtro}
                />
            </View> 
            <View style={styles.buttonView}>
                <TouchableHighlight
                    style={styles.buttonStyle}
                    underlayColor='#D0D0D0'
                    onPress={() => {navigation.navigate('Jogar', {
                        colecao: route.params.colecao,
                        cards: listaCards
                    })}}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            color: '#FFF',
                            fontWeight: 'bold'
                        }}
                    >
                        Jogar!
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.flashcardView}>
                <FlatList 
                    data={ listaCards } 
                    renderItem={ itemCard }
                    keyExtractor={ card => card.id }
                />
            </View>

            <ButtonAdd 
                onPress={() => {navigation.navigate('NovoCartao', {
                    colecao: idColecao,
                    nomeColecao: route.params.colecao
                })}}
            />

            {chamaAlert === true
            ?
                <AlertExcluir 
                    excluir={ nomeCardAtual }
                    onPressSim={() => {
                        deleteCard( idCardAtual )
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
        flexDirection: 'column',
        flex: 1
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: '#57966A',
        borderWidth: 0.5,
        borderColor: '#707070',
        borderRadius: 5,
        alignItems: 'center',
        elevation: 8,
        height: 52,
        width: 157,
        marginBottom: 20
    },
    textInput: {
        padding: 10,
    },
    flashcardView: {
        flexDirection: 'column',
        flex: 7
    }
})