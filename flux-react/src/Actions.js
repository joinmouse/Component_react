import * as ActionTypes from './ActionTypes.js'
import Dispatcher from './Dispatcher.js'


//导出两个action构造函数:increment、decrement
/*
* 当两个函数被调用的时候，创造了对应的action对象
* 同时立即通过Dispatcher.dispatch函数分发出去了
*/
export const increment = (counterCaption) => {
  Dispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  })
}

export const decrement = (counterCaption) => {
  Dispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  })
}