import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { suggestionGet } from '../../actions/suggestions';

const Suggestion = (props) => {
  const { getSuggestions } = props;
  return (
    <div>
      <button type="button" onClick={getSuggestions}>
        get suggestions
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getSuggestions: () => dispatch(suggestionGet()),
});

Suggestion.propTypes = {
  getSuggestions: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Suggestion);
