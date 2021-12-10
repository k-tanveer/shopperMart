import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  borderBtn: {
    borderColor: COLORS.violet,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.violet,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyBtnText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
