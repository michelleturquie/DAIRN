import React, {useContext} from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import menuContext from "../contexts/menuContext";
import {addPlato, deletePlato} from "../menuModifiers"

export default function plato({data, isMenu}) {
  const { menu } = useContext(menuContext);
  return(
    <>
      <Text>NOMBRE: {data.title}</Text>
      {
        isMenu ?
        <Pressable style={styles.button} onPress={deletePlato(data.title)}>
          <Text>ELIMINAR</Text>
        </Pressable>
        :
        <Pressable style={styles.button} onPress={addPlato({title: data.title})} disabled={menu.some(plato => plato.title === data.title)}>
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
