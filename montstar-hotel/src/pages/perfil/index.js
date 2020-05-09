import React, { useState , useEffect, useRef } from 'react';
import { View, Image, Text, TouchableOpacity, Modal , TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';


function Perfil(){

    const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const canRef = useRef(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [openPhoto, setOpenPhoto] = useState(false);

    const navigation = useNavigation();


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted')
        })();

    }, []);

    if(hasPermission === false){
        return <Text style={styles.container}>Acesso Negado.</Text>
    }

    if(hasPermission === null){
        return <Text style={styles.container}>Acesso não permitido.</Text>
    }

    async function takePicture(){
        if(canRef){
            const data = await canRef.current.takePictureAsync();
            setCapturedPhoto(data.uri);
            console.log(data.uri);

            setOpenPhoto(true);
            console.log(data);
        }
    }

    function navigationBackToHome(){
        navigation.navigate('Login');
    }
    
    return (
        <SafeAreaView style={styles.container}>


            <Camera style={styles.cameraSafeArea}
                type={typeCamera}
                ref={canRef}
            >

                <View style={styles.header}>
                    <TouchableOpacity onPress={navigationBackToHome}>
                        <FontAwesome name='arrow-circle-left' size={23} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => {
                        setTypeCamera(typeCamera === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back) }}>
                        <FontAwesome name='camera-retro' size={20} />
                    </TouchableOpacity>                   

                </View>

               
            </Camera>
            
            <TouchableOpacity style={styles.buttonTakeCamera} onPress={ () => {}}>
                <FontAwesome name='camera' size={24} 
                onPress={takePicture}/>
            </TouchableOpacity>
            
        {capturedPhoto &&
            <Modal 
                animationType="slide"
                transparent={false}
                visible={openPhoto} >

                <View style={styles.headerModal}>

                    <TouchableOpacity onPress={ () => setOpenPhoto(false)}>
                        <FontAwesome name='window-close' size={25} />
                    </TouchableOpacity>
                    
                </View>

                <Image style={styles.imageModalPhoto}  source={{ uri: capturedPhoto }} />

            </Modal>

        }
                    

            
        </SafeAreaView>
    );
}


export default Perfil;