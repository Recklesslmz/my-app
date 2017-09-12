/**
 * Created by limuzi on 2017/8/31.
 */
import React, {Component, PropTypes} from 'react'
import Counter from './Counter'

class CounterPanel extends Component {
    constructor(props) {
        super(props)
        this.onCounterUpdate = this.onCounterUpdate.bind(this)
        this.initValues = [0, 10, 20]
        const initSum = this.initValues.reduce((a, b) => a + b, 0)
        this.state = {
            sum: initSum
        }
    }

    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue
        console.log(this.state.sum + valueChange)
        this.setState({sum: this.state.sum + valueChange})

    }

    render() {
        return (
            <div>
                <Counter onUpdate={this.onCounterUpdate} caption="First"/>
                <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={10}/>
                <Counter onUpdate={this.onCounterUpdate} caption="Third" name="lalala" initValue={20}/>
                <div>当前分数总和：{this.state.sum}</div>
            </div>
        )
    }
}

export default CounterPanel