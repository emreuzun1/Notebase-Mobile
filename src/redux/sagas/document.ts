import {put, call, takeLatest} from 'redux-saga/effects';
import {getDocumentByIdApi, getDocumentsApi} from '../../lib/api';
import {requestDocuments} from '../actions';
import * as type from '../types';

interface SagaDocumentInterface {
  type: string;
  payload: {
    token: string;
    id?: string;
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

function* getDocumentById(action: SagaDocumentInterface) {
  try {
    const {token, id} = action.payload;
    const {data, status} = yield call(getDocumentByIdApi, id!, token);
    console.log(data, status);
  } catch (err) {
    console.log(err);
  }
}

const documentSaga = [
  takeLatest(type.GET_ALLDOCUMENTS_REQUEST, getAllDocuments),
  takeLatest('GET_DOCUMENT_REQUEST', getDocumentById),
];

export default documentSaga;
