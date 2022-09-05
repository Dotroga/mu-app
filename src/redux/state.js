let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 35},
                {id: 2, message: 'it\'s my first post', likeCount: 72},
                {id: 3, message: 'Today is 17 August and I am studying the React', likeCount: 17}],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 0, name: 'Igor'},
                {id: 1, name: 'Evgeniy'},
                {id: 2, name: 'Volodya'},
                {id: 3, name: 'Boss'},
                {id: 4, name: 'ALeksndr'},
                {id: 5, name: 'Shura'},
                {id: 6, name: 'Kachka'},
                {id: 7, name: 'Sergei'}],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Where are you from'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'I started studying mobile development !'},
                {id: 5, message: "Cool, and I'm currently studying react, doing a big project"}],
            newMessageText: 'it-kamasutra.com'
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {

    },
    _addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _addMessage() {
        let newMessage = {
            id: this._state.dialogsPage.messages.length + 1,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    _updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage
        this._callSubscriber(this._state)
    },
    coolBack(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD_MESSAGE') {
            let newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
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
export const addMessageActionCreator = () => {
    return {type: 'ADD_MESSAGE'}
}
export const updateNewMessagesActionCreator = (text) => {
    return {type: 'UPDATE_NEW_MESSAGE_TEXT', newMessage:text}
}

window.store = store
export default store
