import { handleActions } from 'redux-actions';

import actions from '../../actions';

const defaultState = { fetchingSuggestions: false, errorMessage: null };

export default handleActions(
  {
    [actions.suggestionGet]: () => ({
      ...defaultState,
      fetchingSuggestions: true,
    }),

    [actions.suggestionGetSuccess]: (state, { payload }) => ({
      ...state,
      suggestions: payload,
      fetchingSuggestions: false,
    }),

    [actions.suggestionGetFailure]: (state, { payload }) => ({
      ...state,
      errorMessage: payload,
      fetchingSuggestions: false,
    }),
  },
  defaultState,
);
