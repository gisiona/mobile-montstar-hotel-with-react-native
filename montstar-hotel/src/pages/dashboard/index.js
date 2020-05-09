import React from 'react';
import { View, Image, Text, TouchableOpacity , FlatList} from 'react-native';
import styles from './styles.js'
import { Feather } from '@expo/vector-icons'
import logoPng from '../../assets/logo.png';

function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoPng} />
                 <Text style={styles.headerText}>
                    Total de quartos alugados [9]
                 </Text>
            </View>  

            <Text style={styles.title}> Olá,Andreia </Text>        

            <FlatList
            style={styles.listaQuartos}
              data={[1,2,3,4,5,6]}
              keyExtractor={ quarto => String(quarto) }
              showsVerticalScrollIndicator={false}
              renderItem={() => (
                <View style={styles.quartos}>
                <Text style={styles.textProperty}>Tipo de Quarto</Text>
                <Text style={styles.textValue}>Master</Text>

                <Text style={styles.textProperty}>Total de horas</Text>
                <Text style={styles.textValue}>2 horas</Text>

                <Text style={styles.textProperty}>Valor Recebido</Text>
                <Text style={styles.textValue}>R$ 25,00</Text>

                <TouchableOpacity style={styles.buttonDetalhe} onPress={() =>{} }>
                    <Text style={styles.buttonDetalheText}>Mais detalhes</Text>
                    <Feather name='arrow-right' size={15} color={'#E02041'} />
                </TouchableOpacity>
            </View>   
              ) }
            />

        </View>
      );
}


export default Dashboard;