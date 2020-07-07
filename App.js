import React, { useState, useEffect } from 'react';
import AppContainer from './app/index';
import { firebaseApp } from './app/utils/firebase';

import * as firebase from 'firebase';

console.disableYellowBox = true;
console.ignoredYellowBox = ['Setting a timer'];

import { View, Text, StyleSheet } from 'react-native';
import Login from './app/screens/Account/Login';
import { Header } from 'react-native-elements';

export default function App() {

  return (
      <AppContainer />
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})


