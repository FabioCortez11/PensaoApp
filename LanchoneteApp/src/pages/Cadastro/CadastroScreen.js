import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { adicionarCadastro } from '../database/BaseDados';


const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Verifique se todos os campos estão preenchidos
    if (!email || !senha) {
      alert('Preencha todos os campos antes de cadastrar.');
      return;
    }
  
    // Chame a função adicionarJogo para inserir o jogo no banco de dados
    adicionarCadastro(email, senha, (id) => {
      if (id) {
        // Redirecione o usuário de volta à tela inicial após o cadastro
        alert('Cadastrado com sucesso.');
        navigation.navigate('Home');
      } else {
        alert('Erro ao cadastrar. Tente novamente.');
      }
    });
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CadastroScreen;