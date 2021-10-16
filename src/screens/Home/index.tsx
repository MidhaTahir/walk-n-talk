import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { RootNavProps } from '../../types/RootParamList';
import MapViewComponent from '../../components/MapView';
import InputBox from '../../components/InputBox';
import DecisionBox from '../../components/DecisionBox';
import { options } from '../../utils/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { colors } from '../../../assets/theme/global';
import { ITimeTravelInfo } from '../../types';

const Home = ({ navigation }: RootNavProps<'Home'>) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [travelTimeInfo, setTravelTimeInfo] = useState<ITimeTravelInfo | null>(
    null,
  );
  const [decision, setDecision] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.menuIcon}>
        <Feather name="menu" size={20} color={colors.darkgray} />
      </TouchableOpacity>

      <InputBox
        from={options.source}
        placeholder="Start Location"
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <InputBox
        from={options.destination}
        placeholder="End Location"
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <TouchableOpacity
        style={styles.btnWrapper}
        onPress={() => setDecision(true)}>
        <Text style={styles.btnText}>Can I Walk</Text>
        <Feather name="chevron-right" size={18} color={colors.white} />
      </TouchableOpacity>

      {origin && destination && decision ? (
        <>
          <DecisionBox
            distance={
              travelTimeInfo?.distance as {
                text: string;
                value: number;
              }
            }
          />
          <MapViewComponent
            origin={origin}
            destination={destination}
            travelTimeInfo={travelTimeInfo}
            setTravelTimeInfo={setTravelTimeInfo}
          />
        </>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default Home;
