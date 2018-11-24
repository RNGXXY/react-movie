import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@Libs'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@Store'

import '@Libs' 
ReactDOM.render(
    <Provider store = {store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>   
    </Provider> 
, document.getElementById('root'));

serviceWorker.unregister();
