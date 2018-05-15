import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink  className="NavLink" to="/">Home</NavLink>
      <NavLink  className="NavLink" to="/spotnew">Check Spot</NavLink>
      <NavLink  className="NavLink" to="/spots">Previous Spots</NavLink>
      <NavLink  className="NavLink" to="/zones">All Zones</NavLink>
    </div>
  );
};

export default NavBar;
