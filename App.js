import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blueSquare}>
        <Text style={styles.text}>Square 1</Text>
      </View>
      <View style={styles.greenSquare}>
        <Text style={styles.text}>Square 2</Text>
      </View>
      <View style={styles.redSquare}>
        <Text style={styles.text}>Square 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
  },
  blueSquare: {
    backgroundColor: '#0D58DA',
    flex: 1,
    aspectRatio: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  greenSquare: {
    backgroundColor: '#398a00',
    flex: 1,
    aspectRatio: 1,
    marginRight: 10,
  },
  redSquare: {
    backgroundColor: '#ED2C24',
    flex: 1,
    aspectRatio: 1,
    marginRight: 10,
  },
});