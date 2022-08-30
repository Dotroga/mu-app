import React from "react";
import s from './ProfileInfo.module.css'
import picture from '../../../img/profilePicture.jpg'

const ProfileInfo = () => {
    return <div>
        <img className={s.img} src={picture}></img>
        <div>
            ava + descriptions
        </div>
    </div>
}

export default ProfileInfo
