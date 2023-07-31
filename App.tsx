import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store/create';
import MainScreen from '@scenes/MainScreen';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <MainScreen />
        </NativeBaseProvider>
      </Provider>
    </>
  );
};

export default App;
