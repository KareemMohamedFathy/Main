import React from 'react';

import Main from './navigation/Navigator/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import store from './store/Store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
