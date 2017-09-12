/**
 * Created by limuzi on 2017/8/31.
 */
import React, {Component, PropTypes} from 'react'
const buttonStyle = {
    margin: '10px'
}
class Counter extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
        this.state = {
            count: props.initValue
        }
    }

    //The Component Lifecycle
    componentWillReceiveProps(nextProps) {
        console.log('enter componentWillReceiveProps ' + this.props.caption)
    }

    componentWillMount() {
        console.log('enter componentWillMount ' + this.props.caption);

    }

    componentDidMount() {
        console.log('enter componentDidMount ' + this.props.caption);
    }

    onClickIncrementButton() {

        // this.setState({count: this.state.count + 1});
        this.updateCount(true)
    }

    onClickDecrementButton() {
        if (this.state.count === 0) return
        this.updateCount(false)
        // this.setState({count: this.state.count - 1});
    }

    updateCount(isIncrement) {
        const previousValue = this.state.count
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1
        this.setState({count: newValue})

        this.props.onUpdate(newValue, previousValue)

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps)
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
    }

    render() {
        const {caption, name} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} {name}count: {this.state.count}</span>
            </div>
        )
    }
}
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
}
Counter.defaultProps = {
    initValue: 0,
    name: 'test',
    onUpdate: f => f
}
export default Counter