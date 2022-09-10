import React from "react";
import s from '../Dialogs/Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messeges";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Messages message={m.message} key={m.id}/>)
    let newMessageElement = React.createRef()

    let onSendMessage = () => {
        props.sendMessage()
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessagesText(text)
    }
    return <div className={s.dialogs}>
        <div className={s.messages}>
            {messagesElements}
            <textarea
                ref={newMessageElement}
                value={props.dialogsPage.newMessageText}
                onChange={onMessageChange}
            ></textarea>
            <button onClick={onSendMessage}>To send</button>
        </div>
        <div className={s.line}></div>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
    </div>
}

export default Dialogs