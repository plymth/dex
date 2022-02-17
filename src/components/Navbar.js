import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
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
        <li>
          <NavLink to="/charts">Charts</NavLink>
        </li>
      </ul>
    </nav>
  );
};
