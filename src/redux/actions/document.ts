import * as type from '../types';

export function requestDocuments(token: string) {
  return {
    type: type.GET_ALLDOCUMENTS_REQUEST,
    payload: {
      token,
    },
  };
}
