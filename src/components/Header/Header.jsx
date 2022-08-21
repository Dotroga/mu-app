import React from "react";
import s from './Header.module.css'
import logo from '../../img/logoHeader.png'

const Header = () => {
    return <header className={s.header}>
        <ul>
            <li>
                <img src={logo}></img>
            </li>
            <li>
                My social network
            </li>
        </ul>
    </header>
}

export default Header