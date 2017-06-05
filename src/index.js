import React from 'react';
import ReactDOM from 'react-dom';
// import {Router,hashHistory} from 'react-router'
import App from './App';
import Home from './jsx/home'
import * as test from './test'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// const app = document.querySelector("#root")
// app.innerHTML='hahah'
console.log(test)
ReactDOM.render(<Home name='lmz'/>, document.getElementById('root'));
registerServiceWorker();
