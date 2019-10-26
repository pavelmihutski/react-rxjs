import { combineEpics } from 'redux-observable';
import getSuggestionEpic from './suggestions/get-suggestions';

export default combineEpics(getSuggestionEpic);
