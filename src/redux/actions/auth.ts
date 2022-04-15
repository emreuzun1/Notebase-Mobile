import {LoginInterface, RegisterValues} from '../../Interfaces/Student';
import * as type from '../types';

export function requestLogin(inputs: LoginInterface) {
  return {
    type: type.USER_LOGIN_REQUEST,
    payload: {
      username: inputs.username,
      password: inputs.password,
    },
  };
}

export function requestRegister(inputs: RegisterValues) {
  return {
    type: type.USER_REGISTER_REQUEST,
    payload: {
      username: inputs.username,
      password: inputs.password,
      email: inputs.email,
    },
  };
}
