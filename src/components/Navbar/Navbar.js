import React, { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <a href='/'>LOGO</a>
      </div>
      <div
        onClick={toggleNavbar}
        className={active ? 'navbar-toggler active' : 'navbar-toggler'}
      >
        <div className='toggler-line'></div>
        <div className='toggler-line'></div>
        <div className='toggler-line'></div>
      </div>
      <div
        className={
          active
            ? 'navbar-navigation mobile mobile-active'
            : 'navbar-navigation mobile'
        }
      >
        <ul>
          <li>
            <a href='/'>Products</a>
          </li>
          <li>
            <a href='/'>Users</a>
          </li>
          <li>
            <a href='/'>About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
