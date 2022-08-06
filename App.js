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
      title: 'FIDEOS'
    },
    {
      title: 'CARNE'
    },
    {
      title: 'MILANESA'
    },
  ]);

  return (
    <tokenContext.Provider value={{ auth, setAuth }}>
      {auth ?
        <menuContext.Provider value={{ menu, setMenu }}>
          <Menu/>
        </menuContext.Provider>
      :
        <Login/>
      }
    </tokenContext.Provider>
  );
  //Checkea si está logueado
  
}
