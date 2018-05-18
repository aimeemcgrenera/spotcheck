import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/spotnew">Check Spot</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/zones">All Zones</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/spots">Previous Spots</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/map">Map</Link>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default NavBar;
