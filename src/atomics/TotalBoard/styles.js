import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  totalContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.light,
  },
});
