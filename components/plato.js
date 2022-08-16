import React, {useContext} from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import menuContext from "../contexts/menuContext";

export default function plato({data, isMenu, setMenu, menu, setModal}) {
  return(
    <>
      <Text>NOMBRE: {data.title}</Text>
      {
        isMenu ?
        <>
        <Pressable style={styles.button} onPress={() => {
          menu = menu.filter(item => item.title != data.title)
          setMenu(menu)
        }}>
          <Text>ELIMINAR</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
          setModal(data);
        }}
        >
        <Text>DETALLES</Text>
        </Pressable>
        </>
        :
        <Pressable style={styles.button} onPress={() => {
          let aux = menu;
          aux.push(data);
          setMenu([...aux]);
          }}
          disabled={menu.some(plato => plato.title === data.title)}>
          <Text>AÑADIR</Text>
        </Pressable>
      }

    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100
  },
});
