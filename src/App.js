import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar'
import Users from './Components/Users/Users'
import Search from './Components/Users/Search'
import axios from 'axios'
class App extends Component  {
  state= {
    users:[] ,
    loading : false
  }
  async componentDidMount (){
    this.setState({loading:true})
    const res = await 
    axios.get(`https://api.github.com/users?client_
    id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET}`);

  this.setState({users:res.data,loading:false})
  }
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({ users: res.data.items, loading: false })
 }
  render (){
  return (
    <div className="App">
      <Navbar />
      <Search searchUsers={this.searchUsers} />
      <Users loading={this.state.loading} users={this.state.users} />
      
    </div>
  );
}
}

export default App;
