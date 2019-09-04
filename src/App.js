import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios
      .get(`https://api.github.com/users?client_id=${process.env.GH_CLIENT_ID}&client-secret=${process.env.GH_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Explorer" />
        <div className="container-fluid pt-3">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
