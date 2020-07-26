import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from "./logo.svg";
import Home from './pages/home';
import List from './pages/list';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <BrowserRouter>
        <Switch>
          <Route path='/list' component={List} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;