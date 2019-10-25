import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { ajax } from 'rxjs/ajax';

export const fetchEpic = (action$) => {
  console.log(action$);
  return action$.pipe(
    ofType('FETCH'),
    mergeMap(() =>
      ajax
        .getJSON('https://api.github.com/users/pavelmihutski')
        .pipe(map((response) => ({ type: 'FETCHED', payload: response }))),
    ),
  );
};

export const fetchReducer = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case 'FETCH':
      return { isFetching: true };

    case 'FETCHED':
      return { data: action.payload };

    default:
      return state;
  }
};
