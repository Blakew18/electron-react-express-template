import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import List from './pages/list';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/list' component={List} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;