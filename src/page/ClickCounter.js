/**
 * Created by limuzi on 2017/8/29.
 */
import React from 'react'

export default class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
        this.onClickBtn = this.onClickBtn.bind(this)
        this.state = {count: 0}
    }

    onClickBtn() {
        console.log(1)
        this.setState({count: this.state.count++})
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickBtn}>Click Me</button>
                <div>
                    click count:{this.state.count}
                </div>
            </div>
        )

    }
}