import React, { Component } from 'react'
import UserItem from './UserItem'
//import { findByLabelText } from '@testing-library/react'

 class Users extends Component {
     state ={
         users: [
             {
                "login": "mojombo",
                "id": 1,
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "url": "https://api.github.com/users/mojombo",
                "html_url": "https://github.com/mojombo",
             },
             {
                "login": "defunkt",
                "id": 2, 
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "url": "https://api.github.com/users/defunkt",
                "html_url": "https://github.com/defunkt",
             },
             {
                "login": "pjhyett",
                "id": 3,
                "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
                "url": "https://api.github.com/users/pjhyett",
                "html_url": "https://github.com/pjhyett",
             },
             {
                
                "login": "wycats",
                "id": 4,
                "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4",
                "url": "https://api.github.com/users/wycats",
                "html_url": "https://github.com/wycats",
             }
         ]
     }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user=>(
                    <UserItem key={user.id} user= {user}/>
                ))}
            </div>
        )
    }
}
const userStyle={
    display: 'grid',
    alignItem:'center'
  
}

export default Users
