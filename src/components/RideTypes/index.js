import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';

import typesData from '../../assets/data/types';
import RideTypeRow from '../RideTypeRow';

const RideTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      <FlatList
        data={typesData}
        renderItem={({item}) => <RideTypeRow type={item} />}
        keyExtractor={item => item.id}
      />

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Confirm Ride</Text>
      </Pressable>
    </View>
  );
};

export default RideTypes;
