import React, { useState, useContext } from 'react';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from "axios";

import tokenContext from "../contexts/tokenContext";

async function handleSubmit (email, password) {
  return axios.post('http://challenge-react.alkemy.org/', {
    email: email,
    password: password
  })
  .then(() => {
    return true;
  })
  .catch(() => {
    return false;
  });
}

export default function login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [inv, setInv] = useState(false);
  const { setAuth } = useContext(tokenContext);

  return (
    <View style={styles.container}>
    <Text>Bienvenido al restaurante.</Text>
    <Text>Ingrese su email: </Text>
    <TextInput
      onChangeText={setEmail}
    />
    <Text>Ingrese su contraseña: </Text>
    <TextInput
      onChangeText={setPass}
    />
    <StatusBar style="auto" />
    <Button
      title="Ingresar"
      onPress={async () => {
        if(!email || !pass) {
          setInv(true);
        } else {
          const res = await handleSubmit(email, pass);
          setAuth(res);
        }
      }}
    />
    {inv ? <Text>EMAIL O CONTRASEÑA INVALIDOS.</Text> : null}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
