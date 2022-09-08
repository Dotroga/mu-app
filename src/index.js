import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals();