import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import { fetchList } from '../../../reducers/list/listActions';
import * as styles from './ListContent.less';

function mapStateToProps({ list }) {
  return { salons: list.salons, selectedPrice: list.selectedPrice };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchList: () => dispatch(fetchList())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class ListContent extends Component {
  componentDidMount() {
    const { fetchList, salons } = this.props;
    !salons && fetchList();
  }

  renderCard = () => {
    const { salons, selectedPrice } = this.props;

    const filteredList = salons.filter(
      salon =>
        selectedPrice.start <= salon.price && selectedPrice.end >= salon.price
    );

    return filteredList.map(salon => {
      return (
        <Link
          to={`/salon/${salon.id}`}
          styleName="card-container"
          key={`salon-card-${salon.id}`}
        >
          <div>
            <div styleName="time">{salon.time}</div>
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
              <div>{salon.address}</div>
            </div>
            <div styleName="price-duration">
              <div>{`${salon.price} kr`}</div>
              <div>{`${salon.duration} min`}</div>
            </div>
          </div>
        </Link>
      );
    });
  };

  render() {
    const { salons } = this.props;
    return <div styleName="container">{salons && this.renderCard()}</div>;
  }
}

ListContent.propTypes = {
  salons: PropTypes.array,
  selectedPrice: PropTypes.object,
  fetchList: PropTypes.func
};
