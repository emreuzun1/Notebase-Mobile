import {combineReducers} from 'redux';
import auth from './auth';
import document from './document';

const rootReducer = combineReducers({
  auth,
  document,
});

export default rootReducer;
