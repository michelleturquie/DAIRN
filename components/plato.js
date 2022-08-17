import React, {useContext} from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import axios from "axios";

async function onPlatoAdded(id) {
  return await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, { 
    params: {
      apiKey: 'f6f6f4ca17c74fdb8051f432f9e7cc00'
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
          let vegan = 0;
          let notVegan = 0;
          aux.forEach(element => {
            element.vegan ? vegan++ : notVegan++;
            console.log(element.vegan)
          });


          /*if (newPlato.vegan && vegan == 2) {
            console.log('Alcanzaste el limite de 2 platos veganos')
          } else if (!newPlato.vegan && notVegan == 2) {
            console.log('Alcanzaste el limite de 2 platos NO veganos')
          } else {
            aux.push(newPlato);
            setMenu([...aux]);
          }
          console.log('veganos: ' + vegan)
          console.log('no veganos: ' + notVegan)
          }*/
        }}
          disabled={menu.some(plato => {
            return plato.title === data.title || menu.length == 4
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
