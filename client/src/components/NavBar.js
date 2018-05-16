import React from 'react';



const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
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
