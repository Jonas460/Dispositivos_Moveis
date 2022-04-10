import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const Separator = () => (
    <View style={styles.separator} />
  );

  const text = (counter === 1) ? `vez` : `vezes`

  return (
    <View style={styles.container}>
      <Text >Você clicou {counter} {text}</Text>

      <Separator />

      <Button
        onPress={() => setCounter(counter + 1)}
        title='Clique' />
      <Separator />
      <Button
        onPress={() => setCounter(0)}
        title='Limpar' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: '10px'
  }
});
