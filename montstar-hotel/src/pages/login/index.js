import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity , TextInput, KeyboardAvoidingView, Dimensions, Alert } from 'react-native';
import styles from './styles.js';
import logoPng from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';


function Login(){

    const navigation = useNavigation();
    const [usuarioLogin, setUsuarioLogin] = useState('');
    const [senhaLogin, setSenhaLogin] = useState('');

    useEffect(() => {
       limparCampos();
    }, []);

    function limparCampos(){
        setUsuarioLogin('');
        setSenhaLogin('');
    }

    function navigationToLoadingDashboard(){
        console.log('Usuário:' + usuarioLogin ); 
        console.log('Senha:' + senhaLogin ); 

        if(usuarioLogin === ''){
            Alert.alert('erro');
        }

        navigation.navigate('Dashboard');
    }

    
    function navigationToLoadingPerfil(){
        navigation.navigate('Perfil');
    }

    function setDadosLogin(){
        
        console.log('Usuário:' + usuarioLogin ); 
        console.log('Senha:' + senhaLogin ); 
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <Image source={logoPng} />
                 <Text style={styles.headerText}>
                    Seja bem vindo!
                 </Text>
            </View>     

            <View style={styles.viewImputText}>
                <TextInput
                    style={styles.textImputValue} 
                    placeholder="E-mail"
                    autoCorrect={false}
                    onChangeText= {text => setUsuarioLogin(text)}
                />

                <TextInput 
                    style={styles.textImputValue} 
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={text => setSenhaLogin(text)}
                />
                   
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() =>{navigationToLoadingDashboard()} }>
                        <Text style={styles.buttonEntrarText}>Entrar</Text>
                    </TouchableOpacity>
                </View>       

                <View style={styles.viewNaoTemCadastro}>
                    <TouchableOpacity onPress={() =>{navigationToLoadingPerfil() } }>
                        <Text style={styles.textNaoTemCadastro}>Cadastre-se.</Text>
                    </TouchableOpacity>
                </View>            
            </View>
        </KeyboardAvoidingView>

       
    );
}

export default Login;