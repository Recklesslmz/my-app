/**
 * Created by limuzi on 2017/9/1.
 */
import React, {Component} from 'react'
import '../App.css'
let arrayFirst = []
let arraySecond = []
export default class Calculator extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            num: 0,
            isPlus: false,
            symbol: '',
            first: 0,
            second: 0,
            result: ''
        }
    }

    bindNum(index) {
        arrayFirst.push(index)
        arraySecond.push(index)
        let a = arrayFirst
        let b = a.toString().replace(/,/g, "")
        let c = arraySecond
        let d = b.toString().replace(/,/g, "")
        if (this.state.isPlus) {
            this.setState({second: d})
            this.setState({num: this.state.first + this.state.symbol + d.substring(this.state.first.length)})
        } else {
            this.setState({first: b})
            this.setState({num: b})
        }
    }

    bindCalculator(index) {
        this.setState({isPlus: true})
        this.setState({symbol: index})
        this.setState({num: this.state.first + index})
    }

    bindCalculatorRes() {
        const second = parseInt(this.state.second.substr(this.state.first.length))
        switch (this.state.symbol) {
            case '+':
                this.setState({num: parseInt(this.state.first) + second})
                break
            case '-':
                this.setState({num: parseInt(this.state.first) - second})
                break
            case '*':
                this.setState({num: parseInt(this.state.first) * second})
                break
            case '/':
                this.setState({num: parseInt(this.state.first) / second})
                break
        }
    }

    render() {
        return (
            <div className='main'>
                <div>
                    <div>{this.state.num}</div>
                    <input value={this.state.num} className="screen" type="text"/>
                </div>
                <div className="keyList">
                    <div className="key" onClick={this.bindNum.bind(this, 7)}>7</div>
                    <div className="key" onClick={this.bindNum.bind(this, 8)}>8</div>
                    <div className="key" onClick={this.bindNum.bind(this, 9)}>9</div>
                    <div className="key" onClick={this.bindNum.bind(this, 4)}>4</div>
                    <div className="key" onClick={this.bindNum.bind(this, 5)}>5</div>
                    <div className="key" onClick={this.bindNum.bind(this, 6)}>6</div>
                    <div className="key" onClick={this.bindNum.bind(this, 1)}>1</div>
                    <div className="key" onClick={this.bindNum.bind(this, 2)}>2</div>
                    <div className="key" onClick={this.bindNum.bind(this, 3)}>3</div>
                    <div className="key" onClick={this.bindNum.bind(this, 0)}>0</div>
                    <div className="key" onClick={this.bindCalculator.bind(this, '+')}>+</div>
                    <div className="key" onClick={this.bindCalculator.bind(this, '-')}>-</div>
                    <div className="key" onClick={this.bindCalculator.bind(this, '*')}>*</div>
                    <div className="key" onClick={this.bindCalculator.bind(this, '/')}>/</div>
                    <div className="key" onClick={this.bindCalculatorRes.bind(this, '=')}>=</div>
                </div>
            </div>
        )
    }
}
