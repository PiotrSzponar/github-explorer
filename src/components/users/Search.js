import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text.trim().length > 0) {
      githubContext.searchUsers(text);
    } else {
      alertContext.setAlert('Please enter something', 'warning');
    }
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            value={text}
            onChange={onChange}
            className="form-control"
            name="text"
            placeholder="Search Users..."
            aria-label="Search Users..."
            aria-describedby="submit"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit" id="submit">
              <i className="fas fa-search" /> Search
            </button>
          </div>
        </div>
        {githubContext.users.length > 0 && (
          <button
            type="button"
            onClick={githubContext.clearUsers}
            className="btn btn-light btn-block btn-sm border mb-3"
          >
            <i className="fas fa-eraser" /> Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
