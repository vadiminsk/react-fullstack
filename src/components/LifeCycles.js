import React, { Component } from 'react';

export class LifeCycles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Vadim',
    };
    console.log('1- Constructor');
  }

  static getDerivedStateFromProps() {
    console.log('2 - getDerived');
    return null;
  }

  componentDidMount() {
    console.log('4');
  }

  componentWillUnmount() {
    console.log('5');
  }

  shouldComponentUpdate(nextProps, prevState) {
    console.log('method - shouldComponentUpdate');
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('method - componentDidUpdate');
  }

  render() {
    console.log('3 - render');
    return (
      <div>
        <div onClick={() => this.setState({ name: 'David' })}>Change name</div>
      </div>
    );
  }
}

export default LifeCycles;
