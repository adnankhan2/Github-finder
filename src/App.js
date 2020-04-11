import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import About from './Components/Pages/About'
import Navbar from './Components/Layout/Navbar'
import Users from './Components/Users/Users'
import Search from './Components/Users/Search'
import Alert from './Components/Layout/Alert'
import './App.css'

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // search github users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({ users: res.data.items, loading: false })
  }

  // clear users
  clearUsers = () => this.setState({ users: [], loading: false })

  // set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 1500)
  }

  render() {
    const { users, loading } = this.state
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route  exact path ='/about' component= {About}/>
          </Switch>   
        </div>
          </div>
     </Router>
    )
  }
}
export default App