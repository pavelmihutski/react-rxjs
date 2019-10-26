import { handleActions } from 'redux-actions';

import {
  suggestionGet,
  suggestionGetSuccess,
  suggestionGetFailure,
} from '../../actions/suggestions';

const defaultState = { fetchingSuggestions: false, errorMessage: null };

export default handleActions(
  {
    [suggestionGet]: () => ({
      ...defaultState,
      fetchingSuggestions: true,
    }),

    [suggestionGetSuccess]: (state, { payload }) => ({
      ...state,
      suggestions: payload,
      fetchingSuggestions: false,
    }),

    [suggestionGetFailure]: (state, { payload }) => ({
      ...state,
      errorMessage: payload,
      fetchingSuggestions: false,
    }),
  },
  defaultState,
);
