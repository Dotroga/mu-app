import React from "react";
import s from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return  <div className={s.message}>{props.message}</div>
}

const DialogsItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

let dialogsData = [
    {id: 0 , name: 'Igor'},
    {id: 1 , name: 'Evgeniy'},
    {id: 2 , name: 'Volodya'},
    {id: 3 , name: 'Boss'},
    {id: 4 , name: 'ALeksndr'},
    {id: 5 , name: 'Shura'},
    {id: 6 , name: 'Kachka'},
    {id: 7 , name: 'Sergei'}
]

let messagesData = [
    {id: 0 , message: 'Hi!'},
    {id: 1 , message: 'Where are you from'},
    {id: 2 , message: 'How are you?'},
    {id: 3 , message: 'I started studying mobile development !'},
    {id: 4 , message: "Cool, and I'm currently studying react, doing a big project"}
]

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />

            </div>
            <div className={s.dialogsItem}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogsItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                <DialogsItem name={dialogsData[6].name} id={dialogsData[6].id}/>
                <DialogsItem name={dialogsData[7].name} id={dialogsData[7].id}/>
            </div>
        </div>)
}

export default Dialogs