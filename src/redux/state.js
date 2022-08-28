let rerenderEntireTree = () => {

}

let state = {
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
}
export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}
export const addMessage = () => {
    let newMessage = {
        id: state.dialogsPage.messages.length + 1,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree()
}
export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree()
}
export const coolBack = (observer) => {
    rerenderEntireTree = observer
}
    export default state
