/**
 * Created by limuzi on 2017/5/31.
 */
import React from 'react'
import {  Router, Route, Link  } from 'react-router'

export default class ResetButton extends React.Component {
    render() {
        return (
            <div className="contentName">
                <button onClick={this.toNext}>点击进入React的世界</button>
            </div>
        )
    }
}
