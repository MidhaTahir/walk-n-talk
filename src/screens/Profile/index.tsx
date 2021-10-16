import React, { useContext } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../../assets/theme/global';
import { RootNavProps } from '../../types/RootParamList';
import { UserContext } from '../../utils/contextApi';
import styles from './styles';

const Profile = ({ navigation }: RootNavProps) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={{ uri: user.avatar }}
          style={styles.avatarImage}
          resizeMode={'contain'}
        />

        <Text style={styles.heading}>
          <Feather name="user" size={20} /> {user?.first_name} {user?.last_name}
        </Text>

        <Text style={styles.subHeading}>
          <Feather name="mail" size={20} /> {user?.email}
        </Text>

        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={25} color={colors.white} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;
