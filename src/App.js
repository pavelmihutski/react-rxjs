import React from 'react';
import { Provider } from 'react-redux';
import Input from './components/Input/Input';
import store from './store';

import Sugg from './pages/suggestions';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sugg />
        {/* <Pingpong /> */}
        <Input />
      </div>
    </Provider>
  );
}

export default App;
