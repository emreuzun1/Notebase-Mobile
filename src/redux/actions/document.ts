import * as type from '../types';

export function requestDocuments(token: string) {
  return {
    type: type.GET_ALLDOCUMENTS_REQUEST,
    payload: {
      token,
    },
  };
}

export function requestDocumentById(id: string, token: string) {
  return {
    type: 'GET_DOCUMENT_REQUEST',
    payload: {
      id,
      token,
    },
  };
}
