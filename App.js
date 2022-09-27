import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';


import Login from './screens/login.js';
import Menu from './screens/menu.js';
import Buscador from './screens/buscador.js';
import tokenContext from "./contexts/tokenContext";
import { Center, NativeBaseProvider } from 'native-base';
import { ImageBackground } from 'react-native-web';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [menu, setMenu] = useState([]);

  return (
    <NativeBaseProvider>
      <ImageBackground  style={{width: '100%', height: '100%'}} source={{uri: "https://img.freepik.com/vector-gratis/fondo-comida-rapida-dibujado-mano_52683-21980.jpg?w=2000"}} resizeMode="cover">
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
