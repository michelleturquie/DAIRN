import React, { useContext } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import Plato from './plato.js';
import menuContext from "../contexts/menuContext";

export default function menu(menu, setMenu) {

  const renderItem = ({ item }) => (
    <Plato data={item} isMenu={true} setMenu={setMenu}/>
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
