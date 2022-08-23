import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';


import Login from './components/login.js';
import Menu from './components/menu.js';
import Buscador from './components/buscador.js';
import tokenContext from "./contexts/tokenContext";
import { Center, NativeBaseProvider } from 'native-base';
import { ImageBackground } from 'react-native-web';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [menu, setMenu] = useState([]);

  return (
    <NativeBaseProvider>
      <ImageBackground  style={{width: '100%', height: '100%'}} source={{uri: "https://i.pinimg.com/originals/ca/84/0b/ca840b57a9463fce791ff5cc0b4a125d.jpg"}} resizeMode="cover">
        <Center>
          <tokenContext.Provider value={{ auth, setAuth }}>
          {auth ?
            <View style={{flexDirection:"row"}}>
              <Buscador props={{menu, setMenu}}/>
              <Menu props={{menu, setMenu}}/>
            </View>
          :
            <Login/>
          }
          </tokenContext.Provider>
        </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
