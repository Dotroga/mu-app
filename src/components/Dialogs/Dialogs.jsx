import React from "react";
import s from '../Dialogs/Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messeges";
import {addMessageActionCreator, updateNewMessagesActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Messages message={m.message}/>)
    let newMessageElement = React.createRef()
    let AddMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessagesActionCreator(text))
    }
    return <div className={s.dialogs}>
        <div className={s.messages}>
            {messagesElements}
            <textarea
                ref={newMessageElement}
                value={props.dialogsPage.newMessageText}
                onChange={onMessageChange}
            ></textarea>
            <button onClick={AddMessage}>To send</button>
        </div>
        <div className={s.line}></div>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
    </div>
}

export default Dialogs