/**
 * Created by limuzi on 2017/6/1.
 */
import React from 'react'
import {render} from 'react-dom'

import {browserHistory, Router, Route} from 'react-router'

import App from './jsx/App'
import Sale from './jsx/sale'

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/sale' component={Sale} />
        </Route>
    </Router>,
    document.getElementById('root')
)
