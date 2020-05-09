
import { StyleSheet , Dimensions } from 'react-native';
import Constants from 'expo-constants';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height - 10;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 5,
      paddingTop: Constants.statusBarHeight+100,
      backgroundColor: '#E02041',
      alignItems:'center'
    },

    header:{
      height:60,
      backgroundColor: '#e02041',
      paddingHorizontal: 20,
      paddingTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    cameraSafeArea: {
      width: '100%',
      height: '90%'
    },

    viewVCameraSafeArea:{
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row'
    },

    buttonTakeCamera: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e02041',
      height:72
    },
    
    buttonTrocarCamera: {
      position: 'absolute',
      bottom: 20,
      left: 12,
      color: '#fff'
   },

    textButtonTakeCamera: {
      fontSize: 20,
      marginBottom: 20,
   },

   modalPhoto:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     margin: 20
   },

   headerModal:{
      height:70,
      backgroundColor: '#e02041',
      paddingHorizontal: 20,
      paddingTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   buttonModalPhoto:{
     margin: 10
   },

   imageModalPhoto:{
     width: largura,
     height: altura,
     paddingTop: 2
   },


});

export default styles;