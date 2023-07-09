import React, { FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Balance from '@components/Balance';
import BottomMenu from '@components/BottomMenu';
import Categories from '@components/Categories';
import Styles from './styles';

const MainScreen: FC = () => {
  return (
    <>
      <SafeAreaView style={Styles.mainScreenWrapper}>
        <ScrollView>
          <Balance />
          <Categories />
        </ScrollView>
        <BottomMenu />
      </SafeAreaView>
    </>
  );
};

export default MainScreen;
