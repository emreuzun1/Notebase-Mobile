import {put, call, takeLatest} from 'redux-saga/effects';
import {getDocumentsApi} from '../../lib/api';
import {requestDocuments} from '../actions';
import * as type from '../types';

interface SagaDocumentInterface {
  type: string;
  payload: {
    token: string;
  };
}

function* getAllDocuments(action: SagaDocumentInterface) {
  try {
    const {token} = action.payload;
    const {data, status} = yield call(getDocumentsApi, token);
    if (status === 200) {
      yield put({type: type.GET_ALLDOCUMENTS_SUCCESS, payload: data});
    }
  } catch (err) {
    console.log(err);
  }
}

const documentSaga = [
  takeLatest(type.GET_ALLDOCUMENTS_REQUEST, getAllDocuments),
];

export default documentSaga;
