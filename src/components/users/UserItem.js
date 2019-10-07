import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card text-center mb-3">
        <div className="card-body">
          <img className="rounded-circle mb-2 w-100" src={avatar_url} alt={login} />
          <h5 className="card-title">{login}</h5>
          <a href={html_url} className="btn btn-outline-secondary">Show more</a>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
