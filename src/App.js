import React from "react";
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import News from "./components/News/News";
import s from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Nav/>
                <div className={s.content}>
                    <Routes>
                        <Route path='/profile' element={<Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}/>
                        <Route path='/dialogs' element={<Dialogs
                            dialogsPage={props.state.dialogsPage}
                            addMessage={props.addMessage}
                            updateNewMessageText={props.updateNewMessageText}
                        />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/Settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;

