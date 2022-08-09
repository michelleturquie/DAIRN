import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Login from './components/login.js';
import Menu from './components/menu.js';
import Buscador from './components/buscador.js';
import tokenContext from "./contexts/tokenContext";
import menuContext from "./contexts/menuContext";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [menu, setMenu] = useState([
    {
      title: 'Pizza bites with pumpkin'
    }
  ]);

  return (
    <tokenContext.Provider value={{ auth, setAuth }}>
      {true ?
        <menuContext.Provider value={{ menu, setMenu }}>
          <Menu/>
          <Buscador/>
        </menuContext.Provider>
      :
        <Login/>
      }
    </tokenContext.Provider>
  );
  //Checkea si está logueado
  
}
