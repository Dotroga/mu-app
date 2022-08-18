import React from "react";
import s from '../Dialogs/Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi!
                </div>
                <div className={s.message}>
                    You're going to collect the valve.
                </div>
                <div className={s.message}>
                    Put the food to warm up!
                </div>
            </div>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Sergei
                </div>
                <div className={s.dialog}>
                    Evgeniy
                </div>
                <div className={s.dialog}>
                    Vladimir
                </div>
                <div className={s.dialog}>
                    ALeksndr
                </div>
                <div className={s.dialog}>
                    Shura
                </div>
                <div className={s.dialog}>
                    Kachka
                </div>
                <div className={s.dialog}>
                    Boss
                </div>
            </div>
        </div>)
}

export default Dialogs