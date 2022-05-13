import {call, put, takeLatest} from 'redux-saga/effects';
import Toast from 'react-native-toast-message';

import * as type from '../types';
import * as RootNavigation from '../../Navigation/RootNavigation';

import {loginApi, getStudentApi} from '../../lib/api';
import {LoginInterface, RegisterValues} from '../../Interfaces/Student';

interface SagaStudentInterface {
  type: string;
  payload: RegisterValues | LoginInterface | any;
}

function* userLogin(action: SagaStudentInterface) {
  try {
    const {username, password} = action.payload;
    const {
      data: {user, token},
      status,
    } = yield call(loginApi, {username, password});
    if (status === 200) {
      yield put({
        type: type.USER_LOGIN_SUCCESS,
        payload: {student: {user, token}, status: status},
      });
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

function* getUser(action: SagaStudentInterface) {
  try {
    const {id} = action.payload;
    console.log(id);
    const {data, status} = yield call(getStudentApi, id);
    if (status === 200) {
      yield put({type: 'STUDENT_REQUEST_SUCCESS', payload: data});
    }
  } catch (err) {
    console.log(err);
  }
}

const authSaga = [
  takeLatest(type.USER_LOGIN_REQUEST, userLogin),
  takeLatest('GET_STUDENT_REQUEST', getUser),
];

export default authSaga;
