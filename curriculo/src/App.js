import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/perfil.jpg';

const App = () => {

  function handleRedesSociais(rede_social) {
    switch(rede_social) {
      case 'linkedin':
        Alert.alert('Linkedin: ','https://www.linkedin.com/in/vinicius-zamai-877b76174/')
      break
      case 'github':
        Alert.alert('Github:', 'https://github.com/zzamai')
      break
      case 'facebook':
        Alert.alert('Facebook', 'https://www.facebook.com/vini.zammy')
      break
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image style={style.foto} source={foto} />
          <Text style={style.nome}>Vinícius Zamai</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedesSociais('github')}>
              <Icon name="github" size={30} color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedesSociais('facebook')}>
              <Icon name="facebook" size={30} color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedesSociais('linkedin')}>
              <Icon name="linkedin" size={30} color="#fff"/>
            </TouchableOpacity>
          </View>
        </View>
          <View style={style.card}>
            <Text style={style.card_header_text}>Experiência profissional</Text>
            <Text style={style.card_header_text}>Daksa</Text>
            <Text style={style.card_header_text}>Invillia</Text>
          </View>
          <View style={style.card}>
            <Text style={style.card_content_text}>Informação acadêmica</Text>
            <Text style={style.card_content_text}>ETEC</Text>
            <Text style={style.card_content_text}>FATEC</Text>
            <Text style={style.card_content_text}>IFSP</Text>
          </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#222',
    flex: 1,
    alignItems: 'center'
  },
  container_cabecalho: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: '#fff'
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10
  },
  funcao: {
    fontWeight: 'bold',
    color: '#aaa',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 10
  },
  card: {
    marginTop: 10,
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333',
    alignItems: 'center'
  },
  card_header_text: {
    color: '#fff'
  },
  card_content_text: {
    color: '#fff'
  }
});

export default App;
