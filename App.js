import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 42,
  },
});
