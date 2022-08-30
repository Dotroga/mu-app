import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState())
store.coolBack(rerenderEntireTree)

reportWebVitals();