import React from "react";
import s from './UsersList.modules.css'
import * as axios from "axios";
import userPhoto from './../../img/user.png'

class UsersList extends React.Component {
    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <div className={s.container}>
            {
                this.props.users.map(u => <div key={u.id}>
                    <img  src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    <div>
                        {u.followed
                            ? <button  onClick={() => {this.props.follow(u.id)}} >Follow</button>
                            : <button  onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>}
                    </div>
                    <div>{u.name} {u.surname}</div>
                    <div>{u.status}</div>
                    <div>{u.age} лет</div>
                    <div></div>
                </div>)
            }
        </div>
    }
}


export default UsersList