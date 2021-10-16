import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { options } from '../utils/constants';

type Props = {
  from: string;
  placeholder: string;
  setOrigin: Function;
  setDestination: Function;
};

const InputBox = ({ from, placeholder, setOrigin, setDestination }: Props) => {
  return (
    <View>
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder={placeholder}
        onPress={(data, details = null) => {
          if (from === options.source) {
            setOrigin({
              location: details?.geometry.location,
              description: data.description,
            });
          } else if (from === options.destination) {
            setDestination({
              location: details?.geometry.location,
              description: data.description,
            });
          }
        }}
        fetchDetails={true}
        onFail={error => console.error(error)}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        minLength={2}
        enablePoweredByContainer={false}
      />
    </View>
  );
};

export default InputBox;
