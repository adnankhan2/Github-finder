import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from '../Layout/Spinner'
import PropTypes from 'prop-types'

 const Users = ({users,loading}) => {
     if(loading){
         return <Spinner />

     }
     else{

        return (
            <div className= 'userStyle grid repeat(3 ,1fr) 1rem' >
                {users.map(user=>(
                    <UserItem key={user.id} user= {user}/>
                ))}
            </div>
        )
    }
     }
        
Users.prototype={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}

export default Users
