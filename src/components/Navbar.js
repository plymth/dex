import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <ul>
          <li>
            <NavLink to="/swap">Swap</NavLink>
          </li>
          <li>
            <NavLink to="/pool">Pool</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/vote">Vote</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
