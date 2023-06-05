import React, { FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Styles from './Styles';
import BottomMenu from '../../components/BottomMenu/BottomMenu';

const MainScreen = () => {
  return (
    <>
      <SafeAreaView style={Styles.mainScreenWrapper}>
        <ScrollView></ScrollView>
        <BottomMenu />
      </SafeAreaView>
    </>
  );
};

export default MainScreen;
