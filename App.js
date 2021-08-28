/**
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});

export default App;
