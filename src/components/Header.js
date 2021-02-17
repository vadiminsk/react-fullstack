import React, { Component } from 'react';

class Header extends Component {
  inputChangeHandler(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <header>
        <div className='logo'>Logo</div>
        <input onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
