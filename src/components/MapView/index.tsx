import React, { useRef, useEffect, useCallback } from 'react';
import MapView, { MarkerAnimated, Marker } from 'react-native-maps';
import { Image, Platform } from 'react-native';
import { GOOGLE_MAPS_API_KEY } from '@env';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import { TimeTravelApi } from '../../utils/constants';
import { MapPropsType } from '../../types/MapPropsType';
import { finalVerdict } from '../../utils/helpers';

const MapViewComponent = ({
  origin,
  destination,
  travelTimeInfo,
  setTravelTimeInfo,
}: MapPropsType) => {
  const mapRef = useRef<MapView | null>(null);
  const markerRef = useRef<MarkerAnimated | null>(null);

  const move = {
    latitude: origin?.location.lat,
    longitude: origin?.location.lng,
  };

  const destinationCoords = {
    latitude: destination?.location.lat,
    longitude: destination?.location.lng,
  };

  const verdict = travelTimeInfo
    ? finalVerdict(travelTimeInfo.distance.text)
    : false;

  //move person on map
  useEffect(() => {
    if (!verdict) {
      return;
    }
    const interval = setInterval(() => {
      animate();
    }, 3000);
    return () => clearInterval(interval);
  });

  const animate = () => {
    const duration = 500;
    if (move !== destinationCoords) {
      if (Platform.OS === 'android') {
        if (markerRef.current) {
          markerRef.current.animateMarkerToCoordinate(
            destinationCoords,
            duration,
          );
        }
      } else {
        move
          .timing({
            ...destinationCoords,
            useNativeDriver: true, // defaults to false if not passed explicitly
            duration,
          })
          .start();
      }
    }
  };

  useEffect(() => {
    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  const getTravelTime = useCallback(async () => {
    const URL =
      TimeTravelApi +
      `&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`;
    const data = await fetch(URL).then(response => response.json());
    if (data.status !== 'OK') {
      return console.error(data.error_message);
    }
    setTravelTimeInfo(data.rows[0].elements[0]);
  }, [destination.description, origin.description, setTravelTimeInfo]);

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    getTravelTime();
  }, [origin, destination, getTravelTime]);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {verdict && (
        <MarkerAnimated ref={markerRef} coordinate={move}>
          <Image
            source={require('../../../assets/images/person.png')}
            style={styles.personImage}
          />
        </MarkerAnimated>
      )}

      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          lineDashPattern={[0]}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
          onError={error => console.log('Directions error: ', error)}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin">
          <Image
            source={require('../../../assets/images/customPin.png')}
            style={styles.pinImage}
          />
        </Marker>
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination?.location.lat,
            longitude: destination?.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination">
          <Image
            source={require('../../../assets/images/customPin.png')}
            style={styles.pinImage}
          />
        </Marker>
      )}
    </MapView>
  );
};

export default MapViewComponent;
