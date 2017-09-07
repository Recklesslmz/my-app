/**
 * Created by limuzi on 2017/9/7.
 */
import React, {Component} from 'react'
import Header from '../components/header/header'
import Tab from '../components/Tab'
import '../scss/Info.css'

class MemberInfo extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const menuItems = [
            {name: '设置', icon: 'http://oqjgod7s1.bkt.clouddn.com/shezhi.png'},
            {name: '夜间模式', icon: 'http://oqjgod7s1.bkt.clouddn.com/yejianmoshi.png'},
            {name: '我的收藏', icon: 'http://oqjgod7s1.bkt.clouddn.com/wodeshoucang.png'},
            {name: '扫一扫', icon: 'http://oqjgod7s1.bkt.clouddn.com/saoyisao.png'},
            {name: '草稿箱', icon: 'http://oqjgod7s1.bkt.clouddn.com/caogao.png'},
            {name: '客服中心', icon: 'http://oqjgod7s1.bkt.clouddn.com/kefu.png'},
            {name: '浏览记录', icon: 'http://oqjgod7s1.bkt.clouddn.com/liulan.png'},
            {name: '每日福利', icon: 'http://oqjgod7s1.bkt.clouddn.com/liwu.png'},
        ]
        const list = menuItems.map((item, i) => {
                console.log(item)
                if (item.name === '夜间模式' || item.name === '设置' || item.name === '浏览记录')
                    return <div className='menuListTop' key={i}><img className="icon"
                                                                     src={item.icon}/><span>{item.name}</span></div>
                return <div className='menuList' key={i}><img className="icon" src={item.icon}/><span>{item.name}</span>
                </div>
            }
        )
        return (
            <div>
                <Header/>
                {list}
                <Tab/>
            </div>
        )
    }
}

export default MemberInfo
