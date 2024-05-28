import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';

// Dados das comidas!! ( Só ligar ao back galera!! )
const categorias = [
  {
    id: 1,
    nome: 'Burguers',
    comidas: [
      {
        id: 1,
        nome: 'Combo X Burguer',
        imagem: require('../../../assets/Lanche1.jpeg'),
      },
      {
        id: 2,
        nome: 'X Burguer',
        imagem: require('../../../assets/Lanche2.jpeg'),
      },
    ],
  },
  {
    id: 2,
    nome: 'Fritas',
    comidas: [
      {
        id: 3,
        nome: 'Fritas com Ketchup',
        imagem: require('../../../assets/Lanche4.jpg'),
      },
      {
        id: 4,
        nome: 'Fritas',
        imagem: require('../../../assets/Fritas.jpg'),
      },
    ],
  },
  {
    id: 3,
    nome: 'Bebidas',
    comidas: [
      {
        id: 5,
        nome: 'Milkshake de Ovomaltine',
        imagem: require('../../../assets/Shake1.jpg'),
      },
      {
        id: 6,
        nome: 'Milkshake de Morango',
        imagem: require('../../../assets/Shake2.jpg'),
      },
    ],
  },
];

const Cardapio = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const toggleModal = (comida) => {
    setSelectedFood(comida);
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
     
        <Image source={require('../../../assets/Burger.jpeg')} style={styles.coverImage} />

      
        <Text style={styles.sectionTitle}>Tempero Carioca</Text>
        <Text style={styles.sectionTitle}>Cardápio</Text>

        
        {categorias.map((categoria) => (
          <View key={categoria.id}>
            <Text style={styles.sectionTitle}>{categoria.nome}</Text>
            <View style={styles.categoryContainer}>
              {/* Mapeando as comidas de cada categoria */}
              {categoria.comidas.map((comida) => (
                <View key={comida.id} style={styles.category}>
                  <Image source={comida.imagem} style={styles.categoryImage} />
                  <Text style={styles.categoryTitle}>{comida.nome}</Text>
                  {/* Adicionando carrinho de compras */}
                  <TouchableOpacity onPress={() => toggleModal(comida)} style={styles.cartButton}>
                    <Image source={require('../../../assets/Carrinho.png')} style={styles.cartIcon} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Adicionado ao carrinho:</Text>
              <Text style={styles.modalText}>{selectedFood?.nome}</Text>
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#006400',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  category: {
    width: '50%',
    marginBottom: 20,
    marginLeft: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#d75413',
    padding: 10,
  },
  categoryImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'absolute',
    top: 200,
    right: 5,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Cardapio;