import React, { Component } from 'react';
import {C} from './parser';

import './SearchResults.css';
import Star from './star-coloured.svg';
import NoStar from './star-uncoloured.svg';

class SearchResults extends Component {
  propTypes: {
    farm: React.PropTypes.object,
    width: React.PropTypes.string,
  }

  renderRating() {
    const {rating} = this.props.farm;
    return (<div className="Farm-Rating">
      {[...Array(rating)].map((e, i) =>
        <img className="Star Star-Filled" src={Star} key={'star-' + i} alt="" />
      )}
      {[...Array(C.MAX_STARS - rating)].map((e, i) =>
        <img className="Star" src={NoStar} key={'nostar-' + i} alt="" />
      )}
    </div>);
  }

  render() {
    const {width, farm} = this.props;
    const {name, image, rating} = farm;
    return (
      <div className="Search-Results" style={{width}}>
        {name &&
          <h1 className="Farm-Name">{name}</h1>}
        {image &&
          <img className="Farm-Image" src={image} alt={name} />}
        {rating && this.renderRating()}
      </div>
    );
  }
}

export default SearchResults;
