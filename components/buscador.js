import React, { useState } from 'react';
import { SafeAreaView, FlatList, TextInput, Text } from 'react-native';
import axios from "axios";
import 'dotenv/config'

import Plato from './plato.js';
async function onChangeText(value) {
  console.log(process.env.API)
  if(value.length > 2) {
    return await axios.get('https://api.spoonacular.com/recipes/complexSearch', { 
      params: {
        apiKey: process.env.API,
        query: value
      }
    })  
    .then(function (response) {
      return response.data.results;
    })
    .catch(() => {
      return null;
    });
  }
}

export default function buscador({props}) {
  const [found, setFound] = useState([]);

  const renderItem = ({ item }) => (
    <Plato data={item} isMenu={false} setMenu={props.setMenu} menu={props.menu}/>
  );

  return (
    <SafeAreaView>
      <Text style={{fontSize: 24, color: "#000" }}>Buscador:</Text>
      <TextInput
        onChangeText={async (value) => {
          setFound(await onChangeText(value))
        }}
        placeholder={"Ingrese su plato"}
      />
      <FlatList
        data={found}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
);
}
