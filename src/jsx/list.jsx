import React from 'react'
import {Link} from 'react-router'

import '../scss/list.css'

export default class List extends React.Component {
    state = {
        list1: '我的创作',
        list2: '我的收藏',
        list3: '我的关注'
    }

    render() {
        return (
            <div className="top">
                <div className="list">
                    <Link to="/">
                    <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/chuang.png"></img>
                    <span>{this.state.list1}</span>
                    <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                    </Link>
                </div>
                <div className="list">
                    <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/shoucang.png"></img>
                    <span>{this.state.list2}</span>
                    <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                </div>
                <div className="list">
                    <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/guanzhu.png"></img>
                    <span>{this.state.list3}</span>
                    <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                </div>
            </div>
        )

    }
}