import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    title: 'Github Explorer'
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand"><i class="fab fa-github"></i> {this.props.title}</span>
      </nav>
    )
  }
}

export default Navbar
