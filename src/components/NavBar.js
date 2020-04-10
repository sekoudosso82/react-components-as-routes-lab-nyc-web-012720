import React from 'react';

import { NavLink, Route } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink exact to="/actors" activeStyle={{background: 'darkblue'}}>Actors</NavLink> 
      <NavLink exact to="/directors" activeStyle={{background: 'darkblue'}}>Directors</NavLink> 
      <NavLink exact to="/movies" activeStyle={{background: 'darkblue'}}>Movies</NavLink>
      <NavLink exact to="/" activeStyle={{background: 'darkblue'}}>Home</NavLink> 
    </div>
  );
};

export default NavBar;
