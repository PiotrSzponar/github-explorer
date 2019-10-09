import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
    <Link to="/" className="navbar-brand"><i className="fab fa-github"></i> {title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
)

Navbar.defaultProps = {
  title: 'Github Explorer'
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
