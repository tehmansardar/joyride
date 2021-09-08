import React from 'react';
import {View, Dimensions} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
const HomeScreen = () => {
  return (
    <View>
      {/* Map */}
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      {/* Covid Messages */}
      <CovidMessage />
      {/* Bottom Components */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
