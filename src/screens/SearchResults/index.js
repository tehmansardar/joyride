import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap';
import RideTypes from '../../components/RideTypes';

const SearchResults = () => {
  return (
    <View>
      <HomeMap />
      <RideTypes />
    </View>
  );
};

export default SearchResults;
