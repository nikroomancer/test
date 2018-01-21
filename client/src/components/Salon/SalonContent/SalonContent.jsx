import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import * as styles from './SalonContent.less';

@CSSModules(styles)
export default class SalonContent extends Component {
  renderSalonInfo() {
    const { salon } = this.props;
    const date = new Date();
    const today = date.getDay();
    return [
      <ul key="salong-info-list">
        <li styleName="pin">{salon.address}</li>
        <li styleName="clock">{salon.openingHours[today]}</li>
        <li styleName="phone">{salon.telephone}</li>
        <li styleName="web">{salon.website}</li>
      </ul>,
      <div key="salon-content" styleName="salon-content">
        {salon.content}
      </div>
    ];
  }

  renderSalonSchedule() {
    return [<div styleName="salon-content">Some scheduling content :)</div>];
  }

  render() {
    const { salonTab } = this.props;
    return (
      <div styleName="salon-tab-content">
        {salonTab === 'info' && this.renderSalonInfo()}
        {salonTab === 'schedule' && this.renderSalonSchedule()}
      </div>
    );
  }
}
