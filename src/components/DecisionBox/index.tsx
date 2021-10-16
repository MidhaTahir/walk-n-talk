import React from 'react';
import { View, Text } from 'react-native';
import { finalVerdict } from '../../utils/helpers';
import styles from './styles';

type Props = {
  distance: {
    text: string;
    value: number;
  };
};

const DecisionBox = ({ distance }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.decisionText}>
        {distance && finalVerdict(distance?.text)
          ? 'Hurray!!! You can walk'
          : "Sorry, you can't walk more than 1 mile"}
      </Text>
    </View>
  );
};

export default DecisionBox;
