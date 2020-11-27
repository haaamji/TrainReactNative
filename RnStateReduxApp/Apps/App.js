import React from 'react';
//import {View, Text} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CounterListContainer from './Containers/CounterListContainer';
import reducers from './Reducers';

//상태관리
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <CounterListContainer />
    </Provider>
  );
}

export default App;
