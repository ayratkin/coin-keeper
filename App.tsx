import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import MainScreen from '@scenes/MainScreen';

const App = props => {
  return (
    <>
      <NativeBaseProvider>
        <MainScreen />
      </NativeBaseProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

export default App;
