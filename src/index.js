import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState())
store.coolBack(rerenderEntireTree)

reportWebVitals();