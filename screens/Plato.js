import React, {useContext} from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import axios from "axios";
import { Badge, Button, Center, HStack } from 'native-base';

const API_KEY = "f3e7445d74fe49f7a2e5e541ad6229d7";

async function onPlatoAdded(id) {
  return await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, { 
    params: {
      apiKey: API_KEY
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
  let platoDes = false;
  let colorScheme = "primary";
  platoDes = menu.some(plato => {
    return plato.title === data.title || menu.length == 4
  })
  if(platoDes) {
    colorScheme = "secondary"
  }
  return(
    <> 
      <Center>
      <HStack space={2}>
        <Text>{data.title}</Text>
        {data.vegan ?
            <Badge colorScheme="success">VEGANO</Badge>
            : null
        }
      </HStack>
      {
        isMenu ?
        <>
        <HStack space={2} justifyContent="center">
          <Button onPress={() => {
            menu = menu.filter(item => item.title != data.title)
            setMenu(menu)
          }}>
            <Text style={{color:'white'}}>ELIMINAR</Text>
          </Button>
          <Button onPress={() => {
            setModal(data);
          }}
          >
          <Text style={{color:'white'}}>DETALLES</Text>
          </Button>
        </HStack>
        </>
        :
        <Button onPress={async () => {
          let aux = menu;
          let newPlato = await onPlatoAdded(data.id);
          let vegan = 0;
          let notVegan = 0;
          aux.forEach(element => {
            element.vegan ? vegan++ : notVegan++;
          });
          if (newPlato.vegan && vegan == 2 || !newPlato.vegan && notVegan == 2) {
            return null;
          }
          aux.push(newPlato);
          setMenu([...aux]);
          }} disabled={platoDes} colorScheme={colorScheme}>AÑADIR</Button>
      }
      </Center>
    </>
  );
}
