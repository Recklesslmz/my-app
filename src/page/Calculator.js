/**
 * Created by limuzi on 2017/9/1.
 */
import React, {Component} from 'react'
import '../App.css'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            arrayFirst: [],
            arraySecond: [],
            num: 0,//初始展示数字
            isPlus: false,//是否按下运算符
            symbol: '',//运算符参数
            first: 0,//第一个数字
            second: 0,//第二个数字
            result: '',//结果
            isResult: false//是否运算
        }
    }

    //数字
    bindNum(index) {
        if (this.state.isResult) {
            this.setState({num: 0, isPlus: false, arrayFirst: [], arraySecond: []})
        }
        let arrayFirst = this.state.arrayFirst
        let arraySecond = this.state.arraySecond
        arrayFirst.push(index)
        arraySecond.push(index)
        this.setState({arrayFirst: arrayFirst, arraySecond: arraySecond})
        let a = this.state.arrayFirst
        let b = a.toString().replace(/,/g, "")
        let c = this.state.arraySecond
        let d = b.toString().replace(/,/g, "")
        if (this.state.isPlus) {
            this.setState({second: d, num: this.state.first + this.state.symbol + d.substring(this.state.first.length)})
        } else {
            console.log(b)
            this.setState({first: b, num: b})
        }

    }

    //运算符
    bindCalculator(index) {
        this.setState({isPlus: true, symbol: index, num: this.state.first + index})
    }

    //归零
    bindCalculatorAc() {
        this.setState({
            num: 0,
            isPlus: false,
            symbol: '',
            first: 0,
            second: 0,
            result: '',
            arrayFirst: [],
            arraySecond: []
        })
    }

    //运算
    bindCalculatorRes() {
        this.setState({isResult: true})
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
        const numbers = [9, 8, 7, 4, 5, 6, 1, 2, 3, 0]
        const listItems = numbers.map((number, i) =>
            <div className="keyName" key={i} onClick={() => this.bindNum(number)}>{number}</div>
        )
        const symbols = ['+', '-', '*', '/']
        const symbolItems = symbols.map((symbol, i) =>
            <div className="keyName" key={i} onClick={() => this.bindCalculator(symbol)}>{symbol}</div>
        )
        return (
            <div className='main'>
                <div>
                    <div>{this.state.num}</div>
                    <input value={this.state.num} className="screen" type="text"/>
                </div>
                <div className="keyList">
                    {listItems}
                    {symbolItems}
                    <div className="keyName" onClick={this.bindCalculatorRes.bind(this, '=')}>=</div>
                    <div className="keyName" onClick={this.bindCalculatorAc.bind(this)}>AC</div>
                </div>
            </div>
        )
    }
}
