/**
 * Created by limuzi on 2017/6/1.
 */
import React from 'react'
import {Router, Route, Link} from 'react-router'

import {Detail} from './detail'
import {Button} from './button'
import {Content} from './content'

const routes = (
    <Route>
        <Route path="detail" component={Detail}/>
    </Route>
);

export default routes
