import React from "react";
import {View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function CustomButton(props) {
    const { onPress, text } = props;
    return (
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
  

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FD1906',
        width: '100',
        padding: 15,
        marginVertical: 5,
        borderRadius: 20, 
        alignItems: 'center', //cambiar
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }
})