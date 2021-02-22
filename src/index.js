import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';
import JSON from './db.json';
import './style.css';

class App extends Component {
  state = {
    news: JSON,
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <NewsList news={this.state.news} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
