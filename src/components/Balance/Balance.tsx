import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Styles from '@components/Balance/styles';

const Balance: React.FC = () => {
  return (
    <View style={Styles.balance}>
      <View style={Styles.currentBalance}>
        <TouchableOpacity style={Styles.changeBalanceIconBtn}>
          <Image
            style={Styles.balanceIcon}
            source={require('../../../assets/img/tinkoff.png')}
          />
        </TouchableOpacity>
        <View style={Styles.balanceCount}>
          <Text style={Styles.balanceCountTitle}>Баланс:</Text>
          <Text style={Styles.balanceCountNumber}>43 200 Р</Text>
        </View>
      </View>
      <TouchableOpacity style={Styles.addStonks}>
        <View style={Styles.addStonksIconContainer}>
          <Text style={{ fontSize: 35, color: 'white' }}>+</Text>
          {/*<Image*/}
          {/*  source={require('../../../assets/img/plusButton.png')}*/}
          {/*  style={Styles.addStonksIcon}*/}
          {/*/>*/}
        </View>
        <Text style={Styles.addStonksTitle}>Доход</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Balance;
