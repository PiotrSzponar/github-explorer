import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text.trim().length > 0) {
      this.props.searchUsers(this.state.text);
    } else {
      this.props.setAlert('Please enter something', 'warning');
    }
    this.setState({ text: '' });
  }

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <input type="text" value={this.state.text} onChange={this.onChange} className="form-control" name="text" placeholder="Search Users..." aria-label="Search Users..." aria-describedby="submit" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit" id="submit"><i className="fas fa-search"></i> Search</button>
            </div>
          </div>
          {showClear && <button type="button" onClick={clearUsers} className="btn btn-light btn-block btn-sm border mb-3"><i className="fas fa-eraser"></i> Clear</button>}
        </form>
      </div>
    )
  }
}

export default Search
