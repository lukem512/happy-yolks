import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Happy Yolks</h2>
        </div>
        <div className="App-intro">
          Search for an egg seller or an individual farm by typing the name on
          the box below. You can also search using the codes on the eggs.
        </div>
        <Search inputText="Search for 'Happy Eggs'?"
          inputDescription="Enter an egg seller or a code (i.e. 1-UK-54321)"
          buttonText="Search" buttonHandler={this.handleSearch}/>
        <div className="App-footer">
          <p>Created by Luke Mitchell, 2017.</p>
        </div>
      </div>
    );
  }

  handleSearch(e, value) {
    e.preventDefault();
    if (value) {
      // TODO - perform the search
      console.log(value)
    }
  }
}

export default App;
