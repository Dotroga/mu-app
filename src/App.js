import React from "react";
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import News from "./components/News/News";
import s from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersListContainer from "./components/UsersList/UsersListContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Nav/>
                <div className={s.content}>
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/users' element={<UsersListContainer/>}/>
                        <Route path='/Settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;

