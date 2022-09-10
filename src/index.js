import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}
rerenderEntireTree()


reportWebVitals();