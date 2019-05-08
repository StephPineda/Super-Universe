import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <div className="brand">
      <h2>
        <Link to="/home">HOME UNIVERSE</Link>
      </h2>
    </div>
    <ul>
      <li>
        <NavLink to="/bio/search" activeClassName='is-active'>BIOGRAPHY</NavLink>
      </li>
      <li>
        <NavLink to="/stats/search" activeClassName='is-active'>POWER STATS</NavLink>
      </li>
      <li>
        <NavLink to="/connect/search" activeClassName='is-active'>CONNECTIONS</NavLink>
      </li>
    </ul>
  </nav>
);
 
export default NavBar;
