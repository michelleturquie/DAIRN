import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, Button } from 'react-native';

import Plato from './plato.js';
import menuContext from "../contexts/menuContext";

export default function menu() {
  const { menu, setMenu } = useContext(menuContext);

  const renderItem = ({ item }) => (
    <Plato data={item} isMenu={true}/>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}
