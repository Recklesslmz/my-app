/**
 * Created by limuzi on 2017/5/31.
 */
import React from 'react'

import ResetButton from './button'
import Home from './jsx/home'

export default class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {list:[{title:'点我进入编辑模式'}],title:''}
    }
    render(){
        return(
            <div className="contentMain">
             <ResetButton/>
            </div>
        )
    }
}