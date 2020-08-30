import React from 'react';
import {Link} from 'react-router-dom';
// show nav links in url and buttons
const Nav = () => {
  return (
    <nav>
    <Link to="/outspace"><button className="navbutton">Space</button></Link>
      <Link to="/hike"><button className="navbutton">Nature</button></Link>
      <Link to="/fireworks"><button className="navbutton">fireworks</button></Link>
    </nav>
  )
}

export default Nav;
