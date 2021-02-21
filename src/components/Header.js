import React, { Component } from 'react';

class Header extends Component {
  state = {
    value: '',
    count: 0,
  };

  inputChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addOne() {
    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <header>
        <div className='logo'>Logo</div>
        <input onChange={this.inputChangeHandler} />
        <div>{this.state.value}</div>
        <div>{this.state.count}</div>
        <button onClick={() => this.addOne()}>Add one</button>
      </header>
    );
  }
}

export default Header;
