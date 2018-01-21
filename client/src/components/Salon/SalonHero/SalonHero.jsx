import React, { Component } from 'react';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import * as styles from './SalonHero.less';

@CSSModules(styles)
export default class SalonHero extends Component {
  render() {
    const { salon } = this.props;
    return (
      <div styleName="salon-hero">
        <div styleName="store-info">
          <div>{salon.title}</div>
          <div>
            {_.times(salon.stars, index => {
              return (
                <div
                  key={`filled-star-${index}-${salon.id}`}
                  styleName="filled-star"
                />
              );
            })}
            {_.times(5 - salon.stars, index => {
              return (
                <div
                  key={`empty-star-${index}-${salon.id}`}
                  styleName="empty-star"
                />
              );
            })}
            <div styleName="number-rated">{`(${salon.numberOfRatings})`}</div>
          </div>
        </div>
      </div>
    );
  }
}
