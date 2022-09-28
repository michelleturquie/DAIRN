import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TextInput, Text } from 'react-native';
import { NativeBaseProvider, Box, VStack } from "native-base";
import axios from "axios";
import Plato from './Plato.js';

const API_KEY = "f3e7445d74fe49f7a2e5e541ad6229d7";


async function onChangeText(value) {
  if (value.length > 2) {
    return await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: API_KEY,
        query: value
      }
    })
      .then(function (response) {
        return response.data.results;
      })
      .catch(() => {
        return null;
      });
  }
}

export default function buscador({ props }) {
  const [found, setFound] = useState([]);

  const renderItem = ({ item }) => (
    <Plato data={item} isMenu={false} setMenu={props.setMenu} menu={props.menu} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, color: "#000" }}>Buscador:</Text>
      <TextInput
        onChangeText={async (value) => {
          setFound(await onChangeText(value))
        }}
        placeholder={"Ingrese su plato"}
      />
      <FlatList
        data={found}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 300,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  }
});

