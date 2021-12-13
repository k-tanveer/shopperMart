import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  cartContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  cartText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingHorizontal: 7,
  },
});
