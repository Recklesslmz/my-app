import React from 'react';
import ReactDOM from 'react-dom';
import {Router,hashHistory} from 'react-router'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import routes from './routes'

import ResetContent from './content'

class Board extends React.Component {
    render() {
        return (
            <ResetContent></ResetContent>
        )
    }


}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
