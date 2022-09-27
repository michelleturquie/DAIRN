import React, { useState } from 'react';
import { SafeAreaView, FlatList, TextInput, Text } from 'react-native';
import { NativeBaseProvider, Box, VStack} from "native-base";
import axios from "axios";

const API_KEY = "f3e7445d74fe49f7a2e5e541ad6229d7";

import Plato from './plato.js';
async function onChangeText(value) {
  if(value.length > 2) {
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

export default function buscador({props}) {
  const [found, setFound] = useState([]);

  const renderItem = ({ item }) => (
    <Plato data={item} isMenu={false} setMenu={props.setMenu} menu={props.menu}/>
  );

  return (
    <SafeAreaView>
      <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
          <Divider />
        </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Buscador</Heading>
        <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
      </VStack>
      </VStack>
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
