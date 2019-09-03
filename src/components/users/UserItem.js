import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'Piotrek',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/rickyyean/128.jpg',
    html_url: 'https://github.com/PiotrSzponar'
  }

  render() {
    const { login, avatar_url, html_url } = this.state;

    return (
      <div className="card text-center">
        <div className="card-body">
          <img className="rounded-circle mb-2" src={avatar_url} alt={login} />
          <h5 className="card-title">{login}</h5>
          <a href={html_url} className="btn btn-outline-secondary">Show more</a>
        </div>
      </div>
    )
  }
}

export default UserItem
