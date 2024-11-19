import React from 'react';
import { Link } from 'react-router-dom';
function Sidenav() {
  return (
    <div className='sidenav'>
      <ul className='sidenav-list'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/'><li>About</li></Link>
        <Link to='/'><li>Services</li></Link>
        <Link to='/'><li>Contact</li></Link>
      </ul>
    </div>
  );
}

export default Sidenav;

