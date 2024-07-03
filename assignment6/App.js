import React from 'react'
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';
import Home from './components/home_screen';

export default function App() {
  return (
    <SafeAreaView style  ={styles.container}>
        <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 100,
    backgroundColor: '#fff',
  },
});
