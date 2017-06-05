import React from 'react'

// const Home = (props) => {
//     return (
//         <div>能成功嘛{props.name}</div>
//     )
//
//
// }
//
//
// export default Home

export default class Home extends React.Component {
    showName = (props) => {
        console.log(props.name)
    }
    render() {
        return (
            <div onClick={this.showName}>我是李木子</div>
        )

    }

}