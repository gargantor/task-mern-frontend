import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store} from './App/store';
import App from "./App";
import './index.css';
import axios from "axios";

const container = document.getElementById('root');
const root = createRoot(container);
axios.defaults.baseURL = 'https://taskmernbackend1-vcx6jfnr.b4a.run/'

root.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>

)