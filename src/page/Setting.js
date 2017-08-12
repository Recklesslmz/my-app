/**
 * Created by limuzi on 2017/8/12.
 */
import React from 'react'
import {Link} from 'react-router-dom'

export default class Setting extends React.Component {
    render() {
        return (
            <div>
                <div><Link to="/MemberInfo">个人中心</Link></div>
            </div>
        )
    }
}