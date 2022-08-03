import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from "axios";

async function handleSubmit (email, password) {
  return axios.post('http://challenge-react.alkemy.org/', {
    email: email,
    password: password
  })
  .then(function (response) {
    return response.data.token;
  })
  .catch(() => {
    return null;
  });
}

export default function login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [inv, setInv] = useState(false);

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
        onPress={() => {
          if(!email || !pass) {
            setInv(true);
          } else {
            handleSubmit(email, pass);
          }
        }}
      />
      {inv ? <Text>EMAIL O CONTRASEÑA INVALIDOS.</Text> : null}
      <Text></Text>
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
