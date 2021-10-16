import React, { useEffect, useContext } from 'react';
import { Image } from 'react-native';
import * as Animated from 'react-native-animatable';
import { RootNavProps } from '../../types/RootParamList';
import { UserContext } from '../../utils/contextApi';
import styles from './styles';

export default function Welcome({ navigation }: RootNavProps<'Welcome'>) {
  const { user } = useContext(UserContext);

  useEffect(() => {
    // show splash screen then navigate
    if (user) {
      navigation.replace('Home');
    }
  }, [navigation, user]);

  return (
    <>
      <Animated.View animation="pulse" style={styles.animation}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </>
  );
}
