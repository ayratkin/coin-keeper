import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '@styles/variables';

const Styles = StyleSheet.create({
  balance: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  currentBalance: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  balanceCount: {
    marginLeft: 20,
  },

  balanceCountTitle: {
    color: colors.black,
    fontSize: fontSizes.main,
  },

  balanceCountNumber: {
    color: colors.black,
    fontSize: fontSizes.extra,
  },

  balanceIcon: {
    width: 80,
    height: 80,
  },

  addStonks: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  addStonksIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addStonksIcon: {
    width: 35,
    height: 35,
  },

  addStonksTitle: {
    marginTop: 3,
    fontSize: fontSizes.main,
    color: colors.black,
  },
});

export default Styles;
