import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


import ResetContent from './content'

class Board extends React.Component {
    render() {
        return (
            <ResetContent></ResetContent>
        )
    }



}


ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();
