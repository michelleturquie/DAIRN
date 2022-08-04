import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function plato({data}) {
  return(
    <>
    <Text>NOMBRE: {data.title}</Text>
    <Image source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}} /> {/*NOT WORKING*/}
    </>
  );
}

const styles = StyleSheet.create({
  item: {
  },
});
