import React from "react";
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>

        <NavLink to={'/dialogs/' + props.id} className={s.dialogLink}>
            <img src='https://pbs.twimg.com/media/FHNYwsDXoAgslb7.jpg'/>
            {props.name}
        </NavLink>
    </div>}

export default DialogsItem