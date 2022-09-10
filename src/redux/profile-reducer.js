let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 35},
        {id: 2, message: 'it\'s my first post', likeCount: 72},
        {id: 3, message: 'Today is 17 August and I am studying the React', likeCount: 17}],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch  (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case 'UPDATE_NEW_POST_TEXT':
            return {
                ...state,
                newPostText: action.newText
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