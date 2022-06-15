import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import Formulario from '../../components/formulario.js';
import Button from '../../components/button.js';
import CaixaTexto from '../../components/caixaTexto.js';
import MiniLogo from '../../assets/svgs/miniLogo';

import { authentication } from '../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default function Cadastrar(props){
    const navigation = props.navigation;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const registerFirebase = () =>{
        createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            setErrorRegister(false);
            const user = userCredential.user;
            Alert.alert("Cadastrado!", "", [
                {text: "Ok", onPress: ()=> {navigation.goBack()}}
            ]);
        })
        .catch((error) => {
            console.log("Problema no cadastro");
            setErrorRegister(true);
            console.log(error.code);
            console.log(error.message);
        });
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoView}>
                <MiniLogo />
                <View style={styles.logoTextView}>
                    <Text style={styles.logoText}>Mind Booster</Text>
                </View>
            </View>
            
            <View style={styles.formView}>
                <Formulario>
                    <Text style={styles.titleText}>Preencha os dados do seu cadastro</Text>
                    <CaixaTexto 
                        titulo="E-mail"
                        senha={false}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    {errorRegister === true
                    ?
                        <View style={styles.alertView}>
                            <Text style={styles.alertText}>E-mail inválido ou já em uso</Text>
                        </View>
                    :
                        <View />
                    }
                    <CaixaTexto 
                        titulo="Senha"
                        senha={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    {password.length < 6 && password !== ""
                    ?
                        <View style={styles.alertView}>
                            <Text style={styles.alertText}>A senha deve ter pelo menos 6 caracteres</Text>
                        </View>
                    :
                        <View />
                    }
                    <CaixaTexto 
                        titulo="Repetir senha"
                        senha={true}
                        value={confPassword}
                        onChangeText={(text) => setConfPassword(text)}
                    />
                    {password !== confPassword && confPassword !== ""
                    ?
                        <View style={styles.alertView}>
                            <Text style={styles.alertText}>Senha não confere</Text>
                        </View>
                    :
                        <View />
                    }
                    {email === "" || password === "" || password.length < 6 || password !== confPassword
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
                            onPress={registerFirebase}
                            nome='CADASTRAR'
                        />
                    }
                </Formulario>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#423F5D'
    },
    logoView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 0,
        left: 0
    },
    logoTextView: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
    logoText: {
        fontSize: 28,
        color: '#FFFFFF',
        fontFamily: 'Pacifico-Regular'
    },
    titleText: {
        color: '#FFF',
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 60
    },
    formView: {
        flex: 1,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        fontSize: 16
    },
    alertView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    alertText: {
        fontSize: 16,
        color: '#FF5353',
        marginLeft: 5
    }
})