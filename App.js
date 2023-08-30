import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  

  const plus = () => {
     result = parseInt(number1) + parseInt(number2);
     console.log(result);
     return result;
  };

  const minus = () => { 
    result = parseInt(number1) - parseInt(number2);
    console.log(result);
    return result;
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Result: {result}</Text> 
      <TextInput style={styles.input} onChangeText={number1 => setNumber1(number1)} value={number1} keyboardType='number-pad'/>
      <TextInput style={styles.input} onChangeText={number2 => setNumber2(number2)} value={number2} keyboardType='number-pad'/>
      <View style={styles.button}>
        <Button onPress={plus} title="+" />
        <Button onPress={minus} title="-" />
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 250,
    alignItems: 'center'
  },
  input : {
    width:150,
    borderColor: 'gray', 
    borderWidth: 1
  },
  button : {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 150,
    paddingRight: 150,
    justifyContent: 'space-around'
  },
});