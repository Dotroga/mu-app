import React from "react";
import s from './UsersList.modules.css'



let UsersList = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    followed: false,
                    photoUrl: '',
                    name: 'Vasili',
                    surname: 'Karpenkin',
                    status: 'Studying react',
                    location: {
                        country: 'Belarus',
                        city: 'Gomel'
                    },
                    age: 25
                },
                {
                    id: 2,
                    followed: true,
                    photoUrl: '',
                    name: 'Anna',
                    surname: 'Karpenkina',
                    status: 'Young mother',
                    location: {
                        country: 'Belarus',
                        city: 'Gomel'
                    },
                    age: 31
                },
                {
                    id: 3,
                    followed: true,
                    photoUrl: '',
                    name: 'Eseniya',
                    surname: 'Karpenkina',
                    status: 'happy',
                    location: {
                        country: 'Belarus',
                        city: 'Gomel'
                    },
                    age: 1
                },
                {
                    id: 4,
                    followed: false,
                    name: 'Igor',
                    surname: 'Kondratenko',
                    status: 'Studying Kotlin',
                    location: {
                        country: 'Belarus',
                        city: 'Gomel'
                    },
                    age: 25
                }
            ]
        )
    }
    return <div className={s.container}>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src=""/>
                </div>
                <div>
                    {u.followed
                        ? <button  onClick={() => {props.follow(u.id)}} >Follow</button>
                        : <button  onClick={() => {props.unfollow(u.id)}}>Unfollow</button>}
                </div>
                <div>{u.name} {u.surname}</div>
                <div>{u.status}</div>
                <div>{u.age} лет</div>
                <div></div>
            </div>)
        }
    </div>
}

export default UsersList