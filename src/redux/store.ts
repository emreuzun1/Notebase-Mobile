import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {composeWithDevTools} from '@redux-devtools/extension';

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const sagaMiddleWare = createSagaMiddleware();

const store = composeWithDevTools(applyMiddleware(sagaMiddleWare))(createStore)(
  persistedReducer,
);

let persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export {store, persistor};
