import React from 'react';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import {Navigation} from './src/Navigation/Navigator';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <Toast />
    </Provider>
  );
};

export default App;
