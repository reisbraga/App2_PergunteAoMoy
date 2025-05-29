import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [um, setUm] = useState("");
  const [dois, setDois] = useState("");
  const [resultado, setResultado] = useState("");

  const logo = require('./assets/moy.png');

  function escolha() {
    let sorteio = Math.floor(Math.random()* 2 + 1)
    if(sorteio == 1){
      setResultado(um);
    }
    else{
      setResultado(dois);
    }
    console.log(resultado);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pergunte ao Moy</Text>
      <TouchableOpacity onPress={(escolha)}><Image source={logo} style={{width: 200, height: 200}}></Image></TouchableOpacity>
      <Text style={styles.titulo}>(Para ver o resultado, bata no Moy :-P)</Text>

    <View style={styles.containerInput}>
      <TextInput onChangeText={setUm} 
      style={styles.textInput} 
      placeholder='Opção 1: '
      value={um}
      />
       <TextInput onChangeText={setDois} 
      style={styles.textInput} 
      placeholder='Opção 2: '
      value={dois}
      />
    </View>
      
      <Text>Moy escolheu: {resultado}</Text>
    </View>
  );
}


/* css dos componentes do aplicativo */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 20,
  },

  containerInput: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 15,
    width: 180,
  },
  text: {
    fontSize: 20,
    paddingTop: 10, 
  }
});