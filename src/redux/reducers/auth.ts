import {Student, StudentState} from '../../Interfaces/Student';
import * as type from '../types';
import produce from 'immer';

interface ActionInterface {
  payload: Student;
  type: string;
  error: string;
}

const initialState: StudentState = {
  loading: false,
  student: {},
  errorMessage: '',
};

export default (state = initialState, action: ActionInterface) =>
  produce(state, (draft: StudentState) => {
    switch (action.type) {
      case type.USER_LOGIN_REQUEST: {
        draft.loading = true;
        break;
      }
      case type.USER_LOGIN_SUCCESS: {
        draft.student = action.payload;
        draft.loading = false;
        break;
      }
      case type.USER_REGISTER_REQUEST: {
        draft.loading = true;
        break;
      }
      case type.USER_REGISTER_SUCCESS: {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
