
let initialState = {
    dialogs: [
        {id: 0, name: 'Igor'},
        {id: 1, name: 'Evgeniy'},
        {id: 2, name: 'Volodya'},
        {id: 3, name: 'Boss'},
        {id: 4, name: 'ALeksandr'},
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

const dialogsReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            let stateCopy = {...state}
            stateCopy.dialogs = [...state.dialogs]
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case 'UPDATE_NEW_MESSAGE_TEXT': {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessage
            return stateCopy
        }
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {type: 'ADD_MESSAGE'}
}
export const updateNewMessagesActionCreator = (text) => {
    return {type: 'UPDATE_NEW_MESSAGE_TEXT', newMessage:text}
}

export default dialogsReducer