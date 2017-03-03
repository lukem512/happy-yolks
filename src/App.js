import React, { Component } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';
import parser from './parser';

import './App.css';
import Egg from './egg.svg';
import Shadow from './shadow.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
    };
  }

  render() {
    const {results, clicked} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo">
            <img src={Egg} className="App-logo-egg"
              alt="This is Egbert, a happy egg." />
            <img src={Shadow} className="App-logo-shadow" alt="" />
          </div>
          <h2>Happy Yolks</h2>
        </div>
        <div className="App-intro">
          Search for an egg seller or an individual farm by typing the name in
          the box below. You can also search using the codes on the eggs.
        </div>
        <div className="App-search">
        <Search inputText="Search for 'Happy Eggs'?"
          inputDescription="Enter an egg seller or a code (i.e. 1-UK-54321)"
          buttonText="Search"
          buttonHandler={(e, value) => this.handleSearch(e, value, this)} />
        </div>
        {clicked && !results &&
          <p className="Error">No results found.</p>}
        {results &&
          <SearchResults farm={results} width='70%' />}
        <div className="App-footer">
          <p>Created by Luke Mitchell, 2017.</p>
        </div>
      </div>
    );
  }

  handleSearch(e, value, caller) {
    e.preventDefault();
    if (value) {
      const results = parser(value);
      let state = {results: null, clicked: true};
      if (results) {
        state = {...state, results: {...results}};
      }
      caller.setState(state);
    }
  }
}

export default App;
