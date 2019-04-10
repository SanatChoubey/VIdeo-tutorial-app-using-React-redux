import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter ,Route} from 'react-router-dom';
import Header from './header';
import Login from'./Login';
import {Provider} from 'react-redux'
import {applyMiddleware,createStore} from 'redux'
import promiseMiddleware from 'redux-promise'
import rootreducer from './reducer'
import Video from './video'


var createStorewithmiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={createStorewithmiddleware(rootreducer)}>
<div>
<Header/>

    <BrowserRouter>
       <Route  exact path ='/' component ={App}  />
       <Route exact path='/Login' component={Login}/>
       <Route exact path= '/video'component={Video}/>
    </BrowserRouter>
  </div>
  </Provider>, document.getElementById('root'));


serviceWorker.unregister();
