import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { pingEpic, pingReducer } from './ping';
import { fetchEpic, fetchReducer } from './get';

export const rootEpic = combineEpics(pingEpic, fetchEpic);

export const rootReducer = combineReducers({
  pingReducer,
  fetchReducer,
});
