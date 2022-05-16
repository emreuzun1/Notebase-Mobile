import React from 'react';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {LogBox} from 'react-native';

import {Navigation} from './src/Navigation/Navigator';
import {store} from './src/redux/store';
import {AuthenticationContextProvider} from './src/services/AuthenticationContext';
import {DataContextProvider} from './src/services/DataContext';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <AuthenticationContextProvider>
        <DataContextProvider>
          <Navigation />
          <Toast />
        </DataContextProvider>
      </AuthenticationContextProvider>
    </Provider>
  );
};

export default App;
