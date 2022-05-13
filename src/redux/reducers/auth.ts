import {Student, StudentState} from '../../Interfaces/Student';
import * as type from '../types';
import produce from 'immer';

interface ActionInterface {
  payload: {student: Student; status: number} | any;
  type: string;
  error: string;
}

const initialState: StudentState = {
  loading: false,
  student: {},
  errorMessage: '',
  status: 0,
};

export default (state = initialState, action: ActionInterface) =>
  produce(state, (draft: StudentState) => {
    switch (action.type) {
      case type.USER_LOGIN_REQUEST: {
        draft.loading = true;
        break;
      }
      case type.USER_LOGIN_SUCCESS: {
        draft.student = action.payload.student;
        draft.status = action.payload.status;
        draft.loading = false;
        break;
      }
      case type.USER_LOGIN_FAIL: {
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
      case 'STUDENT_REQUEST_SUCCESS': {
        draft.student.user = action.payload;
        break;
      }
      default:
        return state;
    }
  });
