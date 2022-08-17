import React, {useContext} from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import axios from "axios";

async function onPlatoAdded(id) {
  return await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, { 
    params: {
      apiKey: '043e74bda216441d85308025e83b1262'
    }
  })  
  .then(function (response) {
    return response.data;
  })
  .catch(() => {
    return null;
  });
}

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
        <Pressable style={styles.button} onPress={async () => {
          let aux = menu;
          let newPlato = await onPlatoAdded(data.id);
          aux.push(newPlato);
          setMenu([...aux]);
          }}
          disabled={menu.some(plato => {
            return plato.title === data.title ||
          } )}>
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
