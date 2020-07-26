import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

function HOME(){

return (
    <div className="App">
      <header className="App-header">
        <Link to={'/list'}>
        <button variant='raised'>My List</button>
      </Link>
      </header>
    </div>
  );

}

export default HOME; 