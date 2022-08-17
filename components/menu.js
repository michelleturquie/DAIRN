import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, FlatList, Text, Modal, StyleSheet, View, Pressable, Image } from 'react-native';

import Plato from './plato.js';

export default function menu({props}) {
  const [modalData, setModal] = useState(false);
  
  let acumulativoPrecio = 0;
  let acumulativoSalud = 0;
  props.menu.forEach(element => {
    acumulativoPrecio+=element.pricePerServing;
    acumulativoSalud+=element.healthScore;
  });

  const renderItem = ({ item }) => (
    <Plato data={item} isMenu={true} setMenu={props.setMenu} menu={props.menu} modal={modalData} setModal={setModal}/>
  );

  return (
    <SafeAreaView>
      <Text>Menu:</Text>
      <FlatList
        data={props.menu}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
      <Text>Acumulativo precio: {acumulativoPrecio}</Text>
      <Text>Salud promedio: {acumulativoSalud / props.menu.length}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalData}
        onRequestClose={() => {
          setModal(!modalData);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>DETALLES DEL PLATO: </Text>
            <Text style={styles.modalText}>Nombre: {modalData.title} </Text>
            <Text style={styles.modalText}>Precio: {modalData.pricePerServing} </Text>
            <Image
              style={{width: '100%', height: '50%'}}
              source={{uri:modalData.image}}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModal(!modalData)}
            >
              <Text style={styles.textStyle}>CERRAR</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
