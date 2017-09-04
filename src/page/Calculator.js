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
        // console.log(this.state.isResult)
        // if (this.state.isResult) {
        //     this.setState({num: 0})
        //     this.setState({isPlus: false})
        //     this.setState({arrayFirst: []})
        //     this.setState({arraySecond: []})
        // }
        let arrayFirst = this.state.arrayFirst
        let arraySecond = this.state.arraySecond
        arrayFirst.push(index)
        arraySecond.push(index)
        console.log(arrayFirst)
        this.setState({arrayFirst: arrayFirst})
        this.setState({arraySecond: arraySecond})
        let a = this.state.arrayFirst
        let b = a.toString().replace(/,/g, "")
        let c = this.state.arraySecond
        let d = b.toString().replace(/,/g, "")
        if (this.state.isPlus) {
            this.setState({second: d})
            this.setState({num: this.state.first + this.state.symbol + d.substring(this.state.first.length)})
        } else {
            console.log(b)
            this.setState({first: b})
            this.setState({num: b})
        }

    }

    //运算符
    bindCalculator(index) {
        this.setState({isPlus: true})
        this.setState({symbol: index})
        this.setState({num: this.state.first + index})
    }

    //归零
    bindCalculatorAc() {
        this.setState({num: 0})
        this.setState({isPlus: false})
        this.setState({symbol: ''})
        this.setState({first: 0})
        this.setState({second: 0})
        this.setState({result: ''})
    }

    //运算
    bindCalculatorRes() {
        this.setState({isResult: true})
        arrayFirst = []
        arraySecond = []
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
                    <div className="key" onClick={this.bindCalculatorAc.bind(this)}>AC</div>
                </div>
            </div>
        )
    }
}
