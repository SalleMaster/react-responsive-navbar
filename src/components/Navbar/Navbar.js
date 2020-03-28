import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  const removeNavbar = () => {
    setActive(false);
  };

  return (
    <nav className='navbar'>
      <div className='nav-bg'></div>
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
            <NavLink
              exact
              to='/'
              activeClassName='nav-active'
              onClick={removeNavbar}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/products'
              activeClassName='nav-active'
              onClick={removeNavbar}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/users'
              activeClassName='nav-active'
              onClick={removeNavbar}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/about'
              activeClassName='nav-active'
              onClick={removeNavbar}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
