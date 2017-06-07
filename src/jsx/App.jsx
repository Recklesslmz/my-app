import React from 'react'
import '../scss/index.scss'

import Header from './header'
import List from './list'
import Mid from './mid'

export default class App extends React.Component{

  render(){
    return(
       <div>
         <Header/>
         <List/>
         <Mid/>
       </div>
    )
  }
}
