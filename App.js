/**
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// import HomeScreen from './src/screens/HomeScreen';
// import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      {/* <HomeScreen /> */}
      {/* <DestinationSearch /> */}
      <SearchResults />
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
