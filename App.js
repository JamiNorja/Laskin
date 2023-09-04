import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(''); 

  const initialFocus = useRef(null);

  const plus = () => {
     setResult(parseInt(number1) + parseInt(number2));
     setNumber1('');
     setNumber2('');
     initialFocus.current.focus();
     return result;
  };

  const minus = () => { 
    setResult(parseInt(number1) - parseInt(number2));
    setNumber1('');
    setNumber2('');
    initialFocus.current.focus();
    return result;
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Result: {result}</Text> 
      <TextInput style={styles.input} ref={initialFocus} onChangeText={number1 => setNumber1(number1)} value={number1} keyboardType='number-pad'/>
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
    flex: 1,
    backgroundColor: 'afff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:'50%',
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  button : {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});