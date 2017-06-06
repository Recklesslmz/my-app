import React from 'react'
import '../scss/index.scss'

export default class Home extends React.Component {
  state = {
    switch:0,
    name:this.props.name1
  }
  showName = () => {
    const {name1,name2} = this.props
    if(this.state.switch == 0){
        console.log(name1)
        this.setState({
          switch:1,
          name:name2
        })
    }else {
      console.log(name2)
      this.setState({
        switch:0,
        name:name1
      })
    }
  }
  clickHander=()=>{
    console.log(this.refs)
  }
  callBack = (elem) =>{
      console.log(elem)
  }
  componentDidMount(props){
    console.log(props)

  }
  render() {
    return (
      <div onClick={this.clickHander}>{this.state.name}
          <div ref='hello' className='hello'>Hello</div>
          <div ref='react' className='react'>React</div>
          <div ref={this.callBack} className='worlds'>World</div>
      </div>
    )

  }

}
