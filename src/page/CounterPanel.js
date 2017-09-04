/**
 * Created by limuzi on 2017/8/31.
 */
import React, {Component, PropTypes} from 'react'
import Counter from './Counter'

class CounterPanel extends Component {

    render() {
        // console.log('enter ControlPanel render');
        return (
            <div>
                <Counter caption="First"/>
                <Counter caption="Second" initValue={10}/>
                <Counter caption="Third" name="lalala" initValue={20}/>
                <Counter caption="Lmz" initValue={30}/>
            </div>
        )
    }
}

export default CounterPanel