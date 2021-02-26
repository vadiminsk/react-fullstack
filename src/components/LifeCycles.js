import React, { Component } from 'react';

export class LifeCycles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: '',
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

  render() {
    console.log('3 - render');
    return <div>Life cycles</div>;
  }
}

export default LifeCycles;
