/**
 * Created by limuzi on 2017/9/12.
 */
import AppDispatcher from '../appDispatcher'
import {DECREMENT, INCREMENT} from '../actionTypes'

import {EventEmitter} from 'events';

const CHANGE_EVENT = 'CHANGED'

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 30
}

const CounterStore = Object.assign({}, EventEmitter.PropTypes, {
    getCounterValues(){
        return counterValues
    },
    emitChange(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback)
    }
})