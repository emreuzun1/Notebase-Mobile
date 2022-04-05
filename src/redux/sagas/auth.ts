import {call, put, takeLatest} from 'redux-saga/effects';
import Toast from 'react-native-toast-message';

import * as type from '../types';
import * as RootNavigation from '../../Navigation/RootNavigation';

import {registerApi, loginApi} from '../../lib/api';
import {
  LoginInterface,
  RegisterValues,
  Student,
} from '../../Interfaces/Student';

interface SagaStudentInterface {
  type: string;
  payload: RegisterValues | LoginInterface;
}

function* userLogin(action: SagaStudentInterface) {
  try {
    const {username, password} = action.payload;
    const {
      data: {user, token},
      status,
    } = yield call(loginApi, {username, password});
    if (status === 200) {
      yield put({type: type.USER_LOGIN_SUCCESS, payload: {user, token}});
      RootNavigation.navigate('Home', {});
      Toast.show({
        type: 'success',
        text1: 'Logged in',
        text2: 'Successfully logged in',
        position: 'bottom',
      });
    } else {
      yield put({type: type.USER_LOGIN_FAIL, payoad: {}});
    }
  } catch (err) {
    yield put({type: type.USER_LOGIN_FAIL, payoad: {}});
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Username or password is incorrect',
      position: 'bottom',
    });
  }
}

const authSaga = [takeLatest(type.USER_LOGIN_REQUEST, userLogin)];

export default authSaga;
