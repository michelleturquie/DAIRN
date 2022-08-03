import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Login from './components/login.js';
import Menu from './components/menu.js';
import Buscador from './components/buscador.js';

export default function App() {
  //Checkea si está logueado
  if (true) {
    return (
      <Buscador/>
    );
  } else {
    return (
      <Login/>
    );
  }
}
