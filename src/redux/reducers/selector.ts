import {createSelector} from 'reselect';
import {State} from '../../Interfaces/State';

const documents = (state: State) => state.document.documents;

export const getDocuments = createSelector(documents, data => {
  return data;
});
