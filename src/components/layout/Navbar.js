import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => (
  <nav className="navbar navbar-dark bg-primary">
    <Link to="/" className="navbar-brand">
      <i className="fab fa-github"></i> {title}
    </Link>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

Navbar.defaultProps = {
  title: 'Github Explorer',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
