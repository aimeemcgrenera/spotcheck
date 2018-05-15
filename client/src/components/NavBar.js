import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/spotnew">Check Spot</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/spots">Previous Spots</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/zones">All Zones</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/map">Map</a>
      </li>
    </ul>

  </div>
</nav>

  );
};

export default NavBar;
