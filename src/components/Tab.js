/**
 * Created by limuzi on 2017/9/7.
 */
import React, {Component}from 'react'
import '../scss/Tab.css'
class Tab extends Component {
    render() {
        return (
            <div className="Tab">
                <div className="icon">
                    <img src="http://oqjgod7s1.bkt.clouddn.com/fangzi.png"/>
                </div>
                <div className="icon">
                    <img src="http://oqjgod7s1.bkt.clouddn.com/xingqiu.png"/>
                </div>
                <div className="icon">
                    <img src="http://oqjgod7s1.bkt.clouddn.com/lingdang.png"/>
                </div>
                <div className="icon">
                    <img src="http://oqjgod7s1.bkt.clouddn.com/gerenzhongxin.png"/>
                </div>
            </div>
        )
    }
}

export default Tab