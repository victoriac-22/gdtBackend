import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// StatusBar = require('expo-status-bar');
// StyleSheet = require('react-native');
// Text = require('react-native');
// View = require ('react-native');

// const express = require('express');
// const mysql = require('mysql');

// const app = express();
// app.listen('3000',() => {
//   console.log('Server started on port 3000');
// });



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
