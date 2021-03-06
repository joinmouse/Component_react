import React, { Component, PropTypes } from 'react';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {
  constructor(props) {
    super(props);

    //通过bind方法让当前实例中的onClickIncrementButton、
    //onClickDecrementButton函数被调用的时候，this始终指向当前实例
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.state = {
      count: props.initValue
    }
  }

/*
  componentWillReceiveProps(nextProps) {
    console.log('enter componentWillReceiveProps ' + this.props.caption)
  }

  componentWillMount() {
    console.log('enter componentWillMount ' + this.props.caption);
  }

  componentDidMount() {
    console.log('enter componentDidMount ' + this.props.caption);
  }
*/

  onClickIncrementButton() {
    this.setState({count: this.state.count + 1})
  }

  onClickDecrementButton() {
    this.setState({count: this.state.count - 1});
  }

  /*
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
  }*/

  render() {
    console.log('enter render ' + this.props.caption);
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

Counter.defaultProps = {
  initValue: 0
};

export default Counter;