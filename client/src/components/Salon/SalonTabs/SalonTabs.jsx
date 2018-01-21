import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import * as styles from './SalonTabs.less';

@CSSModules(styles)
export default class SalonTabs extends Component {
  render() {
    const { salonTab, toggleSalonTab } = this.props;
    return (
      <div styleName="salon-tab-schoice">
        <div
          onClick={() => toggleSalonTab('info')}
          styleName={salonTab === 'info' && 'active'}
        >
          Info
        </div>
        <div
          onClick={() => toggleSalonTab('schedule')}
          styleName={salonTab === 'schedule' && 'active'}
        >
          Schema
        </div>
      </div>
    );
  }
}
