import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import StackColec from '../telas/colecoes';

import Icon from 'react-native-vector-icons/FontAwesome';
import { authentication } from '../firebase/firebaseConfig';
import { signOut } from "firebase/auth";

const Drawer = createDrawerNavigator();

export default function Menu({navigation, idUser}) {
    return(
        <Drawer.Navigator
            initialRouteName = "StackColec"
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#25213E",
                    width: 250,
                },
                drawerLabelStyle: {
                    color: "#FFF",
                    fontSize: 20
                }
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Minhas coleções"
                component={StackColec}
                options={{
                    headerShown: false,
                    drawerIcon: config => <Icon name="sliders" size={20} color="#FFF" />
                }}
            />
        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props){
    function logout(){
        signOut(authentication).then(() => {
            // Sign-out successful.
            props.navigation.popToTop();
        })
        .catch((error) => {
            // An error happened.
            console.log("Erro no logout");
        });
    }
    
    return(
        <DrawerContentScrollView {...props}>
            <PerfilDrawer />
            <DrawerItemList {...props} />
            <DrawerItem 
                label="Logout" 
                onPress={() => {logout()}}
                labelStyle={{color: '#FFF', fontSize: 20}} 
                icon={() => <Icon name="angle-left" size={30} color="#FFF" />} 
            />
        </DrawerContentScrollView>
    )
}

function PerfilDrawer() {
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Image source={{uri: "https://randomuser.me/api/portraits/women/60.jpg"}} style={styles.avatar} />
                </View>
                <View style={styles.textos}>
                    <Text style={styles.userName}>Nome do Usuário</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EDEDED',
        marginHorizontal: 20
    },
    avatar: {
        borderRadius: 10,
        width: 140,
        height: 140,
        marginTop: 20,
        marginBottom: 10
    },
    textos: {
        alignItems: 'center',
        marginBottom: 25
    },
    userName: {
        fontSize: 16,
        color: '#FFF'
    },
})