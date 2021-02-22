import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import NewsList from './components/NewsList';
import JSON from './db.json';
import './style.css';

class App extends Component {
  state = {
    news: JSON,
    footerText: 'I am a footer',
  };
  render() {
    const { news, footerText } = this.state;
    return (
      <React.Fragment>
        <Header />
        <NewsList news={news}>
          <h2>Children</h2>
        </NewsList>
        <Footer footerText={footerText} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
