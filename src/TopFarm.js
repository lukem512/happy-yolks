// Component to display the top farm/farms. May work better to do a featured (random) farm if the farms aren't ranked.

import React, { Component } from 'react';
import {farmData} from './farmData.js';
import './TopFarm.css';

class TopFarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // This currently picks a hard coded farm. Change so it picks the top farm.
      farm: farmData['54321']
    };
  }

  // propTypes: {
  // }

  render() {
    const {farm} = this.state;
    const {name, image, description} = farm;
    return (
      <div className="Top-Farm">
        <h2>Our top farm:</h2>
        {name &&
          <h1 className="Farm-Name">{name}</h1>}
        {image &&
          <img className="Farm-Image" src={image} alt={name} />}
        {description &&
        <p>{description}</p>}
      </div>
    );
  }
}

export default TopFarm;
