import Dispatcher from '../Dispatcher'
import * as ActionTypes from '../ActionTypes.js'
import { EventEmitter } from 'events'

import CounterStore from './CounterStore'

function computeSummary(counterValues) {
  let summary = 0
  for (const key in counterValues) {
    if(counterValues.hasOwnProperty(key)){
      summary += counterValues[key]
    }
  }
  return summary
}


const CHANGE_EVENT = 'changed'
//提供getSummary函数让其他其他模块获得当前计数值的总和
const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary: function() {
    return computeSummary(CounterStore.getCounterValues())
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
})

SummaryStore.dispatchToken = Dispatcher.register((action) => {
  if((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)) {
    Dispatcher.waitFor([CounterStore.dispatchToken])
    SummaryStore.emitChange()
  }
})

export default SummaryStore