import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    user: PropTypes.objectOf(PropTypes.any).isRequired,
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  render() {
    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, company, public_repos, public_gists, hireable } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <>
        <Link to="/" className="btn btn-light btn-block btn-sm border mb-3"><i className="fas fa-undo"></i> Back to search</Link>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4 text-center">
                <img className="rounded-circle w-100 mb-3" style={{ maxWidth: '200px' }} src={avatar_url} alt={login} />
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{login}</h6>
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary my-2 mb-sm-0">Go to Github profile</a>
              </div>
              <div className="col-sm-8">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Hireable: {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}</li>
                  {company && <li className="list-group-item">Company: {company}</li>}
                  {blog && <li className="list-group-item">Site: <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a></li>}
                  {location && <li className="list-group-item">Location: {location}</li>}
                  {bio && <li className="list-group-item">Bio: {bio}</li>}
                  <li className="list-group-item">Followers: {followers}</li>
                  <li className="list-group-item">Following: {following}</li>
                  <li className="list-group-item">Public Repos: {public_repos}</li>
                  <li className="list-group-item">Public Gists: {public_gists}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default User
