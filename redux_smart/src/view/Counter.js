import React, { Component } from 'react'
import PropTypes from 'prop-types'

import store from '../Store'
import * as Actions from '../Actions.js'

const buttonStyle = {
  margin: '18px'
}

class Counter extends Component {
  render() {
    const {caption, onIncrement, onDecrement, value} = this.props
    return (
      <div>
        <button style={buttonStyle} onClick={onIncrement}>+</button>
        <button style={buttonStyle} onClick={onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number
}

class CounterContainer extends Component {
  constructor(props) {
    super(props)

    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onChange = this.onChange.bind(this)
    this.getOwnState = this.getOwnState.bind(this)

    this.state = this.getOwnState()
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    }
  }

  //改变store中状态的唯一方法就是派发action
  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption))
  }
  onDecrement() {
    store.dispatch(Actions.decrement(this.props.caption))
  }
  onChange() {
    this.setState(this.getOwnState())
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
  }
  componentDidMount() {
    store.subscribe(this.onChange)
  }
  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }

  render()　{
    return <Counter caption={this.props.caption} 
      onIncrement={this.onIncrement}
      onDecrement={this.onDecrement}
      value={this.state.value} />
  }
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
}

export default CounterContainer
