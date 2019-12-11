import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TouchArea from './components/TouchArea';
import ControlArea from './components/ControlArea';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ControlArea></ControlArea>
      <TouchArea></TouchArea>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  control: {
    height: "20%",

  },
  touch: {
    height: "80%"
  },
});