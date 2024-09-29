import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store, persist_store} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from "react-router-dom";

const app = (<React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persist_store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
</React.StrictMode>);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    app
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
