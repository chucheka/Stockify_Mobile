import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

import Home from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home title="Hello, Chike" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
