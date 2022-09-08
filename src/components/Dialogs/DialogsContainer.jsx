import React from "react";
import s from '../Dialogs/Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messeges";
import {addMessageActionCreator, updateNewMessagesActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState()

    let AddMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessagesActionCreator(text))
    }
    return <Dialogs
        updateNewMessagesText={onMessageChange}
        SendMessege={AddMessage}
        dialogsPage={state.dialogsPage}
    />
}

export default DialogsContainer