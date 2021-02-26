import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LifeCycles from './components/LifeCycles';
import NewsList from './components/NewsList';
import JSON from './db.json';
import './style.css';

class App extends Component {
  state = {
    news: JSON,
    filtered: JSON,
    footerText: 'I am a footer',
    active: true,
  };

  getKeywords = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1;
    });

    this.setState({
      filtered, // filtered: filtered
    });
  };

  render() {
    const { filtered, footerText, active } = this.state;
    return (
      <React.Fragment>
        <Header keywords={this.getKeywords} />
        <NewsList news={filtered}>
          <h2>Children</h2>
        </NewsList>
        <Footer footerText={footerText} />
        {active ? <LifeCycles /> : null}
        <button onClick={() => this.setState({ active: !active })}>
          Action
        </button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
