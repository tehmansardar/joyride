import React from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import RideTypes from '../../components/RideTypes';

const SearchResults = () => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>
      <View style={{height: 400}}>
        <RideTypes />
      </View>
    </View>
  );
};

export default SearchResults;
