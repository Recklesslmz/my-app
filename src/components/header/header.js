import React from 'react'
import '../../scss/header.css'

export default class Header extends React.Component {
    render() {

        return (
            <div className='header'>
                <div className="avatar"><img src='http://oo8hzqd0f.bkt.clouddn.com/WechatIMG76.png'/></div>
                <div className="name">
                    <div className="nickName">大骨米线</div>
                    <div className="fansNum">666粉丝</div>
                </div>
                <div className="right">
                    <img src="http://oqjgod7s1.bkt.clouddn.com/rightA.png"/>
                </div>
            </div>

        )
    }
}
