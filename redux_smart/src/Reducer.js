import * as ActionTypes from './ActionTypes.js'


export default (state, action) => {
  const {counterCaption} = action

  switch(action.type) {
    case ActionTypes.INCREMENT:
      return {...state, [counterCaption]:state[counterCaption]+1}
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]:state[counterCaption]-1}
    default:
      return state
  }
}

/* return {...state, [counterCaption]:state[counterCaption]+1}等同于
 * 
 * 创造一个newState完全copy了state,通过对newState的修改避免了对state的修改(使用扩展操作符比较简洁)
 * const newState = Object.assign({}, state)
 * newState[counterCaption] ++ 
 * return newState
*/
