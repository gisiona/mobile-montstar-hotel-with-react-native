
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 5,
      paddingTop: Constants.statusBarHeight+100,
      backgroundColor: '#E02041',
      alignItems:'center'
    }
});

export default styles;