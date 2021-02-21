import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>CMS</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/list">
          View Files
        </NavLink>
        <NavLink activeClassName="active" to="/presentations">
          Presentations
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
