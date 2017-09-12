/**
 * Created by limuzi on 2017/9/12.
 */
import {INCREMENT, DECREMENT} from 'actionTypes'
import AppDispatcher from 'appDispatcher'

export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type: INCREMENT,
        counterCaption: counterCaption
    })

}

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: DECREMENT,
        counterCaption: counterCaption
    })
}