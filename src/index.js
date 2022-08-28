import reportWebVitals from "./reportWebVitals";
import state, {coolBack} from "./redux/state";
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>
    );
}
rerenderEntireTree(state)
coolBack(rerenderEntireTree)

    reportWebVitals();