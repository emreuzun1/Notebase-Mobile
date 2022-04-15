import React, {FC, ReactElement} from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store as myStore} from '../src/redux/store';
import {AuthenticationContextProvider} from '../src/services/AuthenticationContext';

function customRender(
  ui: ReactElement,
  {store = myStore, ...renderOptions}: any = {},
) {
  const Wrapper: FC = ({children}) => {
    return (
      <Provider store={store}>
        <AuthenticationContextProvider>
          {children}
        </AuthenticationContextProvider>
      </Provider>
    );
  };
  return render(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react-native';
export {customRender as render};
