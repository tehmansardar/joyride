/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default App;
