let initialState = {
    users: [/*
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
        },*/
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId })
export const unfollowAC = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users) => ({type: 'SET_USERS', users})

export default usersReducer