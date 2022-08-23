import React from "react";
import s from '../Dialogs/Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messeges";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( d => <DialogsItem name={d.name} id={d.id}/> )
    let messagesElements = props.state.messages.map(m => <Messages message={m.message} />)
    return <div className={s.dialogs}>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>
        </div>
}

export default Dialogs