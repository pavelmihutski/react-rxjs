import { mergeMap, map, catchError } from 'rxjs/operators';

import { ofType, ActionsObservable } from 'redux-observable';

import { ajax } from 'rxjs/ajax';

import {
  suggestionGet,
  suggestionGetSuccess,
  suggestionGetFailure,
} from '../../actions/suggestions';

const getSuggestionEpic = (action$) => {
  return action$.pipe(
    ofType(suggestionGet),
    mergeMap(() =>
      ajax
        .getJSON('https://api.github.com/users?since=1')
        .pipe(
          map((response) => suggestionGetSuccess(response)),
          catchError((error) => ActionsObservable.of(suggestionGetFailure(error.response.message))),
        ),
    ),
  );
};

export default getSuggestionEpic;
