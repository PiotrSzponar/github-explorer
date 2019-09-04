import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => (
  <nav className="navbar navbar-dark bg-primary">
    <span className="navbar-brand"><i className="fab fa-github"></i> {title}</span>
  </nav>
)

Navbar.defaultProps = {
  title: 'Github Explorer'
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
