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

        this.setState({count: this.state.count + 1});
    }

    onClickDecrementButton() {
        if (this.state.count === 0) return
        this.setState({count: this.state.count - 1});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
    }

    render() {
        console.log('enter render ' + this.props.caption);
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
    initValue: PropTypes.number
}
Counter.defaultProps = {
    initValue: 0,
    name: 'test'
}
export default Counter