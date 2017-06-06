import React from 'react';
import ReactDOM from 'react-dom';
// import {Router,hashHistory} from 'react-router'
// import App from './App';
import App from './jsx/App'
import * as test from './test'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import App from "./App";
const app = document.querySelector("body")
app.style.background='#ebeef0'
// app.innerHTML='hahah'
console.log(test)
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
