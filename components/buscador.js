import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, TextInput } from 'react-native';

import Plato from './plato.js';

const API = [
  'HELADO',
  'PIZZA',
  'CARNE',
  'POLLO',
  'TORTA',
];

let found = [];

function onChangeText(value) {
  if(value.length > 2) {
    API
  }
}

export default function buscador() {
  const renderItem = ({ item }) => (
    <Plato data={item}/>
  );

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={(value) => onChangeText(value)}
      />
      <FlatList
        data={found}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}
