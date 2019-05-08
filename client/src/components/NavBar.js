import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <div className="brand">
      <h2>
        <Link to="/home">HOME UNIVERSE</Link>
      </h2>
    </div>
    <ul>
      <li>
        <Link to="/bio/search">BIOGRAPHY</Link>
      </li>
      <li>
        <Link to="/stats/search">POWER STATS</Link>
      </li>
      <li>
        <Link to="/connect/search">CONNECTIONS</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
