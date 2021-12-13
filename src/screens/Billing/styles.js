import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  cartTitle: {
    backgroundColor: COLORS.violet,
    color: COLORS.light,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 10,
    margin: 10,
  },
  totalSection: {
    margin: 15,
    padding: 5,
    backgroundColor: COLORS.violet,
    borderRadius: 15,
  },
});
