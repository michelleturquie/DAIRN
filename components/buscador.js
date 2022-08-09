import React, { useState } from 'react';
import 'dotenv/config';
import { SafeAreaView, FlatList, TextInput } from 'react-native';
import axios from "axios";

import Plato from './plato.js';

const API = [
  'HELADO',
  'PIZZA',
  'CARNE',
  'POLLO',
  'TORTA',
];

let found = [];

async function onChangeText(value) {
  if(value.length > 3) {
    return await axios.get('https://api.spoonacular.com/recipes/complexSearch', { 
      params: {
        apiKey: 'f257955125f84e949758c448fc42f5aa',
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

export default function buscador() {
  const [found, setFound] = useState([]);
  const renderItem = ({ item }) => (
    <Plato data={item} isMenu={false}/>
  );

  return (
    <SafeAreaView>
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
