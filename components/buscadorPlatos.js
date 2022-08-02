import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
