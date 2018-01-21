import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import {
  toggleFilterActive,
  setPanelMaxHeight,
  setSelectedPrice
} from '../../../reducers/list/listActions';
import { PRICES } from './constants';
import * as styles from './Filter.less';

function mapStateToProps({ list }) {
  return {
    filterActive: list.filterActive,
    panelMaxHeight: list.panelMaxHeight,
    selectedPrice: list.selectedPrice
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFilterActive: () => dispatch(toggleFilterActive()),
    setPanelMaxHeight: height => dispatch(setPanelMaxHeight(height)),
    setSelectedPrice: price => dispatch(setSelectedPrice(price))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles, { allowMultiple: true })
export default class Filter extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { filterActive, setPanelMaxHeight, panelMaxHeight } = this.props;
    if (prevProps.filterActive !== filterActive) {
      const panel = document.getElementById('filter-panel-09382504985');
      if (panelMaxHeight) {
        setPanelMaxHeight(0);
      } else {
        setPanelMaxHeight(panel.scrollHeight);
      }
    }
  }

  render() {
    const {
      filterActive,
      panelMaxHeight,
      selectedPrice,
      toggleFilterActive,
      setSelectedPrice
    } = this.props;
    return (
      <div>
        <button
          onClick={() => toggleFilterActive()}
          styleName={`accordion${filterActive ? ' active' : ''}`}
        >
          {selectedPrice.label}
        </button>
        <div
          id="filter-panel-09382504985"
          style={{ maxHeight: `${panelMaxHeight}px` }}
        >
          <ul styleName="panel-list">
            {PRICES.map(price => {
              return (
                <li onClick={() => setSelectedPrice(price)} key={price.key}>
                  {`${price.label.replace('Pris ', '')}`}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
