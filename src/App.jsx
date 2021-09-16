import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImgArchive from './assets/img/ImgArchive';
import ImgCall from './assets/img/ImgCall';
import ImgText from './assets/img/ImgText';
import Onboarding from './components/Onboarding';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Onboarding />

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
