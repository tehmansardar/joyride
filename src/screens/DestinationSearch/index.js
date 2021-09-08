import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';

const DestinationSearch = () => {
  const [originPlace, setOriginPalce] = useState('');
  const [destinationPlace, setDestinationPalce] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          placeholderTextColor="#000"
          onPress={(data, details = null) => {
            setOriginPalce(data, details);
            // console.log(data, details);
          }}
          fetchDetails
          styles={{
            textInput: styles.textInput,
          }}
          textInputProps={{
            placeholderTextColor: '#000',
            selectionColor: '#000',
          }}
          query={{
            key: 'AIzaSyDPYjiwIUr-We5AOJGdiwHPZ8t5ht0rOEY',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          placeholderTextColor="#000"
          onPress={(data, details = null) => {
            setDestinationPalce(data, details);
            // console.log(data, details);
          }}
          fetchDetails
          styles={{
            textInput: styles.textInput,
          }}
          textInputProps={{
            placeholderTextColor: '#000',
            selectionColor: '#000',
          }}
          query={{
            key: 'AIzaSyDPYjiwIUr-We5AOJGdiwHPZ8t5ht0rOEY',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
