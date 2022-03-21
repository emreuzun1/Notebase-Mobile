import {call, put, takeLatest} from 'redux-saga/effects';
import * as type from '../types';

import {registerApi, loginApi} from '../../lib/api';
import {
  LoginInterface,
  RegisterInterface,
  Student,
} from '../../Interfaces/Student';

interface SagaStudentInterface {
  type: string;
  payload: RegisterInterface | LoginInterface;
}

function* userLogin(action: SagaStudentInterface) {
  try {
    const {username, password} = action.payload;
    const {
      data: {user, token},
      status,
    } = yield call(loginApi, {username, password});
    if (status === 200) {
      yield put({type: type.USER_REGISTER_SUCCESS, payload: {user, token}});
      console.log('SUCCESS');
    }
  } catch (err) {
    console.log(err);
  }
}

const authSaga = [takeLatest(type.USER_LOGIN_REQUEST, userLogin)];

export default authSaga;
