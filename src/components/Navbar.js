import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavbar = styled.nav`
  ul li {
    display: inline;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
  }

  ul li a {
    color: #a6a0bb;
    padding: 8px 16px;
    display: inline-block;
    margin-right: 16px;
    transition: color 0.5s ease;
  }

  ul li a.active {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
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
    </StyledNavbar>
  );
};
