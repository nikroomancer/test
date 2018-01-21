import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SalonHero from './SalonHero/SalonHero';
import SalonTabs from './SalonTabs/SalonTabs';
import SalonContent from './SalonContent/SalonContent';
import { fetchList, toggleSalonTab } from '../../reducers/list/listActions';

function mapStateToProps({ list }, { match }) {
  return {
    salon: list
      ? _.find(list.salons, function(salon) {
          return salon.id === parseInt(match.params.id, 10);
        })
      : null,
    salonTab: list.salonTab
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSalonTab: choice => dispatch(toggleSalonTab(choice)),
    fetchList: history => dispatch(fetchList(history))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Salon extends Component {
  componentDidMount() {
    const { salon, fetchList, history } = this.props;
    !salon && fetchList(history);
  }

  renderSalon() {
    const { salon, toggleSalonTab, salonTab } = this.props;
    return [
      <SalonHero key="SalonHero" salon={salon} />,
      <SalonTabs
        key="SalonTabs"
        salonTab={salonTab}
        toggleSalonTab={toggleSalonTab}
      />,
      <SalonContent key="SalonContent" salon={salon} salonTab={salonTab} />
    ];
  }

  render() {
    const { salon } = this.props;
    return (
      <div>
        <Navbar
          absolute
          icon="heart"
          backIcon="arrow-left-white"
          backLink="/list"
        />
        {salon && this.renderSalon()}
      </div>
    );
  }
}
export default withRouter(Salon);

Salon.propTypes = {
  salon: PropTypes.object,
  salonTab: PropTypes.string,
  toggleSalonTab: PropTypes.func,
  fetchList: PropTypes.func,
  history: PropTypes.object
};
