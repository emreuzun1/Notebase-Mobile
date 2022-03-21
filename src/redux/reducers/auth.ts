import {Student, StudentState} from '../../Interfaces/Student';
import * as type from '../types';

interface ActionInterface {
  payload: Student;
  type: string;
  error: string;
}

const initialState: StudentState = {
  loading: false,
  student: undefined,
  errorMessage: '',
};

export default function (state = initialState, action: ActionInterface) {
  switch (action.type) {
    case type.USER_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case type.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        student: action.payload,
        loading: false,
      };
    }
    case type.USER_REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case type.USER_REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
  }
}
