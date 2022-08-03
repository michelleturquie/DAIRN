import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function plato({data}) {
  return(
    <Text>{data.name}</Text>
  );
}

const styles = StyleSheet.create({
  item: {
  },
});
