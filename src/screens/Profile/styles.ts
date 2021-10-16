import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/theme/global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: 150,
    borderRadius: 50,
  },

  heading: { fontSize: 20, marginTop: 20, color: colors.black },
  subHeading: {
    fontSize: 20,
    marginTop: 20,
    borderWidth: 2,
    borderColor: colors.black,
    color: colors.black,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
  },
  goBack: {
    marginTop: 20,
    borderRadius: 50,
    backgroundColor: colors.black,
    color: colors.white,
    padding: 10,
  },
});

export default styles;
