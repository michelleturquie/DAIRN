import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList } from 'react-native';

import Plato from './plato.js';

const MENUACTUAL = [
  {
    name: 'FIDEOS'
  },
  {
    name: 'CARNE'
  },
  {
    name: 'MILANESA'
  },
];

export default function menu() {
  const renderItem = ({ item }) => (
    <Plato data={item}/>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={MENUACTUAL}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}
