import React from 'react';
import { Provider } from 'react-redux';
import Input from './components/Input/Input';
import Pingpong from './containers/pinhpong';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Pingpong />
        <Input />
      </div>
    </Provider>
  );
}

export default App;
