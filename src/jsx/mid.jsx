import React from 'react'

import '../scss/list.css'

export default class List extends React.Component {
    state = {
        list1: '已购内容',
        list2: '我的live',
        list3: '我的书架',
        list4: '我的值乎',
        list5: '我的余额',
        list6: '我的礼券'
    }

    render() {
        return (
            <div className="top">
                <div className="list">
                    <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/yigoumai.png"></img>
                    <span>{this.state.list1}</span>
                    <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                </div>
                <div className="list">
                    <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/live.png"></img>
                    <span>{this.state.list2}</span>
                    <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                </div>
                <div className="list">
                    <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/shujia.png"></img>
                    <span>{this.state.list3}</span>
                    <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                </div>
                <div className="list">
                    <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/zhi.png"></img>
                    <span>{this.state.list4}</span>
                    <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                </div>
                <div className="list">
                    <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/yue.png"></img>
                    <span>{this.state.list5}</span>
                    <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                </div>
                <div className="list">
                    <img className="logo" width={30} src="http://oqjgod7s1.bkt.clouddn.com/liquan.png"></img>
                    <span>{this.state.list6}</span>
                    <img className="right" width={20} src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"></img>
                </div>
            </div>
        )

    }
}