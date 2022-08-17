import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Login from './components/login.js';
import Menu from './components/menu.js';
import Buscador from './components/buscador.js';
import tokenContext from "./contexts/tokenContext";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [menu, setMenu] = useState([]);

  return (
    <tokenContext.Provider value={{ auth, setAuth }}>
      {true ?
        <View style={{flexDirection:"row"}}>
          <Buscador props={{menu, setMenu}}/>
          <Menu props={{menu, setMenu}}/>
        </View>
      :
        <Login/>
      }
    </tokenContext.Provider>
  );
}
