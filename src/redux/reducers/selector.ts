import {createSelector} from 'reselect';
import {Document} from '../../Interfaces/Document';
import {State} from '../../Interfaces/State';

const documents = (state: State) => state.document.documents;
const student = (state: State) => state.auth.student;

export const getDocuments = createSelector(documents, data => {
  return data;
});

export const getStudentDocuments = createSelector(
  [documents, student],
  (documentsData, studentData) => {
    return documentsData.filter(
      (document: Document) => document.user === studentData.user.id,
    );
  },
);
