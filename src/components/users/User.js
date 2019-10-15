import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    company,
    public_repos,
    hireable,
    created_at,
  } = user;

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light btn-block btn-sm border mb-3">
        <i className="fas fa-undo"></i> Back to search
      </Link>
      <div className="card mb-3">
        <div className="card-header row m-0">
          <div className="col-sm-8 p-0">
            <h5 className="text-center text-sm-left m-0">
              {name} <small className="text-muted">({login})</small>
            </h5>
          </div>
          <div className="col-sm-4 p-0 text-center text-sm-right">
            <span className="badge">
              Hireable:{' '}
              {hireable ? (
                <i className="fas fa-check text-success" />
              ) : (
                <i className="fas fa-times-circle text-danger" />
              )}
            </span>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 text-center">
              <img
                className="rounded-circle w-100 mx-auto mb-3 d-block"
                style={{ maxWidth: '200px' }}
                src={avatar_url}
                alt={login}
              />
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary my-2 mb-sm-0"
              >
                Go to Github profile
              </a>
            </div>
            <div className="col-sm-8 text-center text-sm-left">
              <ul className="list-group list-group-flush">
                {company && (
                  <li className="list-group-item">Company: {company}</li>
                )}
                {blog && (
                  <li className="list-group-item">
                    Site:{' '}
                    <a href={blog} target="_blank" rel="noopener noreferrer">
                      {blog}
                    </a>
                  </li>
                )}
                {location && (
                  <li className="list-group-item">Location: {location}</li>
                )}
                {bio && <li className="list-group-item">Bio: {bio}</li>}
                <li className="list-group-item">Followers: {followers}</li>
                <li className="list-group-item">Following: {following}</li>
                <li className="list-group-item">
                  Profile created: <Moment fromNow>{created_at}</Moment>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} count={public_repos} />
    </>
  );
};

export default User;
