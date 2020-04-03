import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

const Home = ({ navigation }) => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      
      <Text style={styles.description}>Seja muito bem vindo a este aplicativo caro usuario. 
        Desejamos que possa conceder um pouco de seu tempo para ver os casos, 
        que estão num clicar de um botão, e esperamos que possa ser um verdadeiro heroi 
        e nos ajudar a resolve-los.</Text>

      <Button style={styles.detailsButton}
        title="Quero ser um Herói" 
        onPress={() => navigation.navigate('Incidents')} />
    </View> 
);

Home.navigationOptions = {
    title: 'Home',
}

export default Home;