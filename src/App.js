import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ApplicationPage from './pages/ApplicationPage';
import HomePage from './pages/HomePage';

function App() {
  return (
      <Switch>
        <Route path='/application' component={ApplicationPage} />
        <Route path='/' exact component={HomePage} />
        <Redirect to='/' />
      </Switch>
  );
}

export default App;
