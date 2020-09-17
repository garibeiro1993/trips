import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './components/Header';


import history from './services/history';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;