import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const RepoItem = ({ repo }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between mb-1">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
        <small className="text-secondary">
          <Moment fromNow>{repo.created_at}</Moment>
        </small>
      </div>
      <p className="mb-1">{repo.description}</p>
    </li>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RepoItem;
