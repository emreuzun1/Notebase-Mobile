import produce from 'immer';
import {DocumentState} from '../../Interfaces/Document';
import * as type from '../types';

interface ActionInterface {
  payload: Document[];
  type: string;
}

const initialState: DocumentState = {
  loading: false,
  documents: [],
};

export default (state = initialState, action: ActionInterface) =>
  produce(state, (draft: DocumentState) => {
    switch (action.type) {
      case type.GET_ALLDOCUMENTS_REQUEST: {
        draft.loading = true;
        break;
      }
      case type.GET_ALLDOCUMENTS_SUCCESS: {
        draft.loading = false;
        draft.documents = action.payload;
        break;
      }
      default:
        return state;
    }
  });
