import React, { useState, useContext } from 'react';
import 'dotenv/config';
import { SafeAreaView, FlatList, TextInput, Text } from 'react-native';
import axios from "axios";

import Plato from './plato.js';

async function onChangeText(value) {
  if(value.length > 2) {
    return await axios.get('https://api.spoonacular.com/recipes/complexSearch', { 
      params: {
        apiKey: '043e74bda216441d85308025e83b1262',
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
      <Text>Buscador:</Text>
      <TextInput
        onChangeText={async (value) => {
          setFound(await onChangeText(value))
        }}
      />
      <FlatList
        data={found}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
);
}
