import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
    coolBack(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}

window.store = store
export default store
