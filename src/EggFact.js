import React, { Component } from 'react';
import {eggFacts} from './eggFacts.js'
import './EggFact.css';

class EggFact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factNumber: Math.floor(Math.random()*eggFacts.length)
    };
  }

  // propTypes: {
  // }

  render() {
    const {factNumber} = this.state;
    return (
      <div className="Egg-Fact">
        <div className="Egg-Fact-Header">
          <h1>Egg fact #{factNumber}:</h1>
        </div>
        <div className="Egg-Fact-Main">
          <p>{eggFacts[factNumber - 1]}</p>
          {description &&
          <p>{description}</p>}
        </div>
      </div>

      <div className="Egg-Fact">
        <h1>Egg fact #{factNumber}:</h1>
        <p>{eggFacts[factNumber - 1]}</p>
      </div>
    );
  }
}

export default EggFact;
