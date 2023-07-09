import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '@styles/variables';

export default StyleSheet.create({
  categories: {
    marginLeft: 15,
    marginRight: 15,
  },

  categoriesTitle: {
    color: colors.black,
    fontSize: fontSizes.extra,
  },

  categoriesItems: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  categoriesItem: {
    width: 80,
    marginBottom: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },

  categoriesItemTitle: {
    fontSize: fontSizes.main,
    textAlign: 'center',
    color: 'black',
  },

  categoriesItemContainer: {
    width: 75,
    height: 75,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.lightBlue,
  },

  categoriesItemImage: {
    width: 40,
    height: 40,
  },

  categoriesItemBalance: {
    fontSize: fontSizes.main,
    color: 'black',
  },
});
