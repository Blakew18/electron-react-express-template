import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function HOME(){

return (
      <Link to={'/list'}>
        <button variant='raised'>See The List From Express</button>
      </Link>

  );

}

export default HOME; 