import React, { Component } from 'react';

class Header extends Component {
  state = {
    value: '',
    active: false,
  };

  inputChangeHandler = (e) => {
    const inputState = e.target.value ? true : false;
    this.setState({
      active: inputState,
      value: e.target.value,
    });
  };

  render() {
    return (
      <header style={{ background: `${this.state.active ? 'red' : 'blue'} ` }}>
        <div className='logo'>Logo</div>
        <input onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
