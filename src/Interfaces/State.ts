import {DocumentState} from './Document';
import {StudentState} from './Student';

export interface State {
  auth: StudentState;
  documents: DocumentState;
}
