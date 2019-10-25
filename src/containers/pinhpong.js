import React from 'react';
import { connect } from 'react-redux';

const Pingpong = (props) => {
  const { isPinging, pong, fetch } = props;
  //   console.log(isPinging, pong, 's');
  return (
    <div>
      <button type="button" onClick={fetch}>
        fetch
      </button>
      <button type="button" onClick={pong}>
        ping
      </button>
    </div>
  );
};

const mapStateToPtops = (state) => ({
  isPinging: state.pingReducer.isPinging,
});
const mapDispatchToProps = (dispatch) => ({
  pong: () => dispatch({ type: 'PING' }),
  fetch: () => dispatch({ type: 'FETCH' }),
});

export default connect(mapStateToPtops, mapDispatchToProps)(Pingpong);
