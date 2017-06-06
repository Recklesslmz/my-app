import React from 'react'
import '../scss/index.css'
export default class Header extends React.Component{
  render(){
    return(
      <div className='homePage'>
        <div className='avatar'><img src='http://om10u3y7b.bkt.clouddn.com/WechatIMG830.jpeg'></img></div>
        <div className='name'>
          <div>李木子</div>
          <div>查看个人主页或编辑界面啊啊啊啊</div>
        </div>
      </div>
    )
  }
}
