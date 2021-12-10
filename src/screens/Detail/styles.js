import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  imageContainer: {
    flex: 0.5,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'stretch',
  },
  bestChoiceContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bestChoiceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  detailsContainer: {
    flex: 0.5,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 20,
    paddingTop: 10,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginRight: 3,
  },
  clothNameContainer: {
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceTagContainer: {
    backgroundColor: COLORS.violet,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },
  priceTagText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    color: COLORS.white,
  },
  aboutContainer: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  aboutText: {
    color: COLORS.dark,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 10,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
