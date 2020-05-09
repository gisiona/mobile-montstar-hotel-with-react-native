
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: Constants.statusBarHeight+2,
      backgroundColor: '#E02041'
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

    title: {
      fontSize: 24,
      marginBottom: 8,
      marginTop: 16,
      color: '#13131a',
      fontWeight: 'bold'
    },

    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#737380'
    },

    listaQuartos: {
      marginTop: 8,
    },

    quartos:{
      padding: 14,
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 12
    },

    textProperty: {
      fontSize:14,
      color: '#41414d',
      fontWeight: 'bold'
    },

    textValue:{
      marginTop: 4,
      fontSize: 15,
      marginBottom: 4,
      color: '#737380'
    },

    buttonDetalhe:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    buttonDetalheText: {
      color: '#e02041',
      fontWeight: 'bold',
      fontSize: 15
    }
  });

export default styles;