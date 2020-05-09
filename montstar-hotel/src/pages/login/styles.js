
import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 5,
      paddingTop: Constants.statusBarHeight+100,
      backgroundColor: '#E02041',
      alignItems:'center'
    },

    header: {      
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column'
    },

    headerText: {
      fontSize: 18,
      color: '#fff'
    },

    viewImputText:{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        marginTop: 48,
    
    },

    textImputValue: {
        marginBottom: 15,
        color: '#e02',
        borderRadius: 8,
        backgroundColor: '#fff',
        width: '90%',
        fontSize: 15,
        padding: 12,
        height: 50
    },

    textProperty: {
      fontSize:14,
      color: '#41414d',
      fontWeight: 'bold'
    },

    buttonEntrar: {
        height: 50,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%'
    },
 
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#999999',
        borderRadius: 8,
        height: 50,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonEntrarText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e02041',
    },

    viewNaoTemCadastro:{
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
      alignItems: 'center',
      marginTop: largura - largura + 200
    },

    textNaoTemCadastro:{
      fontSize: 16,
      color: '#fff'
    }

  });

export default styles;