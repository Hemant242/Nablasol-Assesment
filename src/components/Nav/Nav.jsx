import React from "react";
import "../Nav/Nav.css";

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img
          src='https://img.icons8.com/ios-filled/50/000000/rocket.png'
          alt=''
        />
      </div>
      <ul class='nav justify-content-end'>
        <li class='nav-item nav-link'>Red</li>
        <li class='nav-item nav-link'>Blue</li>
        <li class='nav-item nav-link'>Green</li>
        <li class='nav-item nav-link'>Yellow</li>
        <li class='nav-item nav-link'>Purple</li>
        <li class='nav-item nav-link'>Pink</li>
      </ul>
    </nav>
  );
};

export default Nav;
