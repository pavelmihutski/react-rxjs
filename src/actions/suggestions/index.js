import { createActions } from 'redux-actions';

export const { suggestionGet, suggestionGetSuccess, suggestionGetFailure } = createActions(
  'SUGGESTION_GET',
  'SUGGESTION_GET_SUCCESS',
  'SUGGESTION_GET_FAILURE',
);
