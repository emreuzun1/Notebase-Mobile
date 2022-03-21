import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/index';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const sagaMiddleWare = createSagaMiddleware();

const store = applyMiddleware(sagaMiddleWare)(createStore)(persistedReducer);

let persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export {store, persistor};
