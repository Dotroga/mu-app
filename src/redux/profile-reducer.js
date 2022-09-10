let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 35},
        {id: 2, message: 'it\'s my first post', likeCount: 72},
        {id: 3, message: 'Today is 17 August and I am studying the React', likeCount: 17}],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {
    switch  (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case 'UPDATE_NEW_POST_TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    }
}

export default profileReducer