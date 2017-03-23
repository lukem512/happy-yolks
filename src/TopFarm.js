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
        <div className="Top-Farm-Header">
          <h3>Our top farm:</h3>
        </div>
        <div className="Top-Farm-Main">
          {name &&
            <h2 className="Farm-Name">{name}</h2>}
          {image &&
            <div className="Image-Container">
              <img className="Farm-Image" src={image} alt={name} />
            </div>}
          {description &&
          <p>{description}</p>}
        </div>
      </div>
    );
  }
}

export default TopFarm;
