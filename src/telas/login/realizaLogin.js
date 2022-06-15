import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

import { authentication } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import Formulario from '../../components/formulario.js';
import Button from '../../components/button.js';
import CaixaTexto from '../../components/caixaTexto.js';
import Logo from '../../assets/svgs/logo';

export default function RealizaLogin(props){
    const navigation = props.navigation;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);

    const loginFirebase = () =>{
        signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setPassword("");
            setErrorLogin(false);
            navigation.navigate('Menu');
        })
        .catch((error) => {
            console.log("Problema no login");
            setErrorLogin(true);
            console.log(error.code);
            console.log(error.message);
        });
    }

    useEffect(()=>{
        onAuthStateChanged(authentication, (user) => {
            if (user) {
                navigation.navigate('Menu');
            }
        });
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Logo />
                <Text style={styles.titleText}>Mind Booster</Text>
            </View>
            <View style={styles.formView}>
                <Formulario>
                    <CaixaTexto 
                        titulo="E-mail"
                        senha={false}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <CaixaTexto 
                        titulo="Senha"
                        senha={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity /*onPress={()=>{}}*/ style={styles.forgot}>
                        <Text style={styles.forgotText} onClick>Esqueci a senha</Text>
                    </TouchableOpacity>

                    {errorLogin === true
                    ?
                        <View style={styles.alertView}>
                            <Icon name="exclamation-circle" size={30} color="#FF5353" />
                            <Text style={styles.alertText}>E-mail ou senha inválidos</Text>
                        </View>
                    :
                        <View />
                    }

                    {email === "" || password === ""
                    ?
                        <Button
                            bgColor='#6A61A1'
                            borderColor='#707070'
                            fontColor='#FFF'
                            nome='ENTRAR'
                            disabled='true'
                        />
                    :
                        <Button
                            bgColor='#6A61A1'
                            borderColor='#707070'
                            fontColor='#FFF'
                            onPress={loginFirebase}
                            nome='ENTRAR'
                        />
                    }
                </Formulario>
            </View>
            <View style={styles.buttonView}>
                <Button
                    bgColor='#B58D97'
                    borderColor='#707070'
                    fontColor='#FFF'
                    onPress={()=>{navigation.navigate('Cadastrar')}}
                    nome='CADASTRE-SE'
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#423F5D'
    },
    titleView:{
        alignItems: 'center',
        flex: 3,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    titleText: {
        color: '#FFF',
        fontSize: 50,
        fontFamily: 'Pacifico-Regular',
    },
    formView: {
        flex: 3
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
    forgot:{
        flexDirection: 'row-reverse'
    },
    forgotText:{
        fontSize: 14,
        color: '#FFF'
    },
    buttonView: {
        flex: 2,
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    alertView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    alertText: {
        fontSize: 16,
        color: '#FF5353',
        marginLeft: 5
    }
})