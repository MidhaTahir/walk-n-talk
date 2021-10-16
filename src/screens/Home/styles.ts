import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/theme/global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  menuIcon: {
    marginVertical: 20,
  },
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  btnText: {
    color: colors.white,
  },
});

export default styles;
