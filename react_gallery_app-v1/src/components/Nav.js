import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
    <Link to="/space"><button className="navbutton">Space</button></Link>
      <Link to="/hike"><button className="navbutton">Nature</button></Link>
      <Link to="/fireworks"><button className="navbutton">Fireworks</button></Link>
    </nav>
  )
}

export default Nav;
