import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <Text>Map Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#2545',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeMap;
