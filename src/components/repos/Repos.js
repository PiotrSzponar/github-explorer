import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos, count }) => {
  return (
    <div className="card mb-3">
      <h5 className="card-header text-center text-sm-left">
        Repositories <span className="badge badge-secondary">{count}</span>
      </h5>
      <ul className="list-group list-group-flush">
        {repos.map(repo => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </ul>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
  count: PropTypes.number,
};

export default Repos;
