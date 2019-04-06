import React from 'react';
import ReactDOM from 'react-dom';
import { Route , Switch } from 'react-router-dom'
import App from './App';
import '@Libs'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@Store'

import MainContainer from '@Pages/main/MainContainer'
import Detail from '@Pages/detail/DetailContainer'
import Sign from '@Pages/sign/index'
import Order from '@Pages/order/OrderContainer'

import '@Libs' 
ReactDOM.render(
    <Provider store = {store} >
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path='/detail' component={Detail}/>
                    <Route path='/sign' component={Sign}/>
                    <Route path='/order' component={Order}/>
                    <Route path='/' component={MainContainer}/>
                </Switch>
            </App>
        </BrowserRouter>   
    </Provider> 
, document.getElementById('root'));

serviceWorker.unregister();
