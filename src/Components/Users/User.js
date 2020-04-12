import React, {Fragment, Component } from 'react'
import Spinner from '../Layout/Spinner'
import PropTypes from 'prop-types'
import {Link} from'react-router-dom'
export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      login,
      html_url,
      followers,
      following,
      public_gists,
      public_repos,
      hireable
    } = this.props.user
    const { loading } = this.props
    if (loading) return <Spinner /> ;
    return <Fragment>
        <Link to='/' className='btn btn-light'> Back to Search</Link>
        Hireable : {' '}
        {hireable ? <i className='fas fa-check text-success' />: <i className='fas fa-times-circle text-danger' />}
        {name}</Fragment>
  }
}

export default User